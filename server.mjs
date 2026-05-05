import { createServer } from "node:http";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { randomBytes, timingSafeEqual } from "node:crypto";
import { dirname, extname, join, resolve } from "node:path";

const root = resolve(".");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || (process.env.RENDER ? "0.0.0.0" : "127.0.0.1");
const dataFile = resolve(process.env.APP_DATA_FILE || join(root, "data", "app-data.json"));
const dataDir = dirname(dataFile);
const username = process.env.APP_USERNAME || "Amministratore";
const password = process.env.APP_PASSWORD || "3475138821";
const sessions = new Map();
const types = {
  ".html": "text/html;charset=utf-8",
  ".css": "text/css;charset=utf-8",
  ".js": "text/javascript;charset=utf-8",
  ".json": "application/json;charset=utf-8"
};
const publicFiles = new Set(["/index.html", "/styles.css", "/app.js"]);

createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const pathname = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);

  if (pathname === "/login" && request.method === "GET") {
    if (isAuthenticated(request)) return redirect(response, "/");
    return sendHtml(response, loginPage(""));
  }

  if (pathname === "/login" && request.method === "POST") {
    return handleLogin(request, response);
  }

  if (pathname === "/api/logout" && request.method === "POST") {
    const token = getSessionToken(request);
    if (token) sessions.delete(token);
    response.writeHead(303, {
      "Location": "/login",
      "Set-Cookie": "cv_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax"
    });
    response.end();
    return;
  }

  if (pathname === "/api/session" && request.method === "GET") {
    return sendJson(response, { authenticated: isAuthenticated(request) }, isAuthenticated(request) ? 200 : 401);
  }

  if (pathname === "/api/data" && request.method === "GET") {
    if (!isAuthenticated(request)) return sendJson(response, { error: "Non autorizzato" }, 401);
    return sendJson(response, await readSharedData());
  }

  if (pathname === "/api/data" && request.method === "POST") {
    if (!isAuthenticated(request)) return sendJson(response, { error: "Non autorizzato" }, 401);
    return handleSaveData(request, response);
  }

  if (!isAuthenticated(request)) {
    if (pathname === "/index.html") return sendHtml(response, loginPage(""));
    response.writeHead(401, { "Content-Type": "text/plain;charset=utf-8" });
    response.end("Non autorizzato");
    return;
  }

  if (!publicFiles.has(pathname)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const filePath = resolve(join(root, pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store, max-age=0"
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`Contadini Volanti gestionale: http://${host}:${port}`);
});

async function handleLogin(request, response) {
  const body = await readBody(request, 1024 * 20);
  const params = new URLSearchParams(body);
  const user = params.get("username") || "";
  const pass = params.get("password") || "";

  if (!safeEqual(user, username) || !safeEqual(pass, password)) {
    response.writeHead(401, { "Content-Type": "text/html;charset=utf-8" });
    response.end(loginPage("Credenziali non valide."));
    return;
  }

  const token = randomBytes(32).toString("hex");
  sessions.set(token, { createdAt: Date.now(), user });
  response.writeHead(303, {
    "Location": "/",
    "Set-Cookie": `cv_session=${token}; Path=/; Max-Age=604800; HttpOnly; SameSite=Lax`
  });
  response.end();
}

async function handleSaveData(request, response) {
  try {
    const body = await readBody(request, 1024 * 1024 * 25);
    const data = JSON.parse(body);
    await mkdir(dataDir, { recursive: true });
    await writeFile(dataFile, JSON.stringify(data, null, 2), "utf8");
    sendJson(response, { ok: true, savedAt: new Date().toISOString() });
  } catch (error) {
    console.warn("Salvataggio dati non riuscito.", error);
    sendJson(response, { error: "Dati non validi o troppo grandi" }, 400);
  }
}

async function readSharedData() {
  try {
    const raw = await readFile(dataFile, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function isAuthenticated(request) {
  const token = getSessionToken(request);
  return Boolean(token && sessions.has(token));
}

function getSessionToken(request) {
  const cookie = request.headers.cookie || "";
  return cookie.split(";")
    .map((item) => item.trim().split("="))
    .find(([key]) => key === "cv_session")?.[1] || "";
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

function readBody(request, maxBytes) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";
    let size = 0;
    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > maxBytes) {
        rejectBody(new Error("Payload troppo grande"));
        request.destroy();
        return;
      }
      body += chunk;
    });
    request.on("end", () => resolveBody(body));
    request.on("error", rejectBody);
  });
}

function redirect(response, location) {
  response.writeHead(303, { Location: location });
  response.end();
}

function sendJson(response, payload, status = 200) {
  response.writeHead(status, { "Content-Type": "application/json;charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function sendHtml(response, html, status = 200) {
  response.writeHead(status, { "Content-Type": "text/html;charset=utf-8" });
  response.end(html);
}

function loginPage(error) {
  return `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Accesso | Contadini Volanti</title>
    <style>
      :root { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #06331f; }
      * { box-sizing: border-box; }
      body { min-height: 100vh; margin: 0; display: grid; place-items: center; padding: 24px; background: linear-gradient(180deg, #eef9ee 0%, #fbfdf2 100%); }
      .login-card { width: min(420px, 100%); padding: 28px; border: 1px solid #dff1df; border-radius: 24px; background: rgba(255,255,255,.94); box-shadow: 0 18px 50px rgba(11, 79, 43, .12); }
      .brand { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
      .mark { width: 54px; height: 54px; border-radius: 16px; background: linear-gradient(145deg, #95f281 0%, #20d494 58%, #0b8045 100%); box-shadow: 0 14px 28px rgba(0,0,0,.14); }
      .kicker { display: block; color: #6b9b80; font-size: .72rem; font-weight: 900; letter-spacing: .2em; text-transform: uppercase; }
      h1 { margin: 0; font-size: 1.45rem; line-height: 1.1; }
      h2 { margin: 0 0 8px; font-size: 1.7rem; }
      p { margin: 0 0 20px; color: #789a88; line-height: 1.45; }
      form { display: grid; gap: 14px; }
      label { display: grid; gap: 7px; color: #316b55; font-weight: 800; }
      input { min-height: 46px; border: 1px solid #dfebdd; border-radius: 10px; padding: 0 13px; font: inherit; color: #06331f; }
      input:focus-visible, button:focus-visible { outline: 3px solid rgba(245, 239, 159, .95); outline-offset: 3px; }
      button { min-height: 46px; border: 0; border-radius: 23px; color: white; background: linear-gradient(90deg, #0b8440, #6aa500); font: inherit; font-weight: 900; cursor: pointer; }
      .error { margin: 0 0 14px; padding: 12px; border: 1px solid #f2d4dc; border-radius: 12px; color: #b93f5c; background: #fff0f3; font-weight: 800; }
    </style>
  </head>
  <body>
    <main class="login-card">
      <div class="brand">
        <span class="mark" aria-hidden="true"></span>
        <span><span class="kicker">Agritech gestionale</span><h1>Contadini Volanti</h1></span>
      </div>
      <h2>Accesso riservato</h2>
      <p>Inserisci le credenziali amministratore per aprire il gestionale operativo.</p>
      ${error ? `<div class="error" role="alert">${escapeHtml(error)}</div>` : ""}
      <form method="post" action="/login">
        <label>Utente <input name="username" autocomplete="username" required autofocus /></label>
        <label>Password <input name="password" type="password" autocomplete="current-password" required /></label>
        <button type="submit">Entra nel gestionale</button>
      </form>
    </main>
  </body>
</html>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}
