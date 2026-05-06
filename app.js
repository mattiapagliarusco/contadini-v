const icons = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21V10"/><path d="M12 10C8 5 4 5 3 5c0 5 4 8 9 5Z"/><path d="M12 11c4-5 8-5 9-5 0 5-4 8-9 5Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z"/><path d="M12 8v8"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-4 3 3 5-7"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M6 21a6 6 0 0 1 12 0"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>',
  drone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 12h4"/><path d="M12 10v4"/><path d="M5 5h4"/><path d="M15 5h4"/><path d="M5 19h4"/><path d="M15 19h4"/><path d="M7 7l5 5 5-5"/><path d="M7 17l5-5 5 5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z"/></svg>'
};

const state = {
  active: "dashboard",
  query: "",
  filters: { crop: "Tutte", status: "Tutti", priority: "Tutte" },
  operations: [],
  capacity: {
    month: 2,
    year: 2026,
    fleet: { t100: 1 }
  }
};

const navItems = [
  ["dashboard", "Dashboard", "dashboard"],
  ["fields", "Campi", "sprout"],
  ["permits", "Autorizzazioni", "shield"],
  ["vra", "VRA", "chart"],
  ["capacity", "Capienza annua", "calendar"],
  ["backend", "Backend admin", "shield"],
  ["quotes", "Preventivi", "chart"],
  ["portal", "Il mio campo", "user"],
  ["whatsapp", "WhatsApp", "phone"],
  ["missions", "Mission Control", "drone"],
  ["reports", "Report", "calendar"],
  ["farmers", "Contadini", "users"],
  ["reminders", "Reminder", "bell"]
];

const fields = [
  { id: "VIT-014", name: "Vigneto Collina Est", crop: "Vite", client: "Azienda Agricola Bianchi", owner: "Marco Bianchi", city: "Valdobbiadene", hectares: 6.8, auth: "Valid", vra: "Pronta", reminder: "Trattamento fogliare entro 3 giorni", note: "Trattamento mirato per blocchi con diversa vigoria." },
  { id: "MAI-022", name: "Mais San Pietro", crop: "Mais", client: "Societa Agricola Dal Maso", owner: "Elisa Dal Maso", city: "Rovigo", hectares: 18.4, auth: "Da rinnovare", vra: "In analisi", reminder: "Aggiornare piano azoto", note: "Prescrizione azoto in revisione." },
  { id: "FRT-009", name: "Frutteto Nord", crop: "Frutta", client: "Tenuta San Rocco", owner: "Giulio Ferro", city: "Verona", hectares: 9.1, auth: "Valid", vra: "Mappa disponibile", reminder: "Inviare report al cliente", note: "Layer stress idrico pronto." },
  { id: "OLI-004", name: "Oliveto Casetta", crop: "Olivo", client: "Azienda Agricola Bianchi", owner: "Marco Bianchi", city: "Vicenza", hectares: 5.2, auth: "In verifica", vra: "Bozza", reminder: "Controllo vento e finestra operativa", note: "Verifica meteo prima di pianificare il passaggio." }
];

