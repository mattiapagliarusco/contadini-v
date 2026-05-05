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

// State & demo data
const state = {
  active: "dashboard",
  query: "",
  filters: { crop: "Tutte", status: "Tutti", priority: "Tutte" },
  operations: [],
  admin: {
    tab: "clients",
    editClient: null,
    editField: null,
    editJob: null,
    notice: ""
  },
  capacity: {
    month: 2,
    year: 2026,
    fleet: { t100: 1 }
  }
};

const navGroups = [
  { label: "Operatività", items: [
    ["dashboard", "Dashboard", "dashboard"],
    ["capacity", "Capienza operativa", "calendar"],
    ["missions", "Mission Control", "drone"],
    ["reports", "Report", "calendar"]
  ] },
  { label: "Clienti e campi", items: [
    ["farmers", "Contadini", "users"],
    ["fields", "Campi", "sprout"],
    ["portal", "Il mio campo", "user"]
  ] },
  { label: "Commerciale", items: [
    ["quotes", "Preventivi", "chart"],
    ["whatsapp", "WhatsApp", "phone"],
    ["reminders", "Reminder", "bell"]
  ] },
  { label: "Compliance e dati", items: [
    ["permits", "Autorizzazioni", "shield"],
    ["vra", "VRA", "chart"],
    ["backend", "Amministrazione", "shield"]
  ] }
];

const navItems = navGroups.flatMap((group) => group.items);

const fields = [
  { id: "VIT-014", name: "Vigneto Collina Est", crop: "Vite", client: "Azienda Agricola Bianchi", owner: "Marco Bianchi", city: "Valdobbiadene", hectares: 6.8, auth: "Valida", vra: "Pronta", reminder: "Trattamento fogliare entro 3 giorni", note: "Trattamento mirato per blocchi con diversa vigoria." },
  { id: "MAI-022", name: "Mais San Pietro", crop: "Mais", client: "Società Agricola Dal Maso", owner: "Elisa Dal Maso", city: "Rovigo", hectares: 18.4, auth: "Da rinnovare", vra: "In analisi", reminder: "Aggiornare piano azoto", note: "Prescrizione azoto in revisione." },
  { id: "FRT-009", name: "Frutteto Nord", crop: "Frutta", client: "Tenuta San Rocco", owner: "Giulio Ferro", city: "Verona", hectares: 9.1, auth: "Valida", vra: "Mappa disponibile", reminder: "Inviare report al cliente", note: "Layer stress idrico pronto." },
  { id: "OLI-004", name: "Oliveto Casetta", crop: "Olivo", client: "Azienda Agricola Bianchi", owner: "Marco Bianchi", city: "Vicenza", hectares: 5.2, auth: "In verifica", vra: "Bozza", reminder: "Controllo vento e finestra operativa", note: "Verifica meteo prima di pianificare il passaggio." }
];

