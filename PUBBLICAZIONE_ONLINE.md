# Pubblicazione online Contadini Volanti

L'app e una web app statica con un piccolo server Node locale. Per pubblicarla online puoi usare due strade.

## Metodo consigliato per login e dati condivisi: Render

Questo metodo usa `server.mjs` come web service Node. E necessario per:

- schermata di login;
- protezione dell'app prima dell'accesso;
- dati condivisi tra browser tramite API `/api/data`.

1. Crea un repository GitHub con questi file.
2. Vai su https://render.com.
3. New + Blueprint oppure New + Web Service.
4. Collega il repository.
5. Render legge `render.yaml`, esegue `npm install` e avvia `npm start`.

Render assegna un URL pubblico `https://...onrender.com`.

Credenziali di default:

- Utente: `Amministratore`
- Password: configurata in `server.mjs`

Per produzione e consigliabile impostare variabili ambiente:

- `APP_USERNAME`
- `APP_PASSWORD`

## Metodo statico: Netlify

Questo metodo pubblica `index.html`, `styles.css` e `app.js` come sito statico.

Attenzione: il metodo statico non puo usare login server-side e dati condivisi. Usalo solo per una demo visuale.

1. Esegui `prepara-deploy-statico.cmd`.
2. Vai su https://app.netlify.com/drop.
3. Trascina la cartella `dist`.
4. Netlify genera un URL pubblico.

In alternativa, esegui:

```bat
pubblica-netlify.cmd
```

Al primo utilizzo Netlify chiedera il login.

## Nota sui dati

Con Render i dati vengono salvati dal server in `data/app-data.json`, quindi sono condivisi tra browser che accedono allo stesso servizio.

Per una versione definitiva multiutente e consigliato migrare questo archivio JSON a Supabase/PostgreSQL.