const permits = [
  { id: "AUT-3102", title: "SCIA trattamento sperimentale", client: "Societa Agricola Dal Maso", field: "Mais San Pietro", crop: "Mais", due: "29 mar 2026", status: "Urgente", priority: "Alta", note: "Rinnovo necessario prima di procedere con trattamento VRA." },
  { id: "AUT-3108", title: "Autorizzazione campo vicino area sensibile", client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", crop: "Vite", due: "18 apr 2026", status: "Valid", priority: "Media", note: "Documentazione pronta e allegati caricati." },
  { id: "AUT-3121", title: "Documentazione operativa frutteto", client: "Tenuta San Rocco", field: "Frutteto Nord", crop: "Frutta", due: "03 apr 2026", status: "Da verificare", priority: "Media", note: "Manca conferma particelle lato nord." }
];

const vraMaps = [
  { id: "VRA-201", field: "Vigneto Collina Est", crop: "Vite", status: "Pronto da inviare", standard: 280, vra: 246, saving: "-34 kg/ha (12%)", note: "Ridurre fertilizzazione del 12% nelle zone ad alta vigoria." },
  { id: "VRA-202", field: "Mais San Pietro", crop: "Mais", status: "In revisione", standard: 350, vra: 301, saving: "-49 kg/ha (14%)", note: "Aumentare dose nelle aree a bassa copertura, ridurre dell'8% nelle testate." },
  { id: "VRA-203", field: "Frutteto Nord", crop: "Frutta", status: "Mappa disponibile", standard: 240, vra: 210, saving: "-30 kg/ha (12.5%)", note: "Intervento localizzato solo in 3 blocchi." }
];

const farmers = [
  { name: "Azienda Agricola Bianchi", contact: "Marco Bianchi", city: "Valdobbiadene", crops: ["Vite", "Olivo", "Mais"], status: "Attivo", last: "Oggi, 08:45", phone: "+39 348 000 1122", email: "marco@aziendabianchi.it", vat: "IT 04567890261", channel: "WhatsApp" },
  { name: "Societa Agricola Dal Maso", contact: "Elisa Dal Maso", city: "Rovigo", crops: ["Mais"], status: "In attesa", last: "Ieri, 18:10", phone: "+39 347 000 3344", email: "elisa@dalmaso.it", vat: "IT 04421098765", channel: "Email" },
  { name: "Tenuta San Rocco", contact: "Giulio Ferro", city: "Verona", crops: ["Frutta"], status: "Attivo", last: "24 mar, 16:20", phone: "+39 349 000 9988", email: "info@tenutasanrocco.it", vat: "IT 03987654321", channel: "WhatsApp" }
];

const reminders = [
  { id: "REM-01", title: "Invia update WhatsApp ad Azienda Agricola Bianchi", when: "Oggi / 17:00", type: "Cliente", priority: "Alta", crop: "Vite", note: "Messaggio pronto con riepilogo intervento fogliare." },
  { id: "REM-02", title: "Controlla meteo e vento per Vigneto Collina Est", when: "Domani / 07:30", type: "Operativo", priority: "Alta", crop: "Vite", note: "Verificare finestra vento sotto soglia." },
  { id: "REM-03", title: "Rinnova pratica AUT-3102", when: "Domani / 11:00", type: "Autorizzazioni", priority: "Urgente", crop: "Mais", note: "Pratica legata al trattamento sperimentale mais." },
  { id: "REM-04", title: "Genera report prescrizione mais per Dal Maso", when: "28 mar / 09:00", type: "VRA", priority: "Media", crop: "Mais", note: "Allegare confronto uso normale vs metodo VRA." }
];

const cropLabels = {
  mais: "Mais",
  vite: "Vite",
  frutta: "Frutta",
  olivo: "Olivo",
  orticole: "Orticole"
};

const operationLabels = {
  "lancio-insetti": "Lancio insetti",
  "fert-solido-100": "Fertilizzante solido 100 kg/ha",
  "fert-solido-200": "Fertilizzante solido 200 kg/ha",
  "irrorazione-pieno-campo": "Irrorazione pieno campo"
};

const operationCapacityByCrop = {
  mais: { "lancio-insetti": 70, "fert-solido-100": 40, "fert-solido-200": 25, "irrorazione-pieno-campo": 80 },
  vite: { "lancio-insetti": 38, "fert-solido-100": 24, "fert-solido-200": 16, "irrorazione-pieno-campo": 34 },
  frutta: { "lancio-insetti": 42, "fert-solido-100": 26, "fert-solido-200": 18, "irrorazione-pieno-campo": 40 },
  olivo: { "lancio-insetti": 36, "fert-solido-100": 22, "fert-solido-200": 15, "irrorazione-pieno-campo": 32 },
  orticole: { "lancio-insetti": 58, "fert-solido-100": 34, "fert-solido-200": 22, "irrorazione-pieno-campo": 62 }
};

const bookings = [
  { id: "JOB-001", date: "2026-03-12", service: "lancio-insetti", crop: "mais", terrainLevel: 1, client: "Societa Agricola Dal Maso", field: "Mais San Pietro", hectares: 42, drone: "T100-01", status: "Venduto" },
  { id: "JOB-002", date: "2026-03-12", service: "lancio-insetti", crop: "mais", terrainLevel: 1, client: "Azienda Agricola Bianchi", field: "Appezzamento Nord", hectares: 18, drone: "T100-01", status: "Venduto" },
  { id: "JOB-003", date: "2026-03-18", service: "lancio-insetti", crop: "mais", terrainLevel: 1, client: "Societa Agricola Dal Maso", field: "Mais San Pietro", hectares: 70, drone: "T100-01", status: "Completo" },
  { id: "JOB-004", date: "2026-03-25", service: "irrorazione-pieno-campo", crop: "olivo", terrainLevel: 7, client: "Azienda Agricola Bianchi", field: "Oliveto Casetta", hectares: 12, drone: "T100-01", status: "Venduto" },
  { id: "JOB-005", date: "2026-04-08", service: "fert-solido-100", crop: "vite", terrainLevel: 4, client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", hectares: 10, drone: "T100-01", status: "Venduto" }
];

const quoteDefaults = {
  basePrice: 95,
  minimumExit: 420,
  distanceKm: 38,
  urgency: 12,
  cropComplexity: 10,
  authComplexity: 8,
  addOns: 260,
  seasonalDiscount: 7,
  variableCost: 42,
  hectares: 18
};

const whatsappTemplates = {
  report: "Ciao Marco, abbiamo completato il trattamento su Vigneto Collina Est. Intervento eseguito su 6,8 ha. Report disponibile qui. Prossimo controllo consigliato tra 12 giorni.",
  reminder: "Ciao Marco, ti ricordiamo il sopralluogo su Vigneto Collina Est domani alle 07:30. Prima del passaggio controlliamo vento, meteo e autorizzazioni.",
  quote: "Ciao Marco, abbiamo preparato il preventivo per Vigneto Collina Est. Include intervento drone, report finale e confronto VRA. Puoi confermarlo rispondendo a questo messaggio.",
  documents: "Ciao Marco, per completare la pratica ci servono particelle catastali aggiornate e autorizzazione del proprietario. Puoi inviarle qui su WhatsApp.",
  review: "Ciao Marco, grazie per aver lavorato con Contadini Volanti. Se il servizio ti e stato utile, una recensione o un contatto agricolo da suggerirci ci aiuterebbe molto."
};

const missionChecks = ["Drone", "Meteo", "Autorizzazioni", "DPI", "Prodotto", "Batterie"];
const missions = [
  { id: "MIS-014", client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", position: "Valdobbiadene", hectares: 6.8, product: "Trattamento fogliare", material: "82 l", batteries: 5, time: "2h 20m", margin: "38%", status: "Da preparare", checks: ["Autorizzazioni"] },
  { id: "MIS-022", client: "Societa Agricola Dal Maso", field: "Mais San Pietro", position: "Rovigo", hectares: 18.4, product: "Lancio insetti", material: "18,4 ha dose", batteries: 7, time: "3h 10m", margin: "42%", status: "In corso", checks: ["Drone", "Meteo", "Autorizzazioni", "DPI"] }
];

const missionReports = [
  { id: "RPT-014", missionId: "MIS-014", client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", status: "Bozza", agent: "Operatore drone + consulente VRA", files: ["mappa-vigoria.geojson", "foto-prima.jpg", "scheda-intervento.pdf"], documents: ["AUT-3108", "DPI check", "Meteo operativo"], summary: "Trattamento fogliare pianificato con report VRA e confronto zone." },
  { id: "RPT-022", missionId: "MIS-022", client: "Societa Agricola Dal Maso", field: "Mais San Pietro", status: "Da chiudere", agent: "Operatore T100", files: ["traccia-volo.kml", "registro-lancio.csv"], documents: ["AUT-3102", "Scheda prodotto", "Check drone"], summary: "Lancio insetti in corso, dati missione disponibili per consuntivo operativo." }
];

const $ = (selector) => document.querySelector(selector);
const workspace = $("#workspace");

function boot() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
  renderNav();
  renderFilterOptions();
  bindEvents();
  render();
}

function bindEvents() {
  $("#globalSearch").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    render();
  });
  $("#filterToggle").addEventListener("click", () => {
    $("#filterBar").hidden = !$("#filterBar").hidden;
  });
  $("#cropFilter").addEventListener("change", (event) => { state.filters.crop = event.target.value; render(); });
  $("#statusFilter").addEventListener("change", (event) => { state.filters.status = event.target.value; render(); });
  $("#priorityFilter").addEventListener("change", (event) => { state.filters.priority = event.target.value; render(); });
  $("#resetFilters").addEventListener("click", () => {
    state.filters = { crop: "Tutte", status: "Tutti", priority: "Tutte" };
    renderFilterOptions();
    render();
  });
  $("#newOperation").addEventListener("click", () => $("#operationModal").showModal());
  $("#logoutButton")?.addEventListener("click", logout);
  $("#operationForm").addEventListener("submit", saveOperation);
  $("#drawerBackdrop").addEventListener("click", closeDrawer);
  document.addEventListener("submit", (event) => {
    if (event.target?.id === "bookingForm") saveBooking(event);
  });
  document.addEventListener("click", (event) => {
    const exportButton = event.target.closest?.(".js-export-ai");
    if (exportButton) exportAiReadable(exportButton.dataset.format);
    const startMission = event.target.closest?.(".js-start-mission");
    if (startMission) startMissionFlight(startMission.dataset.id);
  });
  document.addEventListener("input", (event) => {
    if (event.target?.id === "fleetT100") {
      state.capacity.fleet.t100 = Math.max(0, Number(event.target.value || 0));
      render();
    }
    if (event.target?.id === "bookingTerrain" || event.target?.id === "bookingHectares") updateBookingPreview();
    if (event.target?.closest?.("#quoteForm")) updateQuotePreview();
  });
  document.addEventListener("change", (event) => {
    if (event.target?.id === "capacityMonth") {
      state.capacity.month = Number(event.target.value);
      render();
    }
    if (["bookingService", "bookingCrop", "bookingTerrain", "bookingDate"].includes(event.target?.id)) updateBookingPreview();
    if (event.target?.closest?.("#quoteForm")) updateQuotePreview();
    if (event.target?.id === "waTemplate") updateWhatsAppPreview();
    if (event.target?.classList?.contains("mission-check")) updateMissionCheck(event.target);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
}

async function logout() {
  try {
    await fetch("/api/logout", { method: "POST" });
  } catch {
    // Se l'app viene aperta come file statico, non c'e una sessione server da chiudere.
  }
  window.location.href = "/login";
}

function renderNav() {
  $("#navList").innerHTML = navItems.map(([key, label, icon]) => `
    <button class="nav-item ${state.active === key ? "active" : ""}" type="button" data-view="${key}">
      ${icons[icon]}<span>${label}</span>
    </button>
  `).join("");
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.active = button.dataset.view;
      renderNav();
      render();
    });
  });
}

function renderFilterOptions() {
  fillSelect($("#cropFilter"), ["Tutte", ...new Set(fields.map((field) => field.crop))], state.filters.crop);
  fillSelect($("#statusFilter"), ["Tutti", "Valid", "Da rinnovare", "In verifica", "Urgente", "Da verificare", "Pronta", "Bozza", "In analisi", "Mappa disponibile"], state.filters.status);
  fillSelect($("#priorityFilter"), ["Tutte", "Alta", "Media", "Urgente"], state.filters.priority);
}

function fillSelect(node, options, selected) {
  node.innerHTML = options.map((option) => `<option ${option === selected ? "selected" : ""}>${option}</option>`).join("");
}

function render() {
  renderMetrics();
  const views = {
    dashboard: renderDashboard,
    fields: renderFields,
    permits: renderPermits,
    vra: renderVra,
    capacity: renderCapacity,
    backend: renderBackend,
    quotes: renderQuotes,
    portal: renderPortal,
    whatsapp: renderWhatsApp,
    missions: renderMissions,
    reports: renderReports,
    farmers: renderFarmers,
    reminders: renderReminders
  };
  views[state.active]();
}