const permits = [
  { id: "AUT-3102", title: "SCIA trattamento sperimentale", client: "Società Agricola Dal Maso", field: "Mais San Pietro", crop: "Mais", due: "29 mar 2026", status: "Urgente", priority: "Alta", note: "Rinnovo necessario prima di procedere con trattamento VRA." },
  { id: "AUT-3108", title: "Autorizzazione campo vicino area sensibile", client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", crop: "Vite", due: "18 apr 2026", status: "Valida", priority: "Media", note: "Documentazione pronta e allegati caricati." },
  { id: "AUT-3121", title: "Documentazione operativa frutteto", client: "Tenuta San Rocco", field: "Frutteto Nord", crop: "Frutta", due: "03 apr 2026", status: "Da verificare", priority: "Media", note: "Manca conferma particelle lato nord." }
];

const vraMaps = [
  { id: "VRA-201", field: "Vigneto Collina Est", crop: "Vite", status: "Pronto da inviare", standard: 280, vra: 246, saving: "-34 kg/ha (12%)", note: "Ridurre fertilizzazione del 12% nelle zone ad alta vigoria." },
  { id: "VRA-202", field: "Mais San Pietro", crop: "Mais", status: "In revisione", standard: 350, vra: 301, saving: "-49 kg/ha (14%)", note: "Aumentare dose nelle aree a bassa copertura, ridurre dell'8% nelle testate." },
  { id: "VRA-203", field: "Frutteto Nord", crop: "Frutta", status: "Mappa disponibile", standard: 240, vra: 210, saving: "-30 kg/ha (12.5%)", note: "Intervento localizzato solo in 3 blocchi." }
];

const farmers = [
  { name: "Azienda Agricola Bianchi", contact: "Marco Bianchi", city: "Valdobbiadene", crops: ["Vite", "Olivo", "Mais"], status: "Attivo", last: "Oggi, 08:45", phone: "+39 348 000 1122", email: "marco@aziendabianchi.it", vat: "IT 04567890261", channel: "WhatsApp" },
  { name: "Società Agricola Dal Maso", contact: "Elisa Dal Maso", city: "Rovigo", crops: ["Mais"], status: "In attesa", last: "Ieri, 18:10", phone: "+39 347 000 3344", email: "elisa@dalmaso.it", vat: "IT 04421098765", channel: "Email" },
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
  { id: "JOB-001", date: "2026-03-12", service: "lancio-insetti", crop: "mais", terrainLevel: 1, client: "Società Agricola Dal Maso", field: "Mais San Pietro", hectares: 42, drone: "T100-01", status: "Venduto" },
  { id: "JOB-002", date: "2026-03-12", service: "lancio-insetti", crop: "mais", terrainLevel: 1, client: "Azienda Agricola Bianchi", field: "Appezzamento Nord", hectares: 18, drone: "T100-01", status: "Venduto" },
  { id: "JOB-003", date: "2026-03-18", service: "lancio-insetti", crop: "mais", terrainLevel: 1, client: "Società Agricola Dal Maso", field: "Mais San Pietro", hectares: 70, drone: "T100-01", status: "Completato" },
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
  review: "Ciao Marco, grazie per aver lavorato con Contadini Volanti. Se il servizio ti è stato utile, una recensione o un contatto agricolo da suggerirci ci aiuterebbe molto."
};

const missionChecks = ["Drone", "Meteo", "Autorizzazioni", "DPI", "Prodotto", "Batterie"];
const missions = [
  { id: "MIS-014", client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", position: "Valdobbiadene", hectares: 6.8, product: "Trattamento fogliare", material: "82 l", batteries: 5, time: "2h 20m", margin: "38%", status: "Da preparare", checks: ["Autorizzazioni"] },
  { id: "MIS-022", client: "Società Agricola Dal Maso", field: "Mais San Pietro", position: "Rovigo", hectares: 18.4, product: "Lancio insetti", material: "18,4 ha dose", batteries: 7, time: "3h 10m", margin: "42%", status: "In corso", checks: ["Drone", "Meteo", "Autorizzazioni", "DPI"] }
];

const missionReports = [
  { id: "RPT-014", missionId: "MIS-014", client: "Azienda Agricola Bianchi", field: "Vigneto Collina Est", status: "Bozza", agent: "Operatore drone + consulente VRA", files: ["mappa-vigoria.geojson", "foto-prima.jpg", "scheda-intervento.pdf"], documents: ["AUT-3108", "DPI check", "Meteo operativo"], summary: "Trattamento fogliare pianificato con report VRA e confronto zone." },
  { id: "RPT-022", missionId: "MIS-022", client: "Società Agricola Dal Maso", field: "Mais San Pietro", status: "Da chiudere", agent: "Operatore T100", files: ["traccia-volo.kml", "registro-lancio.csv"], documents: ["AUT-3102", "Scheda prodotto", "Check drone"], summary: "Lancio insetti in corso, dati missione disponibili per consuntivo operativo." }
];

const $ = (selector) => document.querySelector(selector);
const workspace = $("#workspace");
const storageKey = "contadini-volanti-operativo-v1";

async function boot() {
  await loadAppData();
  ensureBookingLinks();
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
    const filterBar = $("#filterBar");
    filterBar.hidden = !filterBar.hidden;
    $("#filterToggle").setAttribute("aria-expanded", String(!filterBar.hidden));
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
    if (event.target?.id === "adminClientForm") saveClient(event);
    if (event.target?.id === "adminFieldForm") saveField(event);
    if (event.target?.id === "adminJobForm") saveAdminJob(event);
    if (event.target?.id === "permitForm") savePermit(event);
  });
  document.addEventListener("click", (event) => {
    const exportButton = event.target.closest?.(".js-export-ai");
    if (exportButton) exportAiReadable(exportButton.dataset.format);
    if (event.target.closest?.("#clearDemoData")) clearDemoData();
    if (event.target.closest?.("#backupData")) backupAppData();
    if (event.target.closest?.("#restoreData")) $("#restoreBackupInput")?.click();
    if (event.target.closest?.("#prevCapacityMonth")) shiftCapacityMonth(-1);
    if (event.target.closest?.("#nextCapacityMonth")) shiftCapacityMonth(1);
    const fleetChoice = event.target.closest?.(".js-fleet-choice");
    if (fleetChoice) {
      state.capacity.fleet.t100 = Number(fleetChoice.dataset.t100 || 1);
      saveAppData();
      render();
    }
    const drawerAction = event.target.closest?.(".js-drawer-action");
    if (drawerAction) runDrawerAction(drawerAction.dataset.action);
    const adminTab = event.target.closest?.(".js-admin-tab");
    if (adminTab) switchAdminTab(adminTab.dataset.adminTab);
    const editClient = event.target.closest?.(".js-edit-client");
    if (editClient) startEditClient(editClient.dataset.name);
    const deleteClient = event.target.closest?.(".js-delete-client");
    if (deleteClient) deleteClientByName(deleteClient.dataset.name);
    const editField = event.target.closest?.(".js-edit-field");
    if (editField) startEditField(editField.dataset.id);
    const deleteField = event.target.closest?.(".js-delete-field");
    if (deleteField) deleteFieldById(deleteField.dataset.id);
    const editJob = event.target.closest?.(".js-edit-job");
    if (editJob) startEditJob(editJob.dataset.id);
    const deleteJob = event.target.closest?.(".js-delete-job");
    if (deleteJob) deleteJobById(deleteJob.dataset.id);
    const cancelAdminEdit = event.target.closest?.(".js-cancel-admin-edit");
    if (cancelAdminEdit) cancelAdminEdit.dataset.target && cancelAdminEditing(cancelAdminEdit.dataset.target);
  });
  document.addEventListener("input", (event) => {
    if (event.target?.id === "fleetT100") {
      state.capacity.fleet.t100 = Math.max(0, Number(event.target.value || 0));
      saveAppData();
      render();
    }
    if (event.target?.id === "bookingTerrain" || event.target?.id === "bookingHectares") updateBookingPreview();
    if (event.target?.closest?.("#quoteForm")) updateQuotePreview();
  });
  document.addEventListener("change", (event) => {
    if (event.target?.id === "capacityMonth") {
      state.capacity.month = Number(event.target.value);
      saveAppData();
      render();
    }
    if (event.target?.id === "capacityYear") {
      state.capacity.year = Number(event.target.value);
      saveAppData();
      render();
    }
    if (["bookingService", "bookingCrop", "bookingTerrain", "bookingDate"].includes(event.target?.id)) updateBookingPreview();
    if (event.target?.closest?.("#quoteForm")) updateQuotePreview();
    if (event.target?.id === "waTemplate" || event.target?.id === "waClient") updateWhatsAppPreview();
    if (event.target?.classList?.contains("mission-check")) updateMissionCheck(event.target);
    if (event.target?.id === "restoreBackupInput") restoreBackupFromFile(event.target.files?.[0]);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
}

function renderNav() {
  $("#navList").innerHTML = navGroups.map((group) => `
    <div class="nav-group">
      <p class="nav-group-label">${group.label}</p>
      ${group.items.map(([key, label, icon]) => `
        <button class="nav-item ${state.active === key ? "active" : ""}" type="button" data-view="${key}" ${state.active === key ? 'aria-current="page"' : ""}>
          ${icons[icon]}<span>${label}</span>
        </button>
      `).join("")}
    </div>
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
  fillSelect($("#statusFilter"), ["Tutti", "Valida", "Da rinnovare", "In verifica", "Urgente", "Da verificare", "Pronta", "Bozza", "In analisi", "Mappa disponibile"], state.filters.status);
  fillSelect($("#priorityFilter"), ["Tutte", "Alta", "Media", "Urgente"], state.filters.priority);
}

function fillSelect(node, options, selected) {
  node.innerHTML = options.map((option) => `<option ${option === selected ? "selected" : ""}>${option}</option>`).join("");
}

function render() {
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
  const view = views[state.active] || views.dashboard;
  if (!views[state.active]) state.active = "dashboard";
  syncTopbarControls();
  renderMetrics();
  view();
}

function syncTopbarControls() {
  const dashboardOnly = state.active === "dashboard";
  const searchBox = document.querySelector(".search-box");
  const filterBar = $("#filterBar");
  const metrics = $("#metrics");
  if (searchBox) searchBox.hidden = !dashboardOnly;
  $("#filterToggle").hidden = !dashboardOnly;
  if (metrics) metrics.hidden = !dashboardOnly;

  if (!dashboardOnly) {
    state.query = "";
    state.filters = { crop: "Tutte", status: "Tutti", priority: "Tutte" };
    const searchInput = $("#globalSearch");
    if (searchInput) searchInput.value = "";
    if (filterBar) filterBar.hidden = true;
    $("#filterToggle").setAttribute("aria-expanded", "false");
    renderFilterOptions();
  }
}

function renderMetrics() {
  const metrics = $("#metrics");
  if (state.active !== "dashboard") {
    metrics.hidden = true;
    metrics.innerHTML = "";
    return;
  }
  metrics.hidden = false;
  const urgentCount = permits.filter((permit) => permit.status === "Urgente").length;
  const todayJobs = bookings.filter((booking) => booking.date === todayIso()).length;
  $("#todayFields").textContent = todayJobs;
  $("#urgentPermits").textContent = urgentCount;
  $("#updatesToSend").textContent = reminders.length;
  metrics.innerHTML = [
    ["Campi attivi", String(fields.length), `${formatNumber(sumHectares(fields))} ettari gestiti`, "sprout"],
    ["Autorizzazioni valide", String(permits.filter((permit) => permit.status === "Valida").length), `${urgentCount} urgenti`, "shield"],
    ["Missioni da preparare", String(missions.filter((mission) => mission.status !== "Completato").length), "Checklist operative aperte", "drone"],
    ["Report da chiudere", String(missionReports.filter((report) => report.status !== "Pronto da inviare").length), "Bozze e consuntivi aperti", "calendar"],
    ["Mappe VRA", String(vraMaps.length), `${vraMaps.filter((map) => map.status.includes("Pronto") || map.status.includes("disponibile")).length} pronte`, "chart"],
    ["Reminder aperti", String(reminders.length), `${reminders.filter((reminder) => ["Alta", "Urgente"].includes(reminder.priority)).length} ad alta priorità`, "bell"]
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
  const criticalPermits = permits.filter((permit) => ["Urgente", "Da verificare", "In verifica"].includes(permit.status)).slice(0, 3);
  const missionsToPrepare = missions.filter((mission) => mission.status !== "Completato").slice(0, 3);
  const reportsToClose = missionReports.filter((report) => ["Bozza", "Da chiudere", "Preliminare"].includes(report.status)).slice(0, 3);
  const highReminders = reminders.filter((reminder) => ["Alta", "Urgente"].includes(reminder.priority)).slice(0, 3);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Centro operativo", "Priorità di oggi, lavori aperti e prossime azioni", false)}
      <div class="ops-grid">
        ${opsColumn("Azioni urgenti", [...criticalPermits.map((permit) => ({ title: permit.title, meta: `${permit.client} / ${formatPermitDate(permit.due)}`, view: "permits", tone: permit.status })), ...highReminders.map((reminder) => ({ title: reminder.title, meta: reminder.when, view: "reminders", tone: reminder.priority }))])}
        ${opsColumn("Missioni da preparare", missionsToPrepare.map((mission) => ({ title: mission.field, meta: `${mission.client} / ${mission.status}`, view: "missions", tone: mission.status })))}
        ${opsColumn("Report da chiudere", reportsToClose.map((report) => ({ title: report.field, meta: `${report.client} / ${report.status}`, view: "reports", tone: report.status })))}
      </div>
    </section>
    <section class="panel">
      ${panelHead("Pipeline operativa", "Dal contadino al follow-up finale", false)}
      ${pipeline()}
    </section>
    <section class="panel">
      ${panelHead("Lavori pianificati", "Sintesi calendario e capacità operativa", true)}
      ${filterItems(bookings).length ? `<div class="data-table">${filterItems(bookings).slice(0, 5).map(bookingRow).join("")}</div>` : emptyState()}
    </section>
  `;
  bindOpeners();
  bindActionButtons();
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
      ${panelHead("Gestione autorizzazioni", "Documenti, scadenze, stato e priorità", true)}
      <form class="permit-form" id="permitForm">
        <label>Titolo autorizzazione <input name="title" required placeholder="Es. Autorizzazione sorvolo area sensibile" /></label>
        <label>Cliente <select name="client" required>${selectOptions(farmers.map((client) => client.name), farmers[0]?.name || "")}</select></label>
        <label>Campo <select name="field" required>${selectOptions(fields.map((field) => field.name), fields[0]?.name || "")}</select></label>
        <label>Coltura <select name="crop">${selectOptions(Object.values(cropLabels), "Mais")}</select></label>
        <label>Scadenza <input name="due" type="date" required /></label>
        <label>Priorità <select name="priority"><option>Media</option><option>Alta</option><option>Urgente</option></select></label>
        <label>Stato <select name="status"><option>Da verificare</option><option>In verifica</option><option>Valida</option><option>Urgente</option></select></label>
        <label>PDF autorizzazione <input name="pdf" type="file" accept="application/pdf" /></label>
        <label class="wide">Nota <input name="note" placeholder="Permessi, vincoli, proprietario, comune..." /></label>
        <button class="btn primary" type="submit">${icons.plus} Aggiungi autorizzazione</button>
      </form>
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
          <tbody>${vraMaps.map((map) => `<tr><td>${escapeHtml(map.field)}</td><td>${escapeHtml(map.crop)}</td><td>${map.standard} kg/ha</td><td>${map.vra} kg/ha</td><td class="saving">${escapeHtml(map.saving)}</td></tr>`).join("")}</tbody>
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
        <label>Mese operativo
          <select id="capacityMonth">
            ${monthNames.map((name, index) => `<option value="${index}" ${index === state.capacity.month ? "selected" : ""}>${name}</option>`).join("")}
          </select>
        </label>
        <label>Anno
          <input id="capacityYear" type="number" min="2025" max="2035" step="1" value="${state.capacity.year}" />
        </label>
      </div>
      <div class="fleet-scenario">
        <div>
          <p class="spaced-label">Flotta operativa</p>
          <h3>Scenario T100 sul calendario</h3>
          <p class="panel-subtitle">Seleziona 1, 2 o 3 droni: le percentuali occupate dalle giornate vengono ricalcolate subito.</p>
        </div>
        <div class="segmented-control" role="group" aria-label="Numero droni T100">
          ${[1, 2, 3].map((count) => `
            <button class="segment js-fleet-choice ${state.capacity.fleet.t100 === count ? "active" : ""}" data-t100="${count}" aria-pressed="${state.capacity.fleet.t100 === count}" type="button">
              ${count} T100
            </button>
          `).join("")}
        </div>
      </div>

      <div class="capacity-summary">
        ${capacityStat("Flotta selezionata", `${state.capacity.fleet.t100} T100`, "Base del calcolo percentuale del calendario")}
        ${capacityStat("Giornata operativa", "100%", "Ogni prenotazione occupa una quota calcolata dai dati inseriti")}
        ${capacityStat("Saturazione media anno", `${avgUsage}%`, `${soldYear} ha venduti su ${soldDays} giorni`)}
        ${capacityStat("Giorni completi", String(fullDays), "Date arrivate al 100% operativo")}
      </div>
    </section>

    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Calendario capienza / ${monthNames[state.capacity.month]} ${state.capacity.year}</h2>
          <p class="panel-subtitle">Vista sola lettura: lavori, flotta e quote operative si modificano da Amministrazione / Lavori</p>
        </div>
        <div class="button-row">
          <button class="btn ghost" id="prevCapacityMonth" type="button">Mese prima</button>
          <button class="btn ghost" id="nextCapacityMonth" type="button">Mese dopo</button>
          <button class="btn primary js-go-view" data-target-view="backend" data-admin-tab-target="jobs" type="button">Modifica lavori</button>
          <span class="pill ${state.capacity.fleet.t100 ? "ok" : "danger"}">${state.capacity.fleet.t100} T100</span>
        </div>
      </div>
      ${capacityCalendar()}
    </section>

    <section class="panel">
      ${panelHead("Giornate vendute", "Prenotazioni e saturazione operativa per cliente", true)}
      <div class="data-table capacity-table">
        <div class="table-row header"><span>Data</span><span>Cliente</span><span>Servizio</span><span>Quota</span><span>Residuo giorno</span></div>
        ${monthBookings.length ? monthBookings.map(bookingRow).join("") : '<div class="empty-state">Nessuna giornata venduta nel mese selezionato.</div>'}
      </div>
    </section>
  `;
  bindOpeners();
  bindActionButtons();
  bindExport();
}

function renderBackend() {
  workspace.innerHTML = `
    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Amministrazione</h2>
          <p class="panel-subtitle">Gestione clienti, campi, lavori, backup e ripristino dati locali</p>
        </div>
        <div class="button-row">
          <button class="btn ghost" id="backupData" type="button">Backup JSON</button>
          <button class="btn ghost" id="restoreData" type="button">Ripristina JSON</button>
          <button class="btn ghost" id="clearDemoData" type="button">Reset demo</button>
          <input id="restoreBackupInput" type="file" accept="application/json" hidden />
        </div>
      </div>
      <div class="capacity-summary">
        ${capacityStat("Clienti", String(farmers.length), "Cartelle operative")}
        ${capacityStat("Campi", String(fields.length), `${formatNumber(sumHectares(fields))} ettari`)}
        ${capacityStat("Lavori", String(bookings.length), "Prenotazioni operative")}
        ${capacityStat("Report", String(missionReports.length), "Post missione")}
      </div>
      <div class="admin-tabs" role="tablist" aria-label="Sezioni amministrazione">
        ${adminTabButton("clients", "Clienti")}
        ${adminTabButton("fields", "Campi")}
        ${adminTabButton("jobs", "Lavori")}
      </div>
    </section>
    <section class="panel">
      ${renderAdminPanel()}
    </section>
  `;
}

function adminTabButton(key, label) {
  const active = state.admin.tab === key;
  return `
    <button class="admin-tab js-admin-tab ${active ? "active" : ""}" data-admin-tab="${key}" role="tab" aria-selected="${active}" type="button">
      ${label}
    </button>
  `;
}

function renderAdminPanel() {
  const panels = {
    clients: renderAdminClients,
    fields: renderAdminFields,
    jobs: renderAdminJobs
  };
  const renderer = panels[state.admin.tab] || panels.clients;
  return `${adminNotice()}${renderer()}`;
}

function adminNotice() {
  if (!state.admin.notice) return "";
  return `<div class="notice" role="status">${escapeHtml(state.admin.notice)}</div>`;
}

function renderAdminClients() {
  const editing = farmers.find((client) => client.name === state.admin.editClient) || null;
  const rows = farmers.map(adminClientRow).join("");
  return `
    <div class="admin-layout">
      <form class="admin-form" id="adminClientForm" novalidate>
        <div>
          <p class="spaced-label">${editing ? "Modifica cliente" : "Nuovo cliente"}</p>
          <h3>${editing ? escapeHtml(editing.name) : "Cartella cliente"}</h3>
        </div>
        <input name="originalName" type="hidden" value="${attr(editing?.name)}" />
        <label>Ragione sociale <input name="name" required value="${attr(editing?.name)}" placeholder="Azienda Agricola Rossi" /></label>
        <label>Referente <input name="contact" required value="${attr(editing?.contact)}" placeholder="Nome referente" /></label>
        <label>Comune <input name="city" required value="${attr(editing?.city)}" placeholder="Comune" /></label>
        <label>Telefono <input name="phone" value="${attr(editing?.phone)}" placeholder="+39 ..." /></label>
        <label>Email <input name="email" type="email" value="${attr(editing?.email)}" placeholder="email@azienda.it" /></label>
        <label>Partita IVA <input name="vat" value="${attr(editing?.vat)}" placeholder="IT ..." /></label>
        <label>Canale preferito
          <select name="channel">${selectOptions(["WhatsApp", "Email", "Telefono"], editing?.channel || "WhatsApp")}</select>
        </label>
        <label>Stato
          <select name="status">${selectOptions(["Attivo", "In attesa", "Archiviato"], editing?.status || "Attivo")}</select>
        </label>
        <label class="wide">Note <textarea name="note" rows="3" placeholder="Preferenze, vincoli, contatti aggiuntivi">${escapeHtml(editing?.note || "")}</textarea></label>
        <div class="button-row">
          <button class="btn primary" type="submit">${editing ? "Salva modifiche" : "Crea cliente"}</button>
          ${editing ? '<button class="btn ghost js-cancel-admin-edit" data-target="client" type="button">Annulla modifica</button>' : ""}
        </div>
      </form>
      <div class="admin-list">
        <div class="panel-head compact"><div><h3>Clienti</h3><p class="panel-subtitle">Anagrafiche e cartelle operative</p></div></div>
        ${rows || '<div class="empty-state">Nessun cliente presente. Crea la prima cartella cliente.</div>'}
      </div>
    </div>
  `;
}

function renderAdminFields() {
  const editing = fields.find((field) => field.id === state.admin.editField) || null;
  return `
    <div class="admin-layout">
      <form class="admin-form" id="adminFieldForm" novalidate>
        <div>
          <p class="spaced-label">${editing ? "Modifica campo" : "Nuovo campo"}</p>
          <h3>${editing ? `${escapeHtml(editing.id)} / ${escapeHtml(editing.name)}` : "Appezzamento agricolo"}</h3>
        </div>
        <input name="id" type="hidden" value="${attr(editing?.id)}" />
        <label>Codice campo <input value="${attr(editing?.id || "Automatico")}" disabled /></label>
        <label>Nome campo <input name="name" required value="${attr(editing?.name)}" placeholder="Vigneto Collina Est" /></label>
        <label>Cliente collegato
          <select name="client" required>${selectOptions(farmers.map((client) => client.name), editing?.client || farmers[0]?.name || "")}</select>
        </label>
        <label>Referente / proprietario <input name="owner" value="${attr(editing?.owner)}" placeholder="Referente operativo" /></label>
        <label>Comune <input name="city" required value="${attr(editing?.city)}" placeholder="Comune" /></label>
        <label>Coltura
          <select name="crop" required>${selectOptions(Object.values(cropLabels), editing?.crop || "Mais")}</select>
        </label>
        <label>Ettari <input name="hectares" type="number" min="0" step="0.1" required value="${attr(editing?.hectares)}" placeholder="0" /></label>
        <label>Stato autorizzazione
          <select name="auth">${selectOptions(["Da verificare", "In verifica", "Valida", "Da rinnovare", "Urgente"], editing?.auth || "Da verificare")}</select>
        </label>
        <label>Stato VRA
          <select name="vra">${selectOptions(["Non avviata", "Bozza", "In analisi", "Pronta", "Mappa disponibile"], editing?.vra || "Non avviata")}</select>
        </label>
        <label class="wide">Reminder <input name="reminder" value="${attr(editing?.reminder)}" placeholder="Prima operazione da pianificare" /></label>
        <label class="wide">Note operative <textarea name="note" rows="3" placeholder="Vincoli, accessi, ostacoli, preferenze operative">${escapeHtml(editing?.note || "")}</textarea></label>
        <div class="button-row">
          <button class="btn primary" type="submit">${editing ? "Salva modifiche" : "Crea campo"}</button>
          ${editing ? '<button class="btn ghost js-cancel-admin-edit" data-target="field" type="button">Annulla modifica</button>' : ""}
        </div>
      </form>
      <div class="admin-list">
        <div class="panel-head compact"><div><h3>Campi</h3><p class="panel-subtitle">Appezzamenti collegati ai clienti</p></div></div>
        ${fields.length ? fields.map(adminFieldRow).join("") : '<div class="empty-state">Nessun campo presente. Crea il primo appezzamento.</div>'}
      </div>
    </div>
  `;
}

function renderAdminJobs() {
  const editing = bookings.find((booking) => booking.id === state.admin.editJob) || null;
  const selectedField = fields.find((field) => field.name === editing?.field);
  const defaultCrop = editing?.crop || cropKeyFromLabel(selectedField?.crop) || "mais";
  return `
    <div class="fleet-panel">
      <div>
        <p class="spaced-label">Capienza operativa</p>
        <h3>Flotta e lavori venduti</h3>
        <p class="panel-subtitle">Questa è l'unica sezione in cui modificare flotta, lavori e saturazione del calendario.</p>
      </div>
      <label>Numero T100 in flotta
        <input id="fleetT100" type="number" min="0" step="1" value="${state.capacity.fleet.t100}" />
      </label>
    </div>
    <div class="admin-layout">
      <form class="admin-form" id="adminJobForm" novalidate>
        <div>
          <p class="spaced-label">${editing ? "Modifica lavoro" : "Nuovo lavoro"}</p>
          <h3>${editing ? `${escapeHtml(editing.id)} / ${escapeHtml(editing.field)}` : "Prenotazione operativa"}</h3>
        </div>
        <input name="id" type="hidden" value="${attr(editing?.id)}" />
        <label>Codice lavoro <input value="${attr(editing?.id || "Automatico")}" disabled /></label>
        <label>Data <input name="date" type="date" required value="${attr(editing?.date || todayIso())}" /></label>
        <label>Cliente
          <select name="client" required>${selectOptions(farmers.map((client) => client.name), editing?.client || farmers[0]?.name || "")}</select>
        </label>
        <label>Campo
          <select name="field" required>${selectOptions(fields.map((field) => field.name), editing?.field || fields[0]?.name || "")}</select>
        </label>
        <label>Coltura
          <select name="crop" required>${selectOptions(Object.entries(cropLabels).map(([key, label]) => [key, label]), defaultCrop)}</select>
        </label>
        <label>Servizio
          <select name="service" required>${selectOptions(Object.entries(operationLabels).map(([key, label]) => [key, label]), editing?.service || "lancio-insetti")}</select>
        </label>
        <label>Difficoltà terreno 1-10 <input name="terrainLevel" type="number" min="1" max="10" step="1" value="${attr(editing?.terrainLevel || 1)}" /></label>
        <label>Ettari <input name="hectares" type="number" min="0" step="0.1" required value="${attr(editing?.hectares)}" placeholder="0" /></label>
        <label>Drone assegnato <input name="drone" value="${attr(editing?.drone || "T100-01")}" /></label>
        <label>Stato
          <select name="status">${selectOptions(["Preventivo", "Venduto", "Pianificato", "In corso", "Completato", "Annullato"], displayStatus(editing?.status || "Pianificato"))}</select>
        </label>
        <label class="wide">Note <textarea name="note" rows="3" placeholder="Note operative, vincoli, materiale da preparare">${escapeHtml(editing?.note || "")}</textarea></label>
        <p class="form-note">La capienza usa coltura + servizio + difficoltà terreno. Se il lavoro viene salvato, missione, report e reminder collegati vengono aggiornati.</p>
        <div class="button-row">
          <button class="btn primary" type="submit">${editing ? "Salva modifiche" : "Crea lavoro"}</button>
          ${editing ? '<button class="btn ghost js-cancel-admin-edit" data-target="job" type="button">Annulla modifica</button>' : ""}
        </div>
      </form>
      <div class="admin-list">
        <div class="panel-head compact"><div><h3>Lavori</h3><p class="panel-subtitle">Prenotazioni vendute e pianificate</p></div></div>
        ${bookings.length ? bookings.map(adminJobRow).join("") : '<div class="empty-state">Nessun lavoro presente. Crea una prenotazione operativa.</div>'}
      </div>
    </div>
  `;
}

function adminClientRow(client) {
  const linkedFields = fields.filter((field) => field.client === client.name).length;
  const linkedJobs = bookings.filter((booking) => booking.client === client.name).length;
  return `
    <article class="admin-card">
      <div>
        <h3>${escapeHtml(client.name)}</h3>
        <p class="muted">${escapeHtml(client.contact || "Referente da completare")} / ${escapeHtml(client.city || "Comune da completare")}</p>
        <div class="pill-row">${pill(client.status)}<span class="pill blue">${escapeHtml(client.channel || "WhatsApp")}</span></div>
      </div>
      <dl class="admin-dl compact">
        <div><dt>Campi</dt><dd>${linkedFields}</dd></div>
        <div><dt>Lavori</dt><dd>${linkedJobs}</dd></div>
      </dl>
      <div class="admin-actions">
        <button class="btn ghost js-edit-client" data-name="${attr(client.name)}" type="button">Modifica</button>
        <button class="btn ghost danger-btn js-delete-client" data-name="${attr(client.name)}" type="button">Elimina</button>
      </div>
    </article>
  `;
}

function adminFieldRow(field) {
  const linkedJobs = bookings.filter((booking) => booking.field === field.name).length;
  return `
    <article class="admin-card">
      <div>
        <h3>${escapeHtml(field.name)}</h3>
        <p class="muted">${escapeHtml(field.id)} / ${escapeHtml(field.client)} / ${formatNumber(field.hectares)} ha</p>
        <div class="pill-row"><span class="pill blue">${escapeHtml(field.crop)}</span>${pill(field.auth)}${pill(field.vra)}</div>
      </div>
      <dl class="admin-dl compact">
        <div><dt>Comune</dt><dd>${escapeHtml(field.city || "-")}</dd></div>
        <div><dt>Lavori</dt><dd>${linkedJobs}</dd></div>
      </dl>
      <div class="admin-actions">
        <button class="btn ghost js-edit-field" data-id="${attr(field.id)}" type="button">Modifica</button>
        <button class="btn ghost danger-btn js-delete-field" data-id="${attr(field.id)}" type="button">Elimina</button>
      </div>
    </article>
  `;
}

function adminJobRow(booking) {
  const percent = bookingOccupancyPercent(booking);
  return `
    <article class="admin-card">
      <div>
        <h3>${escapeHtml(booking.id)} / ${escapeHtml(booking.field)}</h3>
        <p class="muted">${formatDate(booking.date)} / ${escapeHtml(booking.client)}</p>
        <div class="pill-row">${pill(displayStatus(booking.status))}<span class="pill blue">${escapeHtml(operationLabels[booking.service] || booking.service)}</span></div>
      </div>
      <dl class="admin-dl compact">
        <div><dt>Quota</dt><dd>${percent}%</dd></div>
        <div><dt>Ettari</dt><dd>${formatNumber(booking.hectares)}</dd></div>
      </dl>
      <div class="admin-actions">
        <button class="btn ghost js-edit-job" data-id="${attr(booking.id)}" type="button">Modifica</button>
        <button class="btn ghost danger-btn js-delete-job" data-id="${attr(booking.id)}" type="button">Elimina</button>
      </div>
    </article>
  `;
}

function renderQuotes() {
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Preventivatore intelligente", "Pricing dinamico, margine atteso e break-even per cluster", true)}
      <div class="quote-layout">
        <form class="quote-form" id="quoteForm">
          <label>Cliente <select name="client">${farmers.map((client) => `<option>${escapeHtml(client.name)}</option>`).join("")}</select></label>
          <label>Campo <select name="field">${fields.map((field) => `<option>${escapeHtml(field.name)}</option>`).join("")}</select></label>
          <label>Servizio <select name="service">${Object.entries(operationLabels).map(([key, label]) => `<option value="${key}">${label}</option>`).join("")}</select></label>
          ${quoteInput("Ettari", "hectares", quoteDefaults.hectares)}
          ${quoteInput("Prezzo base EUR/ha", "basePrice", quoteDefaults.basePrice)}
          ${quoteInput("Minimo uscita EUR", "minimumExit", quoteDefaults.minimumExit)}
          ${quoteInput("Distanza km", "distanceKm", quoteDefaults.distanceKm)}
          ${quoteInput("Urgenza %", "urgency", quoteDefaults.urgency)}
          ${quoteInput("Complessità coltura %", "cropComplexity", quoteDefaults.cropComplexity)}
          ${quoteInput("Complessità autorizzativa %", "authComplexity", quoteDefaults.authComplexity)}
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
            <tr><td>Vite collinare</td><td>145 EUR/ha</td><td>66 EUR/ha</td><td class="saving">54%</td><td>Alta complessità</td></tr>
            <tr><td>Frutta con mapping</td><td>132 EUR/ha</td><td>58 EUR/ha</td><td class="saving">56%</td><td>Report ad alto valore</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
  updateQuotePreview();
  bindQuoteActions();
  bindExport();
}

function renderPortal() {
  const client = farmers[0];
  const clientFields = fields.filter((field) => field.client === client.name);
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead('Il mio campo', "Area semplice per vedere lavori, documenti, mappe e prossimi passaggi", true)}
      <div class="profile-box">
        <p class="muted">Cliente</p>
        <h3>${escapeHtml(client.name)}</h3>
        <div class="profile-grid">
          <p>Referente: <strong>${escapeHtml(client.contact)}</strong></p>
          <p>Canale: <strong>${escapeHtml(client.channel)}</strong></p>
          <p>Campi caricati: <strong>${clientFields.length}</strong></p>
          <p>Documenti aperti: <strong>3</strong></p>
        </div>
      </div>
      <div class="portal-grid">
        ${portalBox("Campi caricati", clientFields.map((field) => `${field.name} / ${field.hectares} ha`))}
        ${portalBox("Mappe e interventi", ["Mappa vigoria Vigneto Collina Est", "Layer stress Oliveto Casetta", "Prescrizione VRA in revisione"])}
        ${portalBox("Foto prima/dopo", ["Vigneto Collina Est / prima", "Vigneto Collina Est / dopo", "Oliveto Casetta / sopralluogo"])}
        ${portalBox("Storico trattamenti", ["Fogliare vite / 21 mar", "Controllo vento / 24 mar", "Report finale / 26 mar"])}
        ${portalBox("Documenti e autorizzazioni", permits.filter((permit) => permit.client === client.name).map((permit) => `${permit.id} / ${permit.status}${permit.fileName ? " / PDF" : ""}`))}
        ${portalBox("Preventivi e reminder", ["Preventivo VRA 2026", "Reminder controllo tra 12 giorni", "Prossimo sopralluogo da confermare"])}
        ${portalBox("Confronto VRA semplice", vraMaps.slice(0, 2).map((map) => `${map.field}: risparmio ${map.saving}`))}
      </div>
    </section>
  `;
  bindActionButtons();
  bindExport();
}

function renderWhatsApp() {
  workspace.innerHTML = `
    <section class="panel">
      ${panelHead("Contadino WhatsApp-first", "Messaggi automatici per report, reminder, preventivi e post-intervento", true)}
      <div class="whatsapp-layout">
        <div class="booking-box">
          <label>Cliente
            <select id="waClient">${farmers.map((client) => `<option>${escapeHtml(client.name)}</option>`).join("")}</select>
          </label>
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
          <button class="btn primary" id="copyWhatsApp" type="button">${icons.phone} Copia messaggio</button>
          <p class="form-note">Questa demo prepara il testo: l’invio reale richiede integrazione WhatsApp Business API.</p>
        </div>
      </div>
    </section>
  `;
  updateWhatsAppPreview();
  bindWhatsAppActions();
  bindExport();
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
  const groups = ["Bozza", "Preliminare", "Da chiudere", "Pronto da inviare"];
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
      ${groups.map((status) => {
        const reports = missionReports.filter((report) => report.status === status);
        return `<div class="report-section"><h3>${status}</h3><div class="report-grid">${reports.length ? reports.map(reportCard).join("") : '<div class="empty-state compact">Nessun report in questo stato.</div>'}</div></div>`;
      }).join("")}
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
    <button class="data-card js-open" data-kind="field" data-id="${attr(field.id)}" type="button">
      <div class="panel-head" style="margin:0"><div><h3>${escapeHtml(field.name)}</h3><p class="muted">${escapeHtml(field.id)} / ${escapeHtml(field.city)}</p></div><span class="pill blue">${escapeHtml(field.crop)}</span></div>
      <div class="mini-grid">
        <div class="mini-stat"><span>Ettari</span><strong>${field.hectares} ha</strong></div>
        <div class="mini-stat"><span>Cliente</span><strong>${escapeHtml(field.client)}</strong></div>
      </div>
      <div class="pill-row">${pill(field.auth)}${pill(field.vra)}</div>
      <p class="muted">${escapeHtml(field.reminder)}</p>
    </button>
  `;
}

function fieldsTable(items) {
  if (!items.length) return emptyState();
  return `
    <div class="data-table">
      <div class="table-row header"><span>Campo</span><span>Coltura</span><span>Autorizzazione</span><span>VRA</span><span>Reminder</span></div>
      ${items.map((field) => `
        <button class="table-row js-open" data-kind="field" data-id="${attr(field.id)}" type="button">
          <span><h3>${escapeHtml(field.name)}</h3><span class="muted">${escapeHtml(field.client)} / ${field.hectares} ha</span></span>
          <span>${escapeHtml(field.crop)}</span>
          <span>${pill(field.auth)}</span>
          <span>${pill(field.vra)}</span>
          <span class="muted">${escapeHtml(field.reminder)}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function permitItem(permit) {
  return `
    <button class="list-item js-open" data-kind="permit" data-id="${attr(permit.id)}" type="button">
      <span><h3>${escapeHtml(permit.title)}</h3><span class="muted">${escapeHtml(permit.id)} / ${escapeHtml(permit.client)} / ${escapeHtml(permit.field)}</span></span>
      <span class="highlight-box"><span class="muted">Scadenza</span><br><strong>${formatPermitDate(permit.due)}</strong></span>
      ${permit.fileName ? '<span class="pill blue">PDF caricato</span>' : ""}
      ${pill(permit.status)}
    </button>
  `;
}

function vraItem(map) {
  return `
    <button class="list-item js-open" data-kind="vra" data-id="${attr(map.id)}" type="button">
      <span><h3>${escapeHtml(map.field)}</h3><span class="muted">${escapeHtml(map.crop)} / Mappa vigoria completata</span><p class="vra-copy">${escapeHtml(map.note)}</p></span>
      <span class="highlight-box"><span class="muted">Risparmio</span><br><strong>${escapeHtml(map.saving)}</strong></span>
      ${pill(map.status)}
    </button>
  `;
}

function clientCard(client) {
  return `
    <button class="client-card js-open" data-kind="farmer" data-id="${attr(client.name)}" type="button">
      <div class="panel-head" style="margin:0 0 14px"><div><h3>${escapeHtml(client.name)}</h3><p class="muted">${escapeHtml(client.contact)}</p></div>${pill(client.status)}</div>
      <p class="muted">Ultimo update: ${escapeHtml(client.last)}</p>
      <div class="pill-row">${client.crops.map((crop) => `<span class="pill blue">${escapeHtml(crop)}</span>`).join("")}</div>
    </button>
  `;
}

function reminderItem(reminder) {
  return `
    <button class="list-item js-open" data-kind="reminder" data-id="${attr(reminder.id)}" type="button">
      <span><h3>${escapeHtml(reminder.title)}</h3><span class="muted">${escapeHtml(reminder.when || reminder.date || "Da pianificare")} / ${escapeHtml(reminder.type || "Operativo")}</span></span>
      <span class="highlight-box"><span class="muted">Nota</span><br><strong>${escapeHtml(reminder.note || "Operazione creata in sessione")}</strong></span>
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
  const numericKeys = ["hectares", "basePrice", "minimumExit", "distanceKm", "urgency", "cropComplexity", "authComplexity", "addOns", "seasonalDiscount", "variableCost"];
  numericKeys.forEach((key) => { values[key] = Number(values[key] || 0); });
  return values;
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
    <p class="form-note">Formula: prezzo base + minimo uscita + distanza + urgenza + complessità coltura/autorizzativa + report/VRA - sconto stagionale.</p>
    <div class="button-row">
      <button class="btn primary js-quote-to-job" type="button">Trasforma in lavoro pianificato</button>
      <button class="btn ghost js-quote-to-whatsapp" type="button">Prepara testo WhatsApp</button>
    </div>
  `;
}

function bindQuoteActions() {
  document.querySelector(".js-quote-to-job")?.addEventListener("click", () => {
    state.active = "backend";
    renderNav();
    render();
  });
  document.querySelector(".js-quote-to-whatsapp")?.addEventListener("click", () => {
    state.active = "whatsapp";
    renderNav();
    render();
  });
}

function portalBox(title, items) {
  const safeItems = items.length ? items : ["Nessun elemento disponibile."];
  return `
    <article class="portal-box">
      <h3>${title}</h3>
      <ul>${safeItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `;
}

function updateWhatsAppPreview() {
  const select = $("#waTemplate");
  const clientSelect = $("#waClient");
  const preview = $("#waPreview");
  if (!select || !preview) return;
  const farmer = farmers.find((item) => item.name === clientSelect?.value) || farmers[0];
  preview.textContent = whatsappTemplates[select.value].replaceAll("Marco", farmer?.contact?.split(" ")[0] || "Cliente");
}

function bindWhatsAppActions() {
  $("#copyWhatsApp")?.addEventListener("click", async () => {
    const text = $("#waPreview")?.textContent || "";
    try {
      await navigator.clipboard.writeText(text);
      $("#copyWhatsApp").textContent = "Messaggio copiato";
    } catch {
      alert(text);
    }
  });
}

function missionCard(mission) {
  const completed = mission.checks.length;
  const progress = Math.round((completed / missionChecks.length) * 100);
  return `
    <article class="mission-card">
      <div class="panel-head" style="margin:0 0 14px">
        <div><h3>${escapeHtml(mission.field)}</h3><p class="muted">${escapeHtml(mission.client)} / ${escapeHtml(mission.position)}</p></div>
        ${pill(mission.status)}
      </div>
      <div class="mini-grid">
        <div class="mini-stat"><span>Ettari</span><strong>${mission.hectares} ha</strong></div>
        <div class="mini-stat"><span>Prodotto</span><strong>${escapeHtml(mission.product)}</strong></div>
        <div class="mini-stat"><span>Litri/kg</span><strong>${escapeHtml(mission.material)}</strong></div>
        <div class="mini-stat"><span>Batterie</span><strong>${mission.batteries}</strong></div>
      </div>
      <div class="capacity-meter"><span style="width:${progress}%"></span></div>
      <div class="check-grid">
        ${missionChecks.map((check) => `<label><input class="mission-check" data-mission-id="${mission.id}" data-check="${check}" type="checkbox" ${mission.checks.includes(check) ? "checked" : ""} /> ${check}</label>`).join("")}
      </div>
      <p class="muted">Mancano: ${missionChecks.filter((check) => !mission.checks.includes(check)).join(", ") || "nessun controllo"}.</p>
      <p class="muted">Tempo stimato: ${escapeHtml(mission.time)} / Margine previsto: ${escapeHtml(mission.margin)}</p>
      <div class="button-row"><button class="btn ghost js-go-view" data-target-view="reports" type="button">Genera report</button></div>
    </article>
  `;
}

function updateMissionCheck(input) {
  const mission = missions.find((item) => item.id === input.dataset.missionId);
  if (!mission) return;
  const check = input.dataset.check;
  if (input.checked && !mission.checks.includes(check)) mission.checks.push(check);
  if (!input.checked) mission.checks = mission.checks.filter((item) => item !== check);
  mission.status = mission.checks.length === missionChecks.length ? "Completato" : "Da preparare";
  saveAppData();
  render();
}

function opsColumn(title, items) {
  const content = items.length ? items.map((item) => `
    <button class="ops-item js-go-view" data-target-view="${item.view}" type="button">
      <span>${pill(item.tone)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <small>${escapeHtml(item.meta || "")}</small>
    </button>
  `).join("") : '<div class="empty-state compact">Nessuna urgenza aperta.</div>';
  return `<article class="ops-column"><h3>${title}</h3>${content}</article>`;
}

function pipeline() {
  const steps = [
    ["Cliente", farmers.length, "farmers"],
    ["Campo", fields.length, "fields"],
    ["Autorizzazioni", permits.filter((p) => p.status === "Valida").length, "permits"],
    ["VRA", vraMaps.length, "vra"],
    ["Preventivo", "da inviare", "quotes"],
    ["Missione", missions.length, "missions"],
    ["Report", missionReports.length, "reports"],
    ["Follow-up", reminders.length, "whatsapp"]
  ];
  return `<div class="pipeline">${steps.map(([label, value, view], index) => `
    <button class="pipeline-step js-go-view" data-target-view="${view}" type="button">
      <span>${index + 1}</span>
      <strong>${label}</strong>
      <small>${value}</small>
    </button>
  `).join("")}</div>`;
}

function bindActionButtons() {
  document.querySelectorAll(".js-go-view").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.adminTabTarget) state.admin.tab = button.dataset.adminTabTarget;
      state.active = button.dataset.targetView || "dashboard";
      renderNav();
      render();
    });
  });
}

function reportCard(report) {
  const mission = missions.find((item) => item.id === report.missionId);
  return `
    <article class="portal-box">
      <div class="panel-head" style="margin:0 0 12px">
        <div><h3>${escapeHtml(report.field)}</h3><p class="muted">${escapeHtml(report.id)} / ${escapeHtml(report.client)}</p></div>
        ${pill(report.status)}
      </div>
      <p><strong>Missione:</strong> ${escapeHtml(report.missionId)}</p>
      <p><strong>Agente usato:</strong> ${escapeHtml(report.agent)}</p>
      <p><strong>Consuntivo:</strong> ${mission ? `${mission.hectares} ha / ${escapeHtml(mission.time)} / margine ${escapeHtml(mission.margin)}` : "Da collegare"}</p>
      <h3>File generati</h3>
      <div class="pill-row">${report.files.map((file) => `<span class="pill blue">${escapeHtml(file)}</span>`).join("")}</div>
      <h3>Documenti missione</h3>
      <div class="pill-row">${report.documents.map((doc) => `<span class="pill ok">${escapeHtml(doc)}</span>`).join("")}</div>
      <p><strong>Da chiudere:</strong> ${report.status === "Pronto da inviare" ? "nessuna attività mancante" : "verifica file finali, note operatore e invio cliente"}</p>
      <p class="muted">${escapeHtml(report.summary)}</p>
    </article>
  `;
}

function buildAiReadablePayload() {
  return {
    generated_at: new Date().toISOString(),
    app: "Contadini Volanti",
    reports: missionReports.map((report) => {
      const mission = missions.find((item) => item.id === report.missionId);
      return {
        report_id: report.id,
        mission_id: report.missionId,
        client: report.client,
        field: report.field,
        status: report.status,
        farmer_agent: report.agent,
        files: report.files,
        operational_documents: report.documents,
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
      `Agente usato: ${report.farmer_agent}`,
      `Stato: ${report.status}`,
      `File: ${report.files.join(", ")}`,
      `Documenti: ${report.operational_documents.join(", ")}`,
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

function getAppData() {
  return {
    appDataVersion: 2,
    fields,
    permits,
    vraMaps,
    farmers,
    reminders,
    bookings,
    missions,
    missionReports,
    operations: state.operations,
    state: { capacity: state.capacity }
  };
}

async function saveAppData() {
  const serialized = JSON.stringify(getAppData());
  try {
    const response = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: serialized
    });
    if (response.status === 401) {
      window.location.href = "/login";
      return;
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return;
  } catch (error) {
    console.warn("Salvataggio condiviso non disponibile, uso localStorage locale.", error);
  }

  try {
    localStorage.setItem(storageKey, serialized);
  } catch (error) {
    console.warn("Impossibile salvare i dati locali.", error);
  }
}

async function loadAppData() {
  try {
    const response = await fetch("/api/data", { credentials: "same-origin" });
    if (response.status === 401) {
      window.location.href = "/login";
      return;
    }
    if (response.ok) {
      const data = await response.json();
      applyAppData(data);
      return;
    }
    throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    console.warn("Archivio condiviso non disponibile, provo localStorage locale.", error);
  }

  const raw = localStorage.getItem(storageKey);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    applyAppData(data);
  } catch (error) {
    console.warn("Backup locale non leggibile: riparto dai dati demo.", error);
    localStorage.removeItem(storageKey);
  }
}

async function logout() {
  try {
    await fetch("/api/logout", { method: "POST", credentials: "same-origin" });
  } finally {
    window.location.href = "/login";
  }
}

function applyAppData(data) {
  if (!data || typeof data !== "object") throw new Error("Formato backup non valido");
  replaceArray(fields, data.fields);
  replaceArray(permits, data.permits);
  replaceArray(vraMaps, data.vraMaps);
  replaceArray(farmers, data.farmers);
  replaceArray(reminders, data.reminders);
  replaceArray(bookings, data.bookings);
  replaceArray(missions, data.missions);
  replaceArray(missionReports, data.missionReports);
  replaceArray(state.operations, data.operations);
  if (data.state?.capacity) {
    state.capacity = {
      month: Number(data.state.capacity.month ?? state.capacity.month),
      year: Number(data.state.capacity.year ?? state.capacity.year),
      fleet: { t100: Number(data.state.capacity.fleet?.t100 ?? state.capacity.fleet.t100) }
    };
  }
  normalizeAppData();
  ensureBookingLinks();
}

function normalizeAppData() {
  const legacyName = "Societa Agricola Dal Maso";
  const modernName = "Società Agricola Dal Maso";
  const legacyClient = farmers.find((client) => client.name === legacyName);
  if (legacyClient) {
    legacyClient.name = modernName;
    updateClientReferences(legacyName, modernName);
  }
  [fields, permits, vraMaps, farmers, reminders, bookings, missions, missionReports, state.operations].forEach((collection) => {
    collection.forEach((item) => {
      ["status", "auth", "vra", "priority"].forEach((key) => {
        if (item[key]) item[key] = displayStatus(item[key]);
      });
    });
  });
}

function replaceArray(target, next) {
  if (!Array.isArray(next)) return;
  target.splice(0, target.length, ...next);
}

function clearDemoData() {
  if (!confirm("Vuoi svuotare i dati demo e iniziare da zero?")) return;
  [fields, permits, vraMaps, farmers, reminders, bookings, missions, missionReports, state.operations].forEach((collection) => collection.splice(0, collection.length));
  state.admin = { tab: "clients", editClient: null, editField: null, editJob: null, notice: "Dati demo svuotati. Puoi iniziare da zero." };
  localStorage.removeItem(storageKey);
  saveAppData();
  renderFilterOptions();
  render();
}

function backupAppData() {
  downloadText(`contadini-volanti-backup-${todayIso()}.json`, JSON.stringify(getAppData(), null, 2), "application/json");
}

function restoreBackupFromFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      applyAppData(data);
      state.admin.notice = `Backup ripristinato. Schema dati v${data.appDataVersion || 1}.`;
      state.active = "backend";
      saveAppData();
      renderFilterOptions();
      renderNav();
      render();
    } catch (error) {
      console.warn("Ripristino non riuscito.", error);
      alert("Backup non valido o corrotto. Nessun dato è stato importato.");
    } finally {
      const input = $("#restoreBackupInput");
      if (input) input.value = "";
    }
  };
  reader.readAsText(file);
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("it-IT", { maximumFractionDigits: 1 });
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
  const rawCapacity = getOperationBaseCapacity(bookingLike.crop, bookingLike.service) * getTerrainFactor(bookingLike.terrainLevel) * state.capacity.fleet.t100;
  return rawCapacity > 0 ? Math.max(1, Math.floor(rawCapacity)) : 0;
}

function bookingOccupancyPercent(bookingLike) {
  const capacity = getBookingDailyCapacity(bookingLike);
  return capacity ? Math.min(100, Math.round((Number(bookingLike.hectares || 0) / capacity) * 100)) : 100;
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

function bookedForDate(date, excludeId = null) {
  return bookings
    .filter((booking) => booking.date === date && booking.id !== excludeId)
    .reduce((total, booking) => total + bookingOccupancyPercent(booking), 0);
}

function remainingForDate(date, excludeId = null) {
  return Math.max(0, 100 - bookedForDate(date, excludeId));
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

function capacityCalendar({ interactive = false } = {}) {
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
    const tag = interactive ? "button" : "div";
    const attrs = interactive
      ? `class="calendar-cell ${status} js-select-day" data-date="${date}" type="button"`
      : `class="calendar-cell ${status}"`;
    cells.push(`
      <${tag} ${attrs}>
        <span class="day-number">${day}</span>
        <span class="day-status">${label}</span>
        <span class="capacity-meter"><span style="width:${percent}%"></span></span>
        <span class="day-hectares">${percent}% usato / ${remainingPercent}% libero</span>
      </${tag}>
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
    <button class="table-row js-open" data-kind="booking" data-id="${attr(booking.id)}" type="button">
      <span><h3>${formatDate(booking.date)}</h3><span class="muted">${escapeHtml(booking.field)}</span></span>
      <span>${escapeHtml(booking.client)}</span>
      <span>${escapeHtml(operationLabels[booking.service] || booking.service)}<br><span class="muted">${escapeHtml(cropLabels[booking.crop] || "")} • terreno ${booking.terrainLevel}/10</span></span>
      <span><strong>${bookingPercent}%</strong><br><span class="muted">${booking.hectares}/${capacity} ha</span></span>
      <span>${pill(remaining ? `${remainingPercent}% disponibile` : "100% completo")}</span>
    </button>
  `;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatDate(date) {
  if (!date || !String(date).includes("-")) return date || "Da definire";
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

function formatPermitDate(value) {
  if (!value) return "Da definire";
  return value.includes("-") ? formatDate(value) : value;
}

function pill(value) {
  const normalized = displayStatus(value);
  const key = String(normalized || "").toLowerCase();
  const tone = key.includes("urgent") || key.includes("urgente") || key.includes("rinnovare") || key.includes("alta") ? "danger"
    : key.includes("bozza") || key.includes("analisi") || key.includes("media") ? "blue"
    : key.includes("verifica") || key.includes("revisione") || key.includes("attesa") ? "warn"
    : "ok";
  return `<span class="pill ${tone}">${escapeHtml(normalized)}</span>`;
}

function displayStatus(value) {
  const map = { Valid: "Valida", valid: "Valida", priority: "Priorità", Completo: "Completato" };
  return map[value] || value || "";
}

function filterItems(items) {
  if (state.active !== "dashboard") return items;
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

function shiftCapacityMonth(delta) {
  const next = new Date(state.capacity.year, state.capacity.month + delta, 1);
  state.capacity.year = next.getFullYear();
  state.capacity.month = next.getMonth();
  saveAppData();
  render();
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
  if (!preview.capacity) {
    note.textContent = "Nessuna capienza disponibile: inserisci almeno un drone T100 in flotta.";
    note.classList.add("error");
    return;
  }
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
  const title = escapeHtml(item.name || item.title || item.field);
  const subtitle = escapeHtml(item.id || item.client || item.crop || "Dettaglio operativo");
  $("#detailDrawer").innerHTML = `
    <div class="drawer-head">
      <div><p class="spaced-label">${kind}</p><h2>${title}</h2><p class="muted">${subtitle}</p></div>
      <button class="icon-btn" type="button" aria-label="Chiudi dettaglio" id="closeDrawer">${icons.x}</button>
    </div>
    <div class="drawer-section"><h3>Stato</h3><div class="pill-row">${[item.status, item.auth, item.vra, item.priority].filter(Boolean).map(pill).join("")}</div></div>
    <div class="drawer-section"><h3>Dati principali</h3>${Object.entries(item).filter(([key]) => !["note", "fileData"].includes(key)).map(([key, value]) => `<p><strong>${labelize(key)}:</strong> ${escapeHtml(Array.isArray(value) ? value.join(", ") : value)}</p>`).join("")}</div>
    ${item.fileData ? `<div class="drawer-section"><h3>PDF allegato</h3><a class="btn ghost" href="${attr(item.fileData)}" download="${attr(item.fileName || "autorizzazione.pdf")}">Apri / scarica PDF</a></div>` : ""}
    <div class="drawer-section"><h3>Nota operativa</h3><p>${escapeHtml(item.note || "Nessuna nota aggiuntiva.")}</p></div>
    <div class="drawer-section"><h3>Azioni successive</h3><div class="button-row">${drawerActions(kind)}</div></div>
  `;
  $("#drawerBackdrop").hidden = false;
  $("#detailDrawer").classList.add("open");
  $("#detailDrawer").setAttribute("aria-hidden", "false");
  $("#closeDrawer").addEventListener("click", closeDrawer);
  $("#closeDrawer").focus();
}

function drawerActions(kind) {
  const actions = {
    field: [["quotes", "Crea preventivo"], ["permits", "Verifica autorizzazioni"], ["vra", "Apri VRA"], ["capacity", "Pianifica missione"]],
    permit: [["permits", "Segna come valida"], ["reminders", "Crea reminder"], ["whatsapp", "Avvisa cliente"]],
    vra: [["reports", "Prepara report"], ["whatsapp", "Crea messaggio"], ["quotes", "Crea preventivo"]],
    farmer: [["fields", "Apri campi"], ["backend", "Crea campo"], ["whatsapp", "Prepara WhatsApp"]],
    booking: [["missions", "Apri missione"], ["reports", "Apri report"], ["reminders", "Crea reminder"]],
    reminder: [["reminders", "Segna completato"], ["dashboard", "Torna al centro operativo"]]
  };
  return (actions[kind] || [["dashboard", "Torna alla dashboard"]])
    .map(([action, label]) => `<button class="btn ghost js-drawer-action" data-action="${action}" type="button">${label}</button>`)
    .join("");
}

function runDrawerAction(action) {
  const viewMap = { field: "fields", permit: "permits" };
  state.active = viewMap[action] || action || "dashboard";
  closeDrawer();
  renderNav();
  render();
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
  saveAppData();
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

  if (!getBookingDailyCapacity(preview)) {
    note.textContent = "Nessuna capienza disponibile: inserisci almeno un drone T100 in flotta.";
    note.classList.add("error");
    return;
  }

  if (percent > remaining) {
    note.textContent = `Capienza insufficiente: questa vendita occupa ${percent}%, ma per questa data resta ${remaining}%.`;
    note.classList.add("error");
    return;
  }

  const booking = buildBooking({
    date: data.date,
    service: data.service,
    crop: data.crop,
    terrainLevel,
    client: data.client,
    field: data.field,
    hectares,
    status: percent === remaining ? "Completato" : "Venduto"
  });
  addBookingCascade(booking, percent);
  render();
}

function buildBooking({ date, service, crop, terrainLevel, client, field, hectares, status = "Venduto" }) {
  return {
    id: `JOB-${String(bookings.length + 1).padStart(3, "0")}`,
    date,
    service,
    crop,
    terrainLevel,
    client,
    field,
    hectares,
    drone: "T100-01",
    status
  };
}

function addBookingCascade(booking, percent = bookingOccupancyPercent(booking)) {
  bookings.push(booking);
  const mission = createMissionFromBooking(booking);
  missions.push(mission);
  const report = createReportFromMission(mission, booking);
  missionReports.push(report);
  const reminder = createReminderFromBooking(booking, percent);
  reminders.unshift(reminder);
  booking.missionId = mission.id;
  booking.reportId = report.id;
  booking.reminderId = reminder.id;
  saveAppData();
}

function createReminderFromBooking(booking, percent = bookingOccupancyPercent(booking)) {
  return {
    id: `REM-${String(reminders.length + 1).padStart(2, "0")}`,
    title: `Preparare missione ${booking.field}`,
    when: `${formatDate(booking.date)} / 07:30`,
    type: "Mission Control",
    priority: percent > 70 ? "Alta" : "Media",
    crop: cropLabels[booking.crop],
    note: `Checklist e documenti generati per ${booking.client}.`
  };
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

function switchAdminTab(tab) {
  state.admin.tab = ["clients", "fields", "jobs"].includes(tab) ? tab : "clients";
  state.admin.editClient = null;
  state.admin.editField = null;
  state.admin.editJob = null;
  render();
}

function setAdminNotice(message) {
  state.admin.notice = message;
}

function cancelAdminEditing(target) {
  if (target === "client") state.admin.editClient = null;
  if (target === "field") state.admin.editField = null;
  if (target === "job") state.admin.editJob = null;
  render();
}

function startEditClient(name) {
  state.admin.tab = "clients";
  state.admin.editClient = name;
  render();
}

function startEditField(id) {
  state.admin.tab = "fields";
  state.admin.editField = id;
  render();
}

function startEditJob(id) {
  state.admin.tab = "jobs";
  state.admin.editJob = id;
  render();
}

function saveClient(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const originalName = cleanText(data.originalName);
  const name = cleanText(data.name);
  const contact = cleanText(data.contact);
  const city = cleanText(data.city);
  const email = cleanText(data.email);

  if (!name || !contact || !city) return alert("Compila ragione sociale, referente e comune.");
  if (email && !isValidEmail(email)) return alert("Inserisci un indirizzo email valido.");
  if (farmers.some((client) => client.name.toLowerCase() === name.toLowerCase() && client.name !== originalName)) {
    return alert("Esiste già un cliente con questa ragione sociale.");
  }

  const existing = originalName ? farmers.find((client) => client.name === originalName) : null;
  const payload = {
    name,
    contact,
    city,
    crops: existing?.crops || [],
    status: data.status || "Attivo",
    last: existing ? "Modificato ora" : "Creato ora",
    phone: cleanText(data.phone),
    email,
    vat: cleanText(data.vat),
    channel: data.channel || "WhatsApp",
    note: cleanText(data.note)
  };

  if (existing) {
    const oldName = existing.name;
    Object.assign(existing, payload);
    if (oldName !== name) updateClientReferences(oldName, name);
    setAdminNotice(`Cliente "${name}" aggiornato.`);
  } else {
    farmers.push(payload);
    setAdminNotice(`Cliente "${name}" creato.`);
  }
  state.admin.editClient = null;
  refreshFarmerCrops();
  saveAppData();
  renderFilterOptions();
  render();
}

function saveField(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const id = cleanText(data.id);
  const name = cleanText(data.name);
  const client = cleanText(data.client);
  const city = cleanText(data.city);
  const hectares = Number(data.hectares);
  const crop = cleanText(data.crop);

  if (!name || !client || !city || !crop) return alert("Compila nome campo, cliente, comune e coltura.");
  if (!Number.isFinite(hectares) || hectares <= 0) return alert("Gli ettari devono essere maggiori di zero.");
  if (fields.some((field) => field.name.toLowerCase() === name.toLowerCase() && field.id !== id)) {
    return alert("Esiste già un campo con questo nome.");
  }

  const existing = id ? fields.find((field) => field.id === id) : null;
  const payload = {
    id: existing?.id || createFieldCode(crop),
    name,
    crop,
    client,
    owner: cleanText(data.owner) || farmers.find((item) => item.name === client)?.contact || "",
    city,
    hectares,
    auth: data.auth || "Da verificare",
    vra: data.vra || "Non avviata",
    reminder: cleanText(data.reminder) || "Prima operazione da pianificare",
    note: cleanText(data.note) || "Campo creato da amministrazione."
  };

  if (existing) {
    const oldName = existing.name;
    Object.assign(existing, payload);
    if (oldName !== name) updateFieldReferences(oldName, name);
    setAdminNotice(`Campo "${name}" aggiornato.`);
  } else {
    fields.push(payload);
    setAdminNotice(`Campo "${name}" creato.`);
  }
  state.admin.editField = null;
  refreshFarmerCrops();
  saveAppData();
  renderFilterOptions();
  render();
}

function saveAdminJob(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const id = cleanText(data.id);
  const hectares = Number(data.hectares);
  const terrainLevel = Math.min(10, Math.max(1, Number(data.terrainLevel || 1)));
  const booking = {
    ...(id ? bookings.find((item) => item.id === id) : {}),
    id: id || `JOB-${String(bookings.length + 1).padStart(3, "0")}`,
    date: data.date,
    service: data.service,
    crop: data.crop,
    terrainLevel,
    client: cleanText(data.client),
    field: cleanText(data.field),
    hectares,
    drone: cleanText(data.drone) || "T100-01",
    status: data.status || "Pianificato",
    note: cleanText(data.note)
  };

  if (!booking.date || !booking.client || !booking.field || !booking.crop || !booking.service) {
    return alert("Compila data, cliente, campo, coltura e servizio.");
  }
  if (!Number.isFinite(hectares) || hectares <= 0) return alert("Gli ettari devono essere maggiori di zero.");
  if (!getBookingDailyCapacity(booking)) return alert("Nessuna capienza disponibile: inserisci almeno un drone T100 in flotta.");

  const percent = bookingOccupancyPercent(booking);
  const remaining = remainingForDate(booking.date, id || null);
  if (percent > remaining) {
    alert(`Giornata non capiente: il lavoro occupa ${percent}%, resta ${remaining}%.`);
    return;
  }

  const existing = id ? bookings.find((item) => item.id === id) : null;
  if (existing) {
    Object.assign(existing, booking);
    syncBookingCascade(existing, percent);
    setAdminNotice(`Lavoro ${existing.id} aggiornato. Capienza ricalcolata.`);
  } else {
    addBookingCascade(booking, percent);
    setAdminNotice(`Lavoro ${booking.id} creato con missione, report e reminder.`);
  }
  state.admin.editJob = null;
  saveAppData();
  render();
}

function deleteClientByName(name) {
  const client = farmers.find((item) => item.name === name);
  if (!client) return;
  const fieldNames = fields.filter((field) => field.client === name).map((field) => field.name);
  const linkedJobs = bookings.filter((booking) => booking.client === name || fieldNames.includes(booking.field));
  const linkedDocs = permits.filter((permit) => permit.client === name || fieldNames.includes(permit.field)).length;
  const message = linkedJobs.length || fieldNames.length || linkedDocs
    ? `Il cliente "${name}" ha ${fieldNames.length} campi, ${linkedJobs.length} lavori e ${linkedDocs} autorizzazioni collegate. Eliminare anche questi dati collegati?`
    : `Eliminare il cliente "${name}"?`;
  if (!confirm(message)) return;

  removeBookingsByPredicate((booking) => booking.client === name || fieldNames.includes(booking.field), true);
  removeWhere(fields, (field) => field.client === name);
  removeWhere(permits, (permit) => permit.client === name || fieldNames.includes(permit.field));
  removeWhere(vraMaps, (map) => fieldNames.includes(map.field));
  removeWhere(reminders, (reminder) => textMentions(reminder, [name, ...fieldNames]));
  removeWhere(state.operations, (operation) => operation.client === name || textMentions(operation, [name, ...fieldNames]));
  removeWhere(farmers, (item) => item.name === name);
  setAdminNotice(`Cliente "${name}" eliminato.`);
  state.admin.editClient = null;
  saveAppData();
  renderFilterOptions();
  render();
}

function deleteFieldById(id) {
  const field = fields.find((item) => item.id === id);
  if (!field) return;
  const linkedJobs = bookings.filter((booking) => booking.field === field.name).length;
  const linkedDocs = permits.filter((permit) => permit.field === field.name).length;
  const linkedVra = vraMaps.filter((map) => map.field === field.name).length;
  const message = linkedJobs || linkedDocs || linkedVra
    ? `Il campo "${field.name}" ha ${linkedJobs} lavori, ${linkedDocs} autorizzazioni e ${linkedVra} mappe VRA collegate. Eliminare anche questi dati collegati?`
    : `Eliminare il campo "${field.name}"?`;
  if (!confirm(message)) return;

  removeBookingsByPredicate((booking) => booking.field === field.name, true);
  removeWhere(permits, (permit) => permit.field === field.name);
  removeWhere(vraMaps, (map) => map.field === field.name);
  removeWhere(reminders, (reminder) => textMentions(reminder, [field.name]));
  removeWhere(state.operations, (operation) => textMentions(operation, [field.name]));
  removeWhere(fields, (item) => item.id === id);
  refreshFarmerCrops();
  setAdminNotice(`Campo "${field.name}" eliminato.`);
  state.admin.editField = null;
  saveAppData();
  renderFilterOptions();
  render();
}

function deleteJobById(id) {
  const booking = bookings.find((item) => item.id === id);
  if (!booking) return;
  if (!confirm(`Eliminare il lavoro ${id}?`)) return;
  const hasLinked = Boolean(findLinkedMission(booking) || findLinkedReport(booking) || findLinkedReminder(booking));
  const deleteLinked = hasLinked ? confirm("Eliminare anche missione, report e reminder collegati?") : false;
  if (deleteLinked) removeLinkedBookingArtifacts(booking);
  removeWhere(bookings, (item) => item.id === id);
  setAdminNotice(`Lavoro ${id} eliminato. Capienza ricalcolata.`);
  state.admin.editJob = null;
  saveAppData();
  render();
}

function updateClientReferences(oldName, newName) {
  replaceReferences(fields, ["client"], oldName, newName);
  replaceReferences(bookings, ["client"], oldName, newName);
  replaceReferences(missions, ["client"], oldName, newName);
  replaceReferences(missionReports, ["client", "summary"], oldName, newName);
  replaceReferences(permits, ["client", "note"], oldName, newName);
  replaceReferences(reminders, ["title", "note"], oldName, newName);
  replaceReferences(state.operations, ["client", "title", "note"], oldName, newName);
}

function updateFieldReferences(oldName, newName) {
  replaceReferences(bookings, ["field"], oldName, newName);
  replaceReferences(missions, ["field"], oldName, newName);
  replaceReferences(missionReports, ["field", "summary"], oldName, newName);
  replaceReferences(permits, ["field", "note"], oldName, newName);
  replaceReferences(vraMaps, ["field", "note"], oldName, newName);
  replaceReferences(reminders, ["title", "note"], oldName, newName);
  replaceReferences(state.operations, ["title", "note"], oldName, newName);
}

function replaceReferences(collection, keys, oldValue, newValue) {
  collection.forEach((item) => {
    keys.forEach((key) => {
      if (typeof item[key] === "string") item[key] = item[key].replaceAll(oldValue, newValue);
    });
  });
}

function refreshFarmerCrops() {
  farmers.forEach((farmer) => {
    farmer.crops = [...new Set(fields.filter((field) => field.client === farmer.name).map((field) => field.crop))];
  });
}

function removeBookingsByPredicate(predicate, deleteLinked) {
  [...bookings].filter(predicate).forEach((booking) => {
    if (deleteLinked) removeLinkedBookingArtifacts(booking);
    removeWhere(bookings, (item) => item.id === booking.id);
  });
}

function removeLinkedBookingArtifacts(booking) {
  const mission = findLinkedMission(booking);
  const report = findLinkedReport(booking);
  const reminder = findLinkedReminder(booking);
  if (mission) removeWhere(missions, (item) => item.id === mission.id);
  if (report) removeWhere(missionReports, (item) => item.id === report.id);
  if (reminder) removeWhere(reminders, (item) => item.id === reminder.id);
}

function syncBookingCascade(booking, percent = bookingOccupancyPercent(booking)) {
  let mission = findLinkedMission(booking);
  if (!mission) {
    mission = createMissionFromBooking(booking);
    missions.push(mission);
    booking.missionId = mission.id;
  }
  const draftMission = createMissionFromBooking({ ...booking, id: booking.id });
  Object.assign(mission, {
    bookingId: booking.id,
    client: draftMission.client,
    field: draftMission.field,
    position: draftMission.position,
    hectares: draftMission.hectares,
    product: draftMission.product,
    material: draftMission.material,
    batteries: draftMission.batteries,
    time: draftMission.time
  });
  booking.missionId = mission.id;

  let report = findLinkedReport(booking);
  if (!report) {
    report = createReportFromMission(mission, booking);
    missionReports.push(report);
  }
  Object.assign(report, {
    bookingId: booking.id,
    missionId: mission.id,
    client: booking.client,
    field: booking.field,
    agent: booking.service.includes("vra") ? "Operatore drone + agente VRA" : "Operatore T100",
    summary: `Report collegato al lavoro ${booking.id}; dati aggiornati dopo modifica della prenotazione.`
  });
  booking.reportId = report.id;

  let reminder = findLinkedReminder(booking);
  if (!reminder) {
    reminder = createReminderFromBooking(booking, percent);
    reminders.unshift(reminder);
  }
  Object.assign(reminder, createReminderFromBooking(booking, percent), { id: reminder.id });
  booking.reminderId = reminder.id;
}

function ensureBookingLinks() {
  bookings.forEach((booking) => {
    const mission = findLinkedMission(booking);
    if (mission) {
      booking.missionId = mission.id;
      mission.bookingId = booking.id;
    }
    const report = findLinkedReport(booking);
    if (report) {
      booking.reportId = report.id;
      report.bookingId = booking.id;
      if (mission) report.missionId = mission.id;
    }
    const reminder = findLinkedReminder(booking);
    if (reminder) booking.reminderId = reminder.id;
  });
}

function findLinkedMission(booking) {
  return missions.find((mission) => mission.id === booking.missionId || mission.bookingId === booking.id)
    || missions.find((mission) => mission.client === booking.client && mission.field === booking.field);
}

function findLinkedReport(booking) {
  const mission = findLinkedMission(booking);
  return missionReports.find((report) => report.id === booking.reportId || report.bookingId === booking.id)
    || (mission ? missionReports.find((report) => report.missionId === mission.id) : null)
    || missionReports.find((report) => report.client === booking.client && report.field === booking.field);
}

function findLinkedReminder(booking) {
  return reminders.find((reminder) => reminder.id === booking.reminderId)
    || reminders.find((reminder) => textMentions(reminder, [booking.id, booking.field, booking.client]));
}

function removeWhere(collection, predicate) {
  for (let index = collection.length - 1; index >= 0; index -= 1) {
    if (predicate(collection[index])) collection.splice(index, 1);
  }
}

function textMentions(item, values) {
  const haystack = Object.values(item).filter((value) => typeof value === "string").join(" ");
  return values.filter(Boolean).some((value) => haystack.includes(value));
}

function createFieldCode(crop) {
  const prefix = String(crop || "CAM").normalize("NFD").replace(/[\u0300-\u036f]/g, "").slice(0, 3).toUpperCase();
  let index = fields.length + 1;
  let code = `${prefix}-${String(index).padStart(3, "0")}`;
  while (fields.some((field) => field.id === code)) {
    index += 1;
    code = `${prefix}-${String(index).padStart(3, "0")}`;
  }
  return code;
}

async function savePermit(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const file = form.elements.pdf.files?.[0];

  if (file && file.type !== "application/pdf") {
    alert("Carica solo file PDF.");
    return;
  }

  const permit = {
    id: `AUT-${String(3100 + permits.length + 1)}`,
    title: data.title,
    client: data.client,
    field: data.field,
    crop: data.crop,
    due: data.due,
    status: data.status,
    priority: data.priority,
    note: data.note || "Autorizzazione caricata nella cartella cliente.",
    fileName: file?.name || "",
    fileType: file?.type || "",
    fileData: file ? await fileToDataUrl(file) : ""
  };

  permits.unshift(permit);
  reminders.unshift({
    id: `REM-${String(reminders.length + 1).padStart(2, "0")}`,
    title: `Verifica autorizzazione ${permit.id}`,
    when: `${formatPermitDate(permit.due)} / 09:00`,
    type: "Autorizzazioni",
    priority: permit.priority,
    crop: permit.crop,
    note: `${permit.title} collegata a ${permit.client} / ${permit.field}.`
  });
  saveAppData();
  form.reset();
  render();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
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

function selectOptions(options, selected = "") {
  return options.map((option) => {
    const value = Array.isArray(option) ? option[0] : option;
    const label = Array.isArray(option) ? option[1] : option;
    return `<option value="${attr(value)}" ${String(value) === String(selected) ? "selected" : ""}>${escapeHtml(label)}</option>`;
  }).join("");
}

function attr(value) {
  return escapeHtml(value ?? "");
}

function cleanText(value) {
  return String(value ?? "").trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function cropKeyFromLabel(label) {
  const normalized = String(label || "").toLowerCase();
  return Object.entries(cropLabels).find(([, value]) => value.toLowerCase() === normalized)?.[0] || "mais";
}

function labelize(key) {
  const labels = { id: "Codice", name: "Nome", title: "Titolo", date: "Data", crop: "Coltura", client: "Cliente", owner: "Referente", city: "Comune", hectares: "Ettari", field: "Campo", drone: "Drone", service: "Servizio", booked: "Venduto", remaining: "Residuo", capacity: "Capienza", auth: "Autorizzazione", vra: "VRA", reminder: "Reminder", due: "Scadenza", status: "Stato", priority: "Priorità", standard: "Uso normale", saving: "Risparmio", phone: "Telefono", email: "Email", vat: "P. IVA", channel: "Canale", last: "Ultimo update" };
  return labels[key] || key;
}

function emptyState() {
  return '<div class="empty-state">Nessun elemento corrisponde alla ricerca o ai filtri attivi.</div>';
}

boot();