function renderMetrics() {
  const urgentCount = permits.filter((permit) => permit.status === "Urgente").length;
  $("#todayFields").textContent = 8 + state.operations.length;
  $("#urgentPermits").textContent = urgentCount;
  $("#updatesToSend").textContent = reminders.length + state.operations.filter((op) => op.type === "reminder").length;
  $("#metrics").innerHTML = [
    ["Campi attivi", "42", "136,7 ettari gestiti", "sprout"],
    ["Autorizzazioni valide", "18", "2 in scadenza entro 7 giorni", "shield"],
    ["Mappe VRA", "11", "4 da consegnare oggi", "chart"],
    ["Reminder aperti", "9", "3 ad alta priorita", "bell"]
  ].map(([label, value, detail, icon]) => `
    <article class="metric-card">
      <span class="metric-icon">${icons[icon]}</span>
      <p>${label}</p>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `).join("");
}

function renderDashboard() {
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Vista rapida campi", "Stato autorizzazioni, coltura e avanzamento VRA", true)}
      ${fieldsTable(filterItems(fields))}
    </section>
    <section class="panel">
      ${panelHead("Flusso operativo consigliato", "Dalla mappa al promemoria cliente in un solo gestionale", true)}
      <div class="flow-grid">
        ${flowCard("sprout", "1. Campo", "Importa parcelle, colture, proprietari e vincoli")}
        ${flowCard("shield", "2. Autorizzazioni", "Scadenze, documenti e stato pratica")}
        ${flowCard("chart", "3. VRA", "Mappa, prescrizione e report operativo")}
        ${flowCard("bell", "4. Update", "Invio al contadino e reminder")}
      </div>
    </section>
  `;
  bindOpeners();
  bindExport();
}

function renderFields() {
  const items = filterItems(fields);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Archivio campi", "Superficie, coltura, comune, stato pratica e note operative", true)}
      ${items.length ? `<div class="card-grid">${items.map(fieldCard).join("")}</div>` : emptyState()}
    </section>
  `;
  bindOpeners();
  bindExport();
}

function renderPermits() {
  const items = filterItems(permits);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Gestione autorizzazioni", "Documenti, scadenze, stato e priorita", true)}
      <div class="list-stack">${items.length ? items.map(permitItem).join("") : emptyState()}</div>
    </section>
  `;
  bindOpeners();
  bindExport();
}

function renderVra() {
  const items = filterItems(vraMaps);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Centro VRA", "Mappe, prescrizioni, vantaggi attesi e stato consegna", true)}
      <div class="list-stack">${items.length ? items.map(vraItem).join("") : emptyState()}</div>
    </section>
    <section class="panel">
      <div class="panel-head">
        <div><p class="panel-subtitle">Confronto fertilizzante</p><h2>Uso normale vs uso con metodo VRA</h2></div>
        <span class="pill ok">Risparmio medio 12%</span>
      </div>
      <div class="comparison">
        <table>
          <thead><tr><th>Campo</th><th>Coltura</th><th>Uso normale</th><th>Uso con VRA</th><th>Risparmio</th></tr></thead>
          <tbody>${vraMaps.map((map) => `<tr><td>${map.field}</td><td>${map.crop}</td><td>${map.standard} kg/ha</td><td>${map.vra} kg/ha</td><td class="saving">${map.saving}</td></tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
  bindOpeners();
  bindExport();
}

function renderCapacity() {
  const monthBookings = bookingsForMonth(state.capacity.year, state.capacity.month);
  const yearBookings = bookings.filter((booking) => booking.date.startsWith(`${state.capacity.year}-`));
  const soldYear = sumHectares(yearBookings);
  const soldDays = new Set(yearBookings.map((booking) => booking.date)).size;
  const avgUsage = soldDays
    ? Math.round([...new Set(yearBookings.map((booking) => booking.date))].reduce((total, date) => total + usedPercentForDate(date), 0) / soldDays)
    : 0;
  const fullDays = [...new Set(yearBookings.map((booking) => booking.date))].filter((date) => remainingPercentForDate(date) === 0).length;

  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Capienza operativa annua", "Calendario operatori, flotta droni e giornate vendute ai clienti", true)}
      <div class="capacity-controls">
        <label>Numero T100 in flotta
          <input id="fleetT100" type="number" min="0" step="1" value="${state.capacity.fleet.t100}" />
        </label>
        <label>Mese operativo
          <select id="capacityMonth">
            ${monthNames.map((name, index) => `<option value="${index}" ${index === state.capacity.month ? "selected" : ""}>${name} ${state.capacity.year}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="capacity-summary">
        ${capacityStat("Giornata operativa", "100%", "Ogni prenotazione occupa una quota calcolata dai dati inseriti")}
        ${capacityStat("Saturazione media anno", `${avgUsage}%`, `${soldYear} ha venduti su ${soldDays} giorni`)}
        ${capacityStat("Giorni completi", String(fullDays), "Date arrivate al 100% operativo")}
        ${capacityStat("Metodo calcolo", "ha / max", "Coltura + operazione + terreno determinano la percentuale")}
      </div>
    </section>

    <section class="panel">
      <div class="capacity-layout">
        <div>
          <div class="panel-head">
            <div>
              <h2>Calendario capienza</h2>
              <p class="panel-subtitle">Clicca un giorno, compila i dati del lavoro e aggiungi la quota percentuale alla giornata</p>
            </div>
            <span class="pill ${state.capacity.fleet.t100 ? "ok" : "danger"}">${state.capacity.fleet.t100} T100</span>
          </div>
          ${capacityCalendar()}
        </div>
        <aside class="booking-box">
          <p class="spaced-label">Nuova vendita</p>
          <h2>Prenota quota operativa</h2>
          <form id="bookingForm">
            <label>Data lavoro <input name="date" id="bookingDate" type="date" value="${state.capacity.year}-${pad(state.capacity.month + 1)}-12" required /></label>
            <label>Cliente <input name="client" placeholder="Azienda Agricola Rossi" required /></label>
            <label>Campo <input name="field" placeholder="Campo o appezzamento" required /></label>
            <label>Coltura
              <select name="crop" id="bookingCrop">
                ${Object.entries(cropLabels).map(([key, label]) => `<option value="${key}">${label}</option>`).join("")}
              </select>
            </label>
            <label>Tipo operazione
              <select name="service" id="bookingService">
                ${Object.entries(operationLabels).map(([key, label]) => `<option value="${key}">${label}</option>`).join("")}
              </select>
            </label>
            <label>Difficolta terreno 1-10
              <input name="terrainLevel" id="bookingTerrain" type="range" min="1" max="10" step="1" value="1" />
            </label>
            <label>Ettari da vendere <input name="hectares" id="bookingHectares" type="number" min="1" step="1" placeholder="Es. 25" required /></label>
            <p class="form-note" id="bookingNote">Seleziona un giorno e inserisci i dati: la percentuale viene calcolata automaticamente.</p>
            <button class="btn primary" type="submit">${icons.plus} Aggiungi prenotazione</button>
          </form>
        </aside>
      </div>
    </section>

    <section class="panel">
      ${panelHead("Giornate vendute", "Prenotazioni e saturazione operativa per cliente", true)}
      <div class="data-table capacity-table">
        <div class="table-row header"><span>Data</span><span>Cliente</span><span>Servizio</span><span>Quota</span><span>Residuo giorno</span></div>
        ${monthBookings.length ? monthBookings.map(bookingRow).join("") : '<div class="empty-state">Nessuna giornata venduta nel mese selezionato.</div>'}
      </div>
    </section>
  `;
  bindCapacityDaySelection();
  bindOpeners();
  bindExport();
}

function renderBackend() {
  const folders = farmers.map((client) => {
    const clientFields = fields.filter((field) => field.client === client.name);
    const clientBookings = bookings.filter((booking) => booking.client === client.name);
    const clientMissions = missions.filter((mission) => mission.client === client.name);
    const clientReports = missionReports.filter((report) => report.client === client.name);
    const clientPermits = permits.filter((permit) => permit.client === client.name);
    return { client, clientFields, clientBookings, clientMissions, clientReports, clientPermits };
  });
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Backend amministratore", "Cartelle clienti, lavori, documenti e stato operativo aggregato", true)}
      <div class="capacity-summary">
        ${capacityStat("Clienti", String(farmers.length), "Cartelle operative aperte")}
        ${capacityStat("Lavori venduti", String(bookings.length), "Prenotazioni collegate a calendario")}
        ${capacityStat("Missioni", String(missions.length), "Campo, checklist e consuntivo")}
        ${capacityStat("Report", String(missionReports.length), "File e documenti post missione")}
      </div>
    </section>
    <section class="panel">
      ${panelHead("Cartelle clienti", "Sintesi amministrativa per azienda agricola", false)}
      <div class="admin-grid">
        ${folders.map((folder) => `
          <article class="portal-box">
            <div class="panel-head" style="margin:0 0 12px">
              <div><h3>${folder.client.name}</h3><p class="muted">${folder.client.contact} / ${folder.client.channel}</p></div>
              ${pill(folder.client.status)}
            </div>
            <dl class="admin-dl">
              <div><dt>Campi</dt><dd>${folder.clientFields.length}</dd></div>
              <div><dt>Lavori</dt><dd>${folder.clientBookings.length}</dd></div>
              <div><dt>Missioni</dt><dd>${folder.clientMissions.length}</dd></div>
              <div><dt>Report</dt><dd>${folder.clientReports.length}</dd></div>
              <div><dt>Permessi</dt><dd>${folder.clientPermits.length}</dd></div>
            </dl>
            <p class="muted">Ultimo aggiornamento: ${folder.client.last}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="panel">
      ${panelHead("Riassunto lavori", "Ogni lavoro creato aggiorna calendario, missioni, reminder e report", true)}
      <div class="data-table">
        <div class="table-row header"><span>Lavoro</span><span>Cliente</span><span>Operazione</span><span>Missione / report</span><span>Stato</span></div>
        ${bookings.map((booking) => `
          <button class="table-row js-open" data-kind="booking" data-id="${booking.id}" type="button">
            <span><h3>${booking.id}</h3><span class="muted">${formatDate(booking.date)} / ${booking.field}</span></span>
            <span>${booking.client}</span>
            <span>${operationLabels[booking.service]}<br><span class="muted">${bookingOccupancyPercent(booking)}% giornata</span></span>
            <span>${backendLinkedStatus(booking)}</span>
            <span>${pill(booking.status)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
  bindOpeners();
  bindExport();
}

function renderQuotes() {
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Preventivatore intelligente", "Pricing dinamico, margine atteso e break-even per cluster", true)}
      <div class="quote-layout">
        <form class="quote-form" id="quoteForm">
          ${quoteInput("Ettari", "hectares", quoteDefaults.hectares)}
          ${quoteInput("Prezzo base EUR/ha", "basePrice", quoteDefaults.basePrice)}
          ${quoteInput("Minimo uscita EUR", "minimumExit", quoteDefaults.minimumExit)}
          ${quoteInput("Distanza km", "distanceKm", quoteDefaults.distanceKm)}
          ${quoteInput("Urgenza %", "urgency", quoteDefaults.urgency)}
          ${quoteInput("Complessita coltura %", "cropComplexity", quoteDefaults.cropComplexity)}
          ${quoteInput("Complessita autorizzativa %", "authComplexity", quoteDefaults.authComplexity)}
          ${quoteInput("Report / VRA / mapping EUR", "addOns", quoteDefaults.addOns)}
          ${quoteInput("Sconto pacchetto %", "seasonalDiscount", quoteDefaults.seasonalDiscount)}
          ${quoteInput("Costo variabile EUR/ha", "variableCost", quoteDefaults.variableCost)}
        </form>
        <aside class="quote-result" id="quoteResult"></aside>
      </div>
    </section>
    <section class="panel">
      ${panelHead("Controllo cluster", "Confronto tra prezzo, costo, margine e rischio operativo", false)}
      <div class="comparison">
        <table>
          <thead><tr><th>Cluster</th><th>Prezzo medio</th><th>Costo variabile</th><th>Margine</th><th>Nota</th></tr></thead>
          <tbody>
            <tr><td>Mais pianura</td><td>95 EUR/ha</td><td>38 EUR/ha</td><td class="saving">60%</td><td>Volume scalabile</td></tr>
            <tr><td>Vite collinare</td><td>145 EUR/ha</td><td>66 EUR/ha</td><td class="saving">54%</td><td>Alta complessita</td></tr>
            <tr><td>Frutta con mapping</td><td>132 EUR/ha</td><td>58 EUR/ha</td><td class="saving">56%</td><td>Report ad alto valore</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
  updateQuotePreview();
  bindExport();
}

function renderPortal() {
  const client = farmers[0];
  const clientFields = fields.filter((field) => field.client === client.name);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead('Portale cliente "Il mio campo"', "Area riservata con campi, documenti, mappe e storico", true)}
      <div class="profile-box">
        <p class="muted">Cliente</p>
        <h3>${client.name}</h3>
        <div class="profile-grid">
          <p>Referente: <strong>${client.contact}</strong></p>
          <p>Canale: <strong>${client.channel}</strong></p>
          <p>Campi caricati: <strong>${clientFields.length}</strong></p>
          <p>Documenti aperti: <strong>3</strong></p>
        </div>
      </div>
      <div class="portal-grid">
        ${portalBox("Campi caricati", clientFields.map((field) => `${field.name} / ${field.hectares} ha`))}
        ${portalBox("Mappe e interventi", ["Mappa vigoria Vigneto Collina Est", "Layer stress Oliveto Casetta", "Prescrizione VRA in revisione"])}
        ${portalBox("Foto prima/dopo", ["Vigneto Collina Est / prima", "Vigneto Collina Est / dopo", "Oliveto Casetta / sopralluogo"])}
        ${portalBox("Storico trattamenti", ["Fogliare vite / 21 mar", "Controllo vento / 24 mar", "Report finale / 26 mar"])}
        ${portalBox("Documenti e autorizzazioni", ["AUT-3108 valida", "Pratica area sensibile", "Liberatoria proprietario"])}
        ${portalBox("Preventivi e reminder", ["Preventivo VRA 2026", "Reminder controllo tra 12 giorni", "Prossimo sopralluogo da confermare"])}
      </div>
    </section>
  `;
  bindExport();
}

function renderWhatsApp() {
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Contadino WhatsApp-first", "Messaggi automatici per report, reminder, preventivi e post-intervento", true)}
      <div class="whatsapp-layout">
        <div class="booking-box">
          <label>Tipo messaggio
            <select id="waTemplate">
              <option value="report">Report intervento</option>
              <option value="reminder">Reminder intervento</option>
              <option value="quote">Invio preventivo</option>
              <option value="documents">Richiesta documenti</option>
              <option value="review">Recensione / referral</option>
            </select>
          </label>
          <div class="pill-row">
            ${["Sopralluogo", "Meteo", "Post-intervento", "Autorizzazioni", "Report finale"].map((item) => `<span class="pill blue">${item}</span>`).join("")}
          </div>
        </div>
        <div class="phone-preview">
          <p class="spaced-label">WhatsApp</p>
          <div class="message-bubble" id="waPreview"></div>
          <button class="btn primary" type="button">${icons.phone} Prepara invio</button>
        </div>
      </div>
    </section>
  `;
  updateWhatsAppPreview();
  bindExport();
}

function backendLinkedStatus(booking) {
  const mission = missions.find((item) => item.bookingId === booking.id || (item.client === booking.client && item.field === booking.field));
  const report = missionReports.find((item) => item.bookingId === booking.id || item.missionId === mission?.id);
  return `
    <span class="muted">${mission?.id || "Missione da generare"}</span><br>
    <span class="muted">${report?.id || "Report da generare"}</span>
  `;
}

function renderMissions() {
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Mission Control", "Schermata campo per preparazione, esecuzione e dati reali missione", true)}
      <div class="mission-grid">
        ${missions.map(missionCard).join("")}
      </div>
    </section>
  `;
  bindExport();
}

function renderReports() {
  workspace.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Report post missione</h2>
          <p class="panel-subtitle">File generati, documenti operativi, permessi e formato leggibile da AI</p>
        </div>
        <div class="button-row">
          <button class="btn ghost js-export-ai" data-format="json" type="button">Esporta JSON AI</button>
          <button class="btn ghost js-export-ai" data-format="markdown" type="button">Esporta Markdown</button>
        </div>
      </div>
      <div class="report-grid">
        ${missionReports.map(reportCard).join("")}
      </div>
    </section>
    <section class="panel">
      ${panelHead("Schema dati AI", "Struttura normalizzata per agenti e automazioni", false)}
      <pre class="ai-schema">${escapeHtml(JSON.stringify(buildAiReadablePayload(), null, 2))}</pre>
    </section>
  `;
}

function renderFarmers() {
  const items = filterItems(farmers);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Anagrafica contadini", "Cliente, ultimo contatto e stato relazione", true)}
      <div class="card-grid">${items.length ? items.map(clientCard).join("") : emptyState()}</div>
    </section>
  `;
  bindOpeners();
  bindExport();
}

function renderReminders() {
  const items = filterItems([...reminders, ...state.operations.filter((op) => op.type === "reminder")]);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Centro reminder", "Promemoria per operazioni, clienti e pratiche", true)}
      <div class="list-stack">${items.length ? items.map(reminderItem).join("") : emptyState()}</div>
    </section>
  `;
  bindOpeners();
  bindExport();
}

function panelHead(title, subtitle, exportable) {
  return `
    <div class="panel-head">
      <div><h2>${title}</h2><p class="panel-subtitle">${subtitle}</p></div>
      ${exportable ? '<button class="btn ghost js-export" type="button">Esporta</button>' : ""}
    </div>
  `;
}

function fieldCard(field) {
  return `
    <button class="data-card js-open" data-kind="field" data-id="${field.id}" type="button">
      <div class="panel-head" style="margin:0"><div><h3>${field.name}</h3><p class="muted">${field.id} / ${field.city}</p></div><span class="pill blue">${field.crop}</span></div>
      <div class="mini-grid">
        <div class="mini-stat"><span>Ettari</span><strong>${field.hectares} ha</strong></div>
        <div class="mini-stat"><span>Cliente</span><strong>${field.client}</strong></div>
      </div>
      <div class="pill-row">${pill(field.auth)}${pill(field.vra)}</div>
      <p class="muted">${field.reminder}</p>
    </button>
  `;
}

function fieldsTable(items) {
  if (!items.length) return emptyState();
  return `
    <div class="data-table">
      <div class="table-row header"><span>Campo</span><span>Coltura</span><span>Autorizzazione</span><span>VRA</span><span>Reminder</span></div>
      ${items.map((field) => `
        <button class="table-row js-open" data-kind="field" data-id="${field.id}" type="button">
          <span><h3>${field.name}</h3><span class="muted">${field.client} / ${field.hectares} ha</span></span>
          <span>${field.crop}</span>
          <span>${pill(field.auth)}</span>
          <span>${pill(field.vra)}</span>
          <span class="muted">${field.reminder}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function permitItem(permit) {
  return `
    <button class="list-item js-open" data-kind="permit" data-id="${permit.id}" type="button">
      <span><h3>${permit.title}</h3><span class="muted">${permit.id} / ${permit.client} / ${permit.field}</span></span>
      <span class="highlight-box"><span class="muted">Scadenza</span><br><strong>${permit.due}</strong></span>
      ${pill(permit.status)}
    </button>
  `;
}

function vraItem(map) {
  return `
    <button class="list-item js-open" data-kind="vra" data-id="${map.id}" type="button">
      <span><h3>${map.field}</h3><span class="muted">${map.crop} / Mappa vigoria completata</span><p class="vra-copy">${map.note}</p></span>
      <span class="highlight-box"><span class="muted">Risparmio</span><br><strong>${map.saving}</strong></span>
      ${pill(map.status)}
    </button>
  `;
}

function clientCard(client) {
  return `
    <button class="client-card js-open" data-kind="farmer" data-id="${client.name}" type="button">
      <div class="panel-head" style="margin:0 0 14px"><div><h3>${client.name}</h3><p class="muted">${client.contact}</p></div>${pill(client.status)}</div>
      <p class="muted">Ultimo update: ${client.last}</p>
      <div class="pill-row">${client.crops.map((crop) => `<span class="pill blue">${crop}</span>`).join("")}</div>
    </button>
  `;
}

function reminderItem(reminder) {
  return `
    <button class="list-item js-open" data-kind="reminder" data-id="${reminder.id}" type="button">
      <span><h3>${reminder.title}</h3><span class="muted">${reminder.when || reminder.date || "Da pianificare"} / ${reminder.type || "Operativo"}</span></span>
      <span class="highlight-box"><span class="muted">Nota</span><br><strong>${reminder.note || "Operazione creata in sessione"}</strong></span>
      ${pill(reminder.priority || "Media")}
    </button>
  `;
}

function flowCard(icon, title, text) {
  return `<article class="flow-card">${icons[icon]}<h3>${title}</h3><p>${text}</p></article>`;
}

function quoteInput(label, name, value) {
  return `<label>${label}<input name="${name}" type="number" step="1" value="${value}" /></label>`;
}

function getQuoteValues() {
  const form = $("#quoteForm");
  const values = form ? Object.fromEntries(new FormData(form).entries()) : quoteDefaults;
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, Number(value || 0)]));
}

function updateQuotePreview() {
  const target = $("#quoteResult");
  if (!target) return;
  const v = getQuoteValues();
  const base = v.hectares * v.basePrice;
  const distance = v.distanceKm * 2.1;
  const complexityFactor = 1 + (v.urgency + v.cropComplexity + v.authComplexity) / 100;
  const gross = Math.max(base * complexityFactor + distance + v.addOns, v.minimumExit);
  const discount = gross * (v.seasonalDiscount / 100);
  const quote = Math.round(gross - discount);
  const variableCost = Math.round(v.hectares * v.variableCost + distance);
  const margin = quote - variableCost;
  const marginRate = quote ? Math.round((margin / quote) * 100) : 0;
  const breakEvenHa = Math.max(1, Math.ceil((v.minimumExit + distance) / Math.max(1, v.basePrice - v.variableCost)));
  target.innerHTML = `
    <p class="spaced-label">Risultato</p>
    <h2>${quote} EUR</h2>
    <div class="quote-kpis">
      ${capacityStat("Costo variabile", `${variableCost} EUR`, `${v.variableCost} EUR/ha + distanza`)}
      ${capacityStat("Margine atteso", `${margin} EUR`, `${marginRate}% sul preventivo`)}
      ${capacityStat("Break-even", `${breakEvenHa} ha`, "Superficie minima stimata")}
    </div>
    <p class="form-note">Formula: prezzo base + minimo uscita + distanza + urgenza + complessita coltura/autorizzativa + report/VRA - sconto stagionale.</p>
  `;
}

function portalBox(title, items) {
  return `
    <article class="portal-box">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function updateWhatsAppPreview() {
  const select = $("#waTemplate");
  const preview = $("#waPreview");
  if (!select || !preview) return;
  preview.textContent = whatsappTemplates[select.value];
}

function missionCard(mission) {
  const completed = (mission.checks || []).length;
  const progress = Math.round((completed / missionChecks.length) * 100);
  const ready = completed === missionChecks.length;
  const started = mission.status === "In corso" || mission.startedAt;
  return `
    <article class="mission-card" data-mission-id="${mission.id}">
      <div class="panel-head" style="margin:0 0 14px">
        <div><h3>${mission.field}</h3><p class="muted">${mission.id} / ${mission.client} / ${mission.position}</p></div>
        ${pill(mission.status)}
      </div>
      <div class="mini-grid">
        <div class="mini-stat"><span>Ettari</span><strong>${mission.hectares} ha</strong></div>
        <div class="mini-stat"><span>Prodotto</span><strong>${mission.product}</strong></div>
        <div class="mini-stat"><span>Litri/kg</span><strong>${mission.material}</strong></div>
        <div class="mini-stat"><span>Batterie</span><strong>${mission.batteries}</strong></div>
      </div>
      <div class="mission-progress-head">
        <span>Checklist volo</span>
        <strong class="js-mission-progress-text">${completed}/${missionChecks.length} completati</strong>
      </div>
      <div class="capacity-meter"><span class="js-mission-progress" style="width:${progress}%"></span></div>
      <div class="check-grid">
        ${missionChecks.map((check) => `<label><input class="mission-check" type="checkbox" data-mission-id="${mission.id}" value="${check}" ${(mission.checks || []).includes(check) ? "checked" : ""} /> ${check}</label>`).join("")}
      </div>
      <p class="muted">Tempo stimato: ${mission.time} / Margine previsto: ${mission.margin}</p>
      <div class="mission-actions">
        <button class="btn primary js-start-mission" data-id="${mission.id}" type="button" ${ready && !started ? "" : "disabled"}>${icons.phone} Start volo</button>
        <span class="muted js-start-hint">${started ? "Volo avviato e notifiche WhatsApp preparate." : ready ? "Checklist completa: puoi avviare il volo." : "Completa tutti i punti per attivare Start."}</span>
      </div>
      ${mission.whatsappNotice ? missionNotice(mission) : ""}
    </article>
  `;
}

function missionNotice(mission) {
  const notice = mission.whatsappNotice;
  return `
    <div class="mission-notice">
      <strong>Notifica volo iniziato</strong>
      <p>${notice.startedAtLabel}</p>
      <div class="button-row">
        <a class="btn ghost" href="${escapeHtml(notice.farmerUrl)}" target="_blank" rel="noopener">WhatsApp contadino</a>
        <a class="btn ghost" href="${escapeHtml(notice.companyUrl)}" target="_blank" rel="noopener">WhatsApp azienda</a>
      </div>
    </div>
  `;
}

function updateMissionCheck(input) {
  const mission = missions.find((item) => item.id === input.dataset.missionId);
  if (!mission) return;
  mission.checks = mission.checks || [];
  const wasStarted = Boolean(mission.startedAt);
  if (input.checked && !mission.checks.includes(input.value)) {
    mission.checks.push(input.value);
  }
  if (!input.checked) {
    mission.checks = mission.checks.filter((check) => check !== input.value);
    if (mission.status === "In corso") mission.status = "Da preparare";
    delete mission.startedAt;
    delete mission.whatsappNotice;
  }
  if (wasStarted && !input.checked) {
    render();
    return;
  }
  syncMissionCard(mission);
}

function syncMissionCard(mission) {
  const card = document.querySelector(`[data-mission-id="${mission.id}"]`);
  if (!card) return;
  const completed = (mission.checks || []).length;
  const ready = completed === missionChecks.length;
  const started = mission.status === "In corso" || mission.startedAt;
  const progress = Math.round((completed / missionChecks.length) * 100);
  const bar = card.querySelector(".js-mission-progress");
  const text = card.querySelector(".js-mission-progress-text");
  const button = card.querySelector(".js-start-mission");
  const hint = card.querySelector(".js-start-hint");
  if (bar) bar.style.width = `${progress}%`;
  if (text) text.textContent = `${completed}/${missionChecks.length} completati`;
  if (button) button.disabled = !ready || started;
  if (hint) {
    hint.textContent = started
      ? "Volo avviato e notifiche WhatsApp preparate."
      : ready
        ? "Checklist completa: puoi avviare il volo."
        : "Completa tutti i punti per attivare Start.";
  }
}

function startMissionFlight(id) {
  const mission = missions.find((item) => item.id === id);
  if (!mission) return;
  mission.checks = mission.checks || [];
  if (mission.checks.length !== missionChecks.length) return;
  mission.status = "In corso";
  mission.startedAt = new Date().toISOString();
  mission.whatsappNotice = buildMissionWhatsappNotice(mission);
  state.operations.unshift({
    id: `OP-${String(state.operations.length + 1).padStart(2, "0")}`,
    title: `Start volo ${mission.field}`,
    client: mission.client,
    date: mission.startedAt.slice(0, 10),
    note: "Notifiche WhatsApp preparate per azienda e contadino.",
    type: "reminder",
    priority: "Alta",
    crop: ""
  });
  openWhatsAppNotice(mission.whatsappNotice);
  render();
}

function buildMissionWhatsappNotice(mission) {
  const farmer = farmers.find((client) => client.name === mission.client);
  const startedAtLabel = new Date(mission.startedAt).toLocaleString("it-IT", { dateStyle: "short", timeStyle: "short" });
  const farmerName = farmer?.contact?.split(" ")[0] || "Cliente";
  const farmerMessage = `Ciao ${farmerName}, il volo su ${mission.field} e cominciato. Intervento: ${mission.product}, superficie prevista ${mission.hectares} ha. Ti aggiorniamo a missione completata con report e documenti.`;
  const companyMessage = `Missione avviata: ${mission.id} / ${mission.field}. Cliente: ${mission.client}. Operazione: ${mission.product}. Ettari: ${mission.hectares}. Checklist completa e volo iniziato alle ${startedAtLabel}.`;
  return {
    startedAtLabel,
    farmerMessage,
    companyMessage,
    farmerUrl: whatsappUrl(farmer?.phone, farmerMessage),
    companyUrl: whatsappUrl("", companyMessage)
  };
}

function whatsappUrl(phone, message) {
  const digits = String(phone || "").replace(/\D/g, "");
  const target = digits ? `/${digits}` : "";
  return `https://wa.me${target}?text=${encodeURIComponent(message)}`;
}

function openWhatsAppNotice(notice) {
  const first = window.open(notice.farmerUrl, "_blank", "noopener");
  if (!first) return;
  setTimeout(() => window.open(notice.companyUrl, "_blank", "noopener"), 400);
}

function reportCard(report) {
  const mission = missions.find((item) => item.id === report.missionId);
  const relatedPermits = permits.filter((permit) => permit.client === report.client || permit.field === report.field);
  return `
    <article class="portal-box">
      <div class="panel-head" style="margin:0 0 12px">
        <div><h3>${report.field}</h3><p class="muted">${report.id} / ${report.client}</p></div>
        ${pill(report.status)}
      </div>
      <p><strong>Missione:</strong> ${report.missionId}</p>
      <p><strong>Lavoro collegato:</strong> ${report.bookingId || mission?.bookingId || "Storico demo"}</p>
      <p><strong>Agente/operatore usato:</strong> ${report.agent}</p>
      <p><strong>Consuntivo:</strong> ${mission ? `${mission.hectares} ha / ${mission.time} / margine ${mission.margin}` : "Da collegare"}</p>
      <h3>File generati</h3>
      <div class="pill-row">${report.files.map((file) => `<span class="pill blue">${file}</span>`).join("")}</div>
      <h3>Documenti missione</h3>
      <div class="pill-row">${report.documents.map((doc) => `<span class="pill ok">${doc}</span>`).join("")}</div>
      <h3>Permessi operativi collegati</h3>
      <div class="pill-row">${relatedPermits.length ? relatedPermits.map((permit) => `<span class="pill warn">${permit.id} / ${permit.status}</span>`).join("") : '<span class="pill blue">Nessun permesso collegato</span>'}</div>
      <p class="muted">${report.summary}</p>
    </article>
  `;
}

function buildAiReadablePayload() {
  return {
    generated_at: new Date().toISOString(),
    app: "Contadini Volanti",
    reports: missionReports.map((report) => {
      const mission = missions.find((item) => item.id === report.missionId);
      const booking = bookings.find((item) => item.id === report.bookingId || item.id === mission?.bookingId);
      const relatedPermits = permits
        .filter((permit) => permit.client === report.client || permit.field === report.field)
        .map((permit) => ({
          permit_id: permit.id,
          title: permit.title,
          status: permit.status,
          due: permit.due,
          note: permit.note
        }));
      return {
        report_id: report.id,
        mission_id: report.missionId,
        booking_id: report.bookingId || mission?.bookingId || null,
        client: report.client,
        field: report.field,
        status: report.status,
        operator_agent: report.agent,
        files: report.files,
        operational_documents: report.documents,
        operational_permits: relatedPermits,
        booking: booking ? {
          date: booking.date,
          service: operationLabels[booking.service],
          crop: cropLabels[booking.crop],
          hectares: booking.hectares,
          drone: booking.drone,
          status: booking.status,
          capacity_percent: bookingOccupancyPercent(booking)
        } : null,
        mission: mission ? {
          hectares: mission.hectares,
          product: mission.product,
          material: mission.material,
          batteries: mission.batteries,
          estimated_time: mission.time,
          expected_margin: mission.margin,
          checklist_done: mission.checks
        } : null,
        summary: report.summary
      };
    })
  };
}

function exportAiReadable(format) {
  const payload = buildAiReadablePayload();
  const isMarkdown = format === "markdown";
  const text = isMarkdown ? aiPayloadToMarkdown(payload) : JSON.stringify(payload, null, 2);
  downloadText(`contadini-volanti-report-ai.${isMarkdown ? "md" : "json"}`, text, isMarkdown ? "text/markdown" : "application/json");
}

function aiPayloadToMarkdown(payload) {
  return [
    "# Contadini Volanti / Report AI",
    `Generato: ${payload.generated_at}`,
    "",
    ...payload.reports.flatMap((report) => [
      `## ${report.report_id} / ${report.field}`,
      `Cliente: ${report.client}`,
      `Missione: ${report.mission_id}`,
      `Lavoro: ${report.booking_id || "non collegato"}`,
      `Agente/operatore usato: ${report.operator_agent}`,
      `Stato: ${report.status}`,
      `File: ${report.files.join(", ")}`,
      `Documenti: ${report.operational_documents.join(", ")}`,
      `Permessi: ${report.operational_permits.map((permit) => `${permit.permit_id} ${permit.status}`).join(", ") || "nessuno"}`,
      `Sintesi: ${report.summary}`,
      ""
    ])
  ].join("\n");
}

function downloadText(filename, text, type) {
  const blob = new Blob([text], { type: `${type};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

function getOperationBaseCapacity(crop, service) {
  return operationCapacityByCrop[crop]?.[service] || 0;
}

function getTerrainFactor(level) {
  const normalized = Math.min(10, Math.max(1, Number(level || 1)));
  return 1 - ((normalized - 1) / 9) * .45;
}

function getBookingDailyCapacity(bookingLike) {
  return Math.max(1, Math.floor(getOperationBaseCapacity(bookingLike.crop, bookingLike.service) * getTerrainFactor(bookingLike.terrainLevel) * state.capacity.fleet.t100));
}

function bookingOccupancyPercent(bookingLike) {
  return Math.min(100, Math.round((Number(bookingLike.hectares || 0) / getBookingDailyCapacity(bookingLike)) * 100));
}

function bookingsForMonth(year, month) {
  const prefix = `${year}-${pad(month + 1)}-`;
  return bookings
    .filter((booking) => booking.date.startsWith(prefix))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function sumHectares(items) {
  return items.reduce((total, item) => total + Number(item.hectares || 0), 0);
}

function bookedForDate(date) {
  return bookings
    .filter((booking) => booking.date === date)
    .reduce((total, booking) => total + bookingOccupancyPercent(booking), 0);
}

function remainingForDate(date) {
  return Math.max(0, 100 - bookedForDate(date));
}

function usedPercentForDate(date) {
  return Math.min(100, bookedForDate(date));
}

function remainingPercentForDate(date) {
  return Math.max(0, 100 - usedPercentForDate(date));
}

function percentForHectares(hectares) {
  const preview = getBookingPreview();
  return preview ? Math.min(100, Math.round((Number(hectares || 0) / preview.capacity) * 100)) : 0;
}

function capacityStat(label, value, detail) {
  return `<article class="capacity-stat"><p>${label}</p><strong>${value}</strong><small>${detail}</small></article>`;
}

function capacityCalendar() {
  const { year, month } = state.capacity;
  const firstDate = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDate.getDay() + 6) % 7;
  const cells = [];
  for (let i = 0; i < startOffset; i += 1) cells.push('<div class="calendar-cell empty"></div>');
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${year}-${pad(month + 1)}-${pad(day)}`;
    const used = bookedForDate(date);
    const remaining = remainingForDate(date);
    const percent = usedPercentForDate(date);
    const remainingPercent = remainingPercentForDate(date);
    const status = used === 0 ? "free" : remaining === 0 ? "full" : "partial";
    const label = used === 0 ? "0% occupato" : remaining === 0 ? "100% completo" : `${remainingPercent}% disponibile`;
    cells.push(`
      <button class="calendar-cell ${status} js-select-day" data-date="${date}" type="button">
        <span class="day-number">${day}</span>
        <span class="day-status">${label}</span>
        <span class="capacity-meter"><span style="width:${percent}%"></span></span>
        <span class="day-hectares">${percent}% usato / ${remainingPercent}% libero</span>
      </button>
    `);
  }
  return `
    <div class="calendar-grid">
      ${weekDays.map((day) => `<div class="calendar-weekday">${day}</div>`).join("")}
      ${cells.join("")}
    </div>
  `;
}

function bookingRow(booking) {
  const remaining = remainingForDate(booking.date);
  const bookingPercent = bookingOccupancyPercent(booking);
  const remainingPercent = remainingPercentForDate(booking.date);
  const capacity = getBookingDailyCapacity(booking);
  return `
    <button class="table-row js-open" data-kind="booking" data-id="${booking.id}" type="button">
      <span><h3>${formatDate(booking.date)}</h3><span class="muted">${booking.field}</span></span>
      <span>${booking.client}</span>
      <span>${operationLabels[booking.service]}<br><span class="muted">${cropLabels[booking.crop] || ""} • terreno ${booking.terrainLevel}/10</span></span>
      <span><strong>${bookingPercent}%</strong><br><span class="muted">${booking.hectares}/${capacity} ha</span></span>
      <span>${pill(remaining ? `${remainingPercent}% disponibile` : "100% completo")}</span>
    </button>
  `;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function pill(value) {
  const key = String(value || "").toLowerCase();
  const tone = key.includes("urgent") || key.includes("rinnovare") || key.includes("alta") ? "danger"
    : key.includes("bozza") || key.includes("analisi") || key.includes("media") ? "blue"
    : key.includes("verifica") || key.includes("revisione") || key.includes("attesa") ? "warn"
    : "ok";
  return `<span class="pill ${tone}">${value}</span>`;
}

function filterItems(items) {
  return items.filter((item) => {
    const haystack = Object.values(item).flat().join(" ").toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query);
    const crop = item.crop || (Array.isArray(item.crops) ? item.crops.join(" ") : "");
    const matchesCrop = state.filters.crop === "Tutte" || crop.includes(state.filters.crop);
    const status = item.status || item.auth || item.vra || "";
    const matchesStatus = state.filters.status === "Tutti" || status.includes(state.filters.status) || Object.values(item).join(" ").includes(state.filters.status);
    const matchesPriority = state.filters.priority === "Tutte" || (item.priority || "").includes(state.filters.priority);
    return matchesQuery && matchesCrop && matchesStatus && matchesPriority;
  });
}

function bindOpeners() {
  document.querySelectorAll(".js-open").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.kind, button.dataset.id));
  });
}

function bindCapacityDaySelection() {
  document.querySelectorAll(".js-select-day").forEach((button) => {
    button.addEventListener("click", () => {
      const input = $("#bookingDate");
      if (input) input.value = button.dataset.date;
      updateBookingPreview();
      document.querySelector(".booking-box")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
  updateBookingPreview();
}

function getBookingPreview() {
  const date = $("#bookingDate")?.value;
  const crop = $("#bookingCrop")?.value;
  const service = $("#bookingService")?.value;
  const terrainLevel = Number($("#bookingTerrain")?.value || 1);
  const hectares = Number($("#bookingHectares")?.value || 0);
  if (!date || !crop || !service) return null;
  const capacity = getBookingDailyCapacity({ crop, service, terrainLevel });
  const percent = capacity ? Math.round((hectares / capacity) * 100) : 0;
  return { date, crop, service, terrainLevel, hectares, capacity, percent, remaining: remainingForDate(date) };
}

function updateBookingPreview() {
  const note = $("#bookingNote");
  if (!note) return;
  const preview = getBookingPreview();
  if (!preview) return;
  const factor = Math.round(getTerrainFactor(preview.terrainLevel) * 100);
  const base = getOperationBaseCapacity(preview.crop, preview.service) * state.capacity.fleet.t100;
  const percentText = preview.hectares > 0 ? `${preview.percent}% della giornata` : "0% della giornata";
  note.classList.remove("error");
  note.textContent = `${cropLabels[preview.crop]} + ${operationLabels[preview.service]}: ${base} ha base. Terreno ${preview.terrainLevel}/10 = ${factor}%, quindi ${preview.capacity} ha equivalgono al 100%. Questa vendita occupa ${percentText}; sul giorno resta ${preview.remaining}%.`;
}

function findItem(kind, id) {
  const maps = { field: fields, permit: permits, vra: vraMaps, farmer: farmers, reminder: [...reminders, ...state.operations], booking: bookings };
  return maps[kind].find((item) => String(item.id || item.name) === id);
}

function openDrawer(kind, id) {
  const item = findItem(kind, id);
  if (!item) return;
  const title = item.name || item.title || item.field;
  const subtitle = item.id || item.client || item.crop || "Dettaglio operativo";
  $("#detailDrawer").innerHTML = `
    <div class="drawer-head">
      <div><p class="spaced-label">${kind}</p><h2>${title}</h2><p class="muted">${subtitle}</p></div>
      <button class="icon-btn" type="button" aria-label="Chiudi dettaglio" id="closeDrawer">${icons.x}</button>
    </div>
    <div class="drawer-section"><h3>Stato</h3><div class="pill-row">${[item.status, item.auth, item.vra, item.priority].filter(Boolean).map(pill).join("")}</div></div>
    <div class="drawer-section"><h3>Dati principali</h3>${Object.entries(item).filter(([key]) => !["note"].includes(key)).map(([key, value]) => `<p><strong>${labelize(key)}:</strong> ${Array.isArray(value) ? value.join(", ") : value}</p>`).join("")}</div>
    <div class="drawer-section"><h3>Nota operativa</h3><p>${item.note || "Nessuna nota aggiuntiva."}</p></div>
    <div class="drawer-section"><button class="btn primary" type="button">${icons.phone} Prepara update cliente</button></div>
  `;
  $("#drawerBackdrop").hidden = false;
  $("#detailDrawer").classList.add("open");
  $("#detailDrawer").setAttribute("aria-hidden", "false");
  $("#closeDrawer").addEventListener("click", closeDrawer);
}

function closeDrawer() {
  $("#drawerBackdrop").hidden = true;
  $("#detailDrawer").classList.remove("open");
  $("#detailDrawer").setAttribute("aria-hidden", "true");
}

function saveOperation(event) {
  const submitterValue = event.submitter?.value;
  if (submitterValue === "cancel") return;
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.operations.unshift({
    id: `OP-${String(state.operations.length + 1).padStart(2, "0")}`,
    title: data.title,
    client: data.client || "Cliente da associare",
    date: data.date,
    note: data.note,
    type: data.type,
    priority: data.type === "permit" ? "Alta" : "Media",
    crop: "Vite"
  });
  $("#operationModal").close();
  event.currentTarget.reset();
  state.active = data.type === "permit" ? "permits" : data.type === "vra" ? "vra" : data.type === "reminder" ? "reminders" : "fields";
  renderNav();
  render();
}

function saveBooking(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const hectares = Number(data.hectares || 0);
  const terrainLevel = Number(data.terrainLevel || 1);
  const preview = {
    date: data.date,
    service: data.service,
    crop: data.crop,
    terrainLevel,
    hectares
  };
  const percent = bookingOccupancyPercent(preview);
  const remaining = remainingForDate(data.date);
  const note = $("#bookingNote");

  if (hectares <= 0) {
    note.textContent = "Inserisci un numero di ettari maggiore di zero.";
    note.classList.add("error");
    return;
  }

  if (percent > remaining) {
    note.textContent = `Capienza insufficiente: questa vendita occupa ${percent}%, ma per questa data resta ${remaining}%.`;
    note.classList.add("error");
    return;
  }

  const booking = {
    id: `JOB-${String(bookings.length + 1).padStart(3, "0")}`,
    date: data.date,
    service: data.service,
    crop: data.crop,
    terrainLevel,
    client: data.client,
    field: data.field,
    hectares,
    drone: "T100-01",
    status: percent === remaining ? "Completo" : "Venduto"
  };
  bookings.push(booking);
  const mission = createMissionFromBooking(booking);
  missions.push(mission);
  missionReports.push(createReportFromMission(mission, booking));
  reminders.unshift({
    id: `REM-${String(reminders.length + 1).padStart(2, "0")}`,
    bookingId: booking.id,
    title: `Preparare missione ${booking.field}`,
    when: `${formatDate(booking.date)} / 07:30`,
    type: "Mission Control",
    priority: percent > 70 ? "Alta" : "Media",
    crop: cropLabels[booking.crop],
    note: `Checklist e documenti generati per ${booking.client}.`
  });
  render();
}

function createMissionFromBooking(booking) {
  return {
    id: `MIS-${String(missions.length + 1).padStart(3, "0")}`,
    bookingId: booking.id,
    client: booking.client,
    field: booking.field,
    position: fields.find((field) => field.name === booking.field)?.city || "Da geolocalizzare",
    hectares: booking.hectares,
    product: operationLabels[booking.service],
    material: booking.service.includes("fert-solido-100") ? `${booking.hectares * 100} kg`
      : booking.service.includes("fert-solido-200") ? `${booking.hectares * 200} kg`
      : booking.service.includes("irrorazione") ? `${Math.round(booking.hectares * 12)} l`
      : `${booking.hectares} ha dose`,
    batteries: Math.max(2, Math.ceil(bookingOccupancyPercent(booking) / 14)),
    time: `${Math.max(1, Math.ceil(bookingOccupancyPercent(booking) / 25))}h stim.`,
    margin: "Da consuntivare",
    status: "Da preparare",
    checks: []
  };
}

function createReportFromMission(mission, booking) {
  return {
    id: `RPT-${String(missionReports.length + 1).padStart(3, "0")}`,
    missionId: mission.id,
    bookingId: booking.id,
    client: mission.client,
    field: mission.field,
    status: "Preliminare",
    agent: booking.service.includes("vra") ? "Operatore drone + agente VRA" : "Operatore T100",
    files: ["missione.json", "traccia-volo.kml", "registro-operativo.csv"],
    documents: ["Permesso operativo", "Check meteo", "Check DPI", "Scheda prodotto"],
    summary: `Report generato automaticamente dalla vendita ${booking.id}; pronto per completamento post missione.`
  };
}

function bindExport() {
  document.querySelectorAll(".js-export").forEach((button) => button.addEventListener("click", exportCurrent));
}

function exportCurrent() {
  const datasets = { dashboard: fields, fields, permits, vra: vraMaps, capacity: bookings, backend: bookings, quotes: [getQuoteValues()], portal: fields, whatsapp: Object.values(whatsappTemplates).map((message, index) => ({ id: index + 1, message })), missions, reports: missionReports, farmers, reminders };
  const rows = filterItems(datasets[state.active] || fields);
  const csv = toCsv(rows);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `contadini-volanti-${state.active}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function toCsv(rows) {
  if (!rows.length) return "";
  const headers = [...new Set(rows.flatMap((row) => Object.keys(row)))];
  const escape = (value) => `"${String(Array.isArray(value) ? value.join(" | ") : value ?? "").replaceAll('"', '""')}"`;
  return [headers.join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\n");
}

function labelize(key) {
  const labels = { id: "Codice", name: "Nome", title: "Titolo", date: "Data", crop: "Coltura", client: "Cliente", owner: "Referente", city: "Comune", hectares: "Ettari", field: "Campo", drone: "Drone", service: "Servizio", booked: "Venduto", remaining: "Residuo", capacity: "Capienza", auth: "Autorizzazione", vra: "VRA", reminder: "Reminder", due: "Scadenza", status: "Stato", priority: "Priorita", standard: "Uso normale", saving: "Risparmio", phone: "Telefono", email: "Email", vat: "P. IVA", channel: "Canale", last: "Ultimo update" };
  return labels[key] || key;
}

function emptyState() {
  return '<div class="empty-state">Nessun elemento corrisponde alla ricerca o ai filtri attivi.</div>';
}

boot();


