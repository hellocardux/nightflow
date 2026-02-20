const APP_VERSION = "0.1.1";
const RULESET_VERSION = "it-rules-v1";
const MIN_PLAYERS = 8;
const MAX_PLAYERS = 24;
const DEFAULT_TIMER_SECONDS = 300;
const LONG_PRESS_MS = 900;
const THEME_IDS = ["moon-ops", "blood-fog"];

const I18N = {
  it: {
    title: "Nightflow | The Werewolf Engine",
    subtitle: "Control room narratore per Lupus in Tabula",
    setup: "Nuova partita",
    generate: "Genera setup",
    start: "Avvia partita",
    archive: "Archivio partite",
    noArchive: "Nessuna partita salvata",
    phase: "Fase",
    phaseNight: "Notte",
    phaseDay: "Giorno",
    phaseVote1: "Voto 1",
    phaseExecution: "Esecuzione",
    phaseEnded: "Partita conclusa",
    players: "Giocatori",
    log: "Log eventi",
    undo: "Annulla ultimo step",
    export: "Esporta JSON",
    import: "Importa JSON",
    guide: "Guida",
    themeSwitch: "Tema",
    themeMoonOps: "Moon Ops",
    themeBloodFog: "Blood & Fog",
    close: "Chiudi",
    confirm: "Conferma",
    cancel: "Annulla",
    footerPrefix: "© 2026 | ",
    langItalian: "Italiano",
    langEnglish: "Inglese",
    gameTitleFallback: "Partita",
    newGame: "Nuova partita",
    resume: "Riprendi",
    delete: "Elimina",
    template: "Template",
    setupPreview: "Preview setup",
    composition: "Composizione",
    warnings: "Avvisi",
    noWarnings: "Nessun avviso.",
    rerollRoles: "Rimescola ruoli",
    role: "Ruolo",
    roleAssign: "Assegnazione ruoli",
    noOne: "Nessuno",
    auto: "Auto",
    script: "Copione",
    nightActionsHidden: "Azioni notturne nascoste. Tieni premuto il pulsante sblocco.",
    protectedContent: "Contenuto protetto",
    nightNoActions: "Nessuna azione notturna da registrare in questa notte.",
    moderatorNotes: "Note moderatore",
    resolveNight: "Risolvi notte",
    announceAndVote: "Conferma annuncio e vai al voto 1",
    discussVote: "Discussione e Voto 1",
    discussVoteScript: "discussione pubblica e voto unico. Il piu votato viene eliminato.",
    discussionTimer: "Durata timer (secondi)",
    timerStart: "Avvia",
    timerPause: "Pausa",
    timerReset: "Reset",
    missingVotes: "Voti mancanti",
    tallyReceived: "Tally (Voti ricevuti)",
    noVotes: "nessun voto",
    closeDiscussionEliminate: "Chiudi discussione ed elimina il piu votato",
    execution: "Esecuzione",
    executionScript: "il linciato diventa fantasma e non rivela il ruolo.",
    lynched: "Linciato",
    assignBenvenuto: "Assegna Benvenuto",
    confirmAndNextNight: "Conferma e passa alla notte",
    gameEnded: "Partita conclusa",
    gameOverFallback: "Fine partita",
    protectedOff: "Protetta: OFF",
    protectedLock: "Protetta: LOCK",
    protectedOpen: "Protetta: OPEN",
    gameConsole: "Console partita",
    holdToUnlock: "Tieni premuto per sbloccare segreti",
    pasteExportJson: "Incolla JSON esportato.",
    setupNamesHint: "Inserisci un nome per riga (8-24 giocatori).",
    playerNames: "Nomi giocatori",
    playersCount: "{count} giocatori",
    protectedScreen: "Schermata protetta",
    lockTimeout: "Timeout blocco segreti",
    discussionTimerDefault: "Timer discussione default (secondi)",
    firstNightModCompat: "Prima notte: moderatore sbranato (compatibilità)",
    onOptIn: "ON (opt-in)",
    gameRulesSummary: "Regole {version}",
    phaseSummary: "{phase} · Notte {night} · Giorno {day}",
    dayAnnouncementDeaths: "Morti da annunciare",
    none: "nessuno",
    dayOpenEyes: "\"E giorno, aprite gli occhi\".",
    nightCloseEyes: "\"E notte, chiudete tutti gli occhi\".",
    startNewConfirm: "Tornare alla home? La partita resta salvata.",
    deleteGameConfirm: "Eliminare la partita?",
    importFailed: "Import fallito: {error}",
    genericError: "Errore: {error}",
    setupWarningsConfirm: "Avvisi setup:\n- {list}\n\nConfermare comunque?",
    playersRangeError: "Servono {min}-{max} giocatori.",
    invalidJson: "JSON non valido",
    missingVote1: "Mancano voti Voto 1: {names}",
    noLynchDeterminable: "Nessun linciato determinabile.",
    wolvesPickedHamster: "I lupi hanno scelto il Criceto Mannaro: nessuno sbranato.",
    guardProtected: "La Guardia protegge la vittima: nessuno sbranato.",
    seerSawHamster: "Il Veggente ha visto il Criceto: muore con lo sbranato.",
    winnerHamster: "Criceto Mannaro unico vincitore (vivo a fine partita).",
    winnerHumans: "Umani vincitori: tutti i lupi eliminati.",
    winnerWolves: "Lupi vincitori: parita numerica raggiunta.",
    mediumInfoScript: "Medium: responso sul linciato del turno precedente.",
    masonsScript: "Massoni (solo prima notte): si riconoscono.",
    bodyguardScript: "Guardia: sceglie protetto prima dei lupi (mai se stessa).",
    seerScript: "Veggente: scegli target e comunica si/no.",
    wolvesScript: "Lupi: scelgono vittima.",
    mythomaniacScript: "Mitomane: fase finale, copia solo Lupo o Veggente.",
    mediumNight2: "Medium (da notte 2)",
    bodyguardTarget: "Guardia target (da notte 2)",
    seerTarget: "Veggente target",
    wolvesTarget: "Lupi target",
    mythomaniacTarget: "Mitomane target (fine notte 2)",
    selectTarget: "Seleziona votato",
    nightLabel: "Notte {n}",
    dayLabel: "Giorno {n}",
    alive: "Vivo",
    dead: "Morto",
    ghost: "Fantasma",
    benvenuto: "Benvenuto",
    guideFullTitle: "Guida completa",
  },
  en: {
    title: "Nightflow | The Werewolf Engine",
    subtitle: "Moderator control room for Lupus in Tabula",
    setup: "New game",
    generate: "Generate setup",
    start: "Start game",
    archive: "Game archive",
    noArchive: "No saved games",
    phase: "Phase",
    phaseNight: "Night",
    phaseDay: "Day",
    phaseVote1: "Vote 1",
    phaseExecution: "Execution",
    phaseEnded: "Game ended",
    players: "Players",
    log: "Event log",
    undo: "Undo last step",
    export: "Export JSON",
    import: "Import JSON",
    guide: "Guide",
    themeSwitch: "Theme",
    themeMoonOps: "Moon Ops",
    themeBloodFog: "Blood & Fog",
    close: "Close",
    confirm: "Confirm",
    cancel: "Cancel",
    footerPrefix: "© 2026 | ",
    langItalian: "Italian",
    langEnglish: "English",
    gameTitleFallback: "Game",
    newGame: "New game",
    resume: "Resume",
    delete: "Delete",
    template: "Template",
    setupPreview: "Setup preview",
    composition: "Composition",
    warnings: "Warnings",
    noWarnings: "No warnings.",
    rerollRoles: "Reshuffle roles",
    role: "Role",
    roleAssign: "Role assignment",
    noOne: "None",
    auto: "Auto",
    script: "Script",
    nightActionsHidden: "Night actions hidden. Hold the unlock button.",
    protectedContent: "Protected content",
    nightNoActions: "No night actions to record this night.",
    moderatorNotes: "Moderator notes",
    resolveNight: "Resolve night",
    announceAndVote: "Confirm announcement and go to vote 1",
    discussVote: "Discussion and Vote 1",
    discussVoteScript: "public discussion and single vote. The most voted player is eliminated.",
    discussionTimer: "Timer duration (seconds)",
    timerStart: "Start",
    timerPause: "Pause",
    timerReset: "Reset",
    missingVotes: "Missing votes",
    tallyReceived: "Tally (Received votes)",
    noVotes: "no votes",
    closeDiscussionEliminate: "Close discussion and eliminate the most voted",
    execution: "Execution",
    executionScript: "the lynched player becomes a ghost and does not reveal the role.",
    lynched: "Lynched",
    assignBenvenuto: "Assign Benvenuto",
    confirmAndNextNight: "Confirm and go to next night",
    gameEnded: "Game ended",
    gameOverFallback: "Game over",
    protectedOff: "Protected: OFF",
    protectedLock: "Protected: LOCK",
    protectedOpen: "Protected: OPEN",
    gameConsole: "Game console",
    holdToUnlock: "Hold to unlock secrets",
    pasteExportJson: "Paste exported JSON.",
    setupNamesHint: "Enter one name per line (8-24 players).",
    playerNames: "Player names",
    playersCount: "{count} players",
    protectedScreen: "Protected screen",
    lockTimeout: "Secret lock timeout",
    discussionTimerDefault: "Default discussion timer (seconds)",
    firstNightModCompat: "First night: moderator killed (compatibility)",
    onOptIn: "ON (opt-in)",
    gameRulesSummary: "Rules {version}",
    phaseSummary: "{phase} · Night {night} · Day {day}",
    dayAnnouncementDeaths: "Deaths to announce",
    none: "none",
    dayOpenEyes: "\"It's day, open your eyes\".",
    nightCloseEyes: "\"It's night, close your eyes\".",
    startNewConfirm: "Return to home? The game will stay saved.",
    deleteGameConfirm: "Delete this game?",
    importFailed: "Import failed: {error}",
    genericError: "Error: {error}",
    setupWarningsConfirm: "Setup warnings:\n- {list}\n\nConfirm anyway?",
    playersRangeError: "Need {min}-{max} players.",
    invalidJson: "Invalid JSON",
    missingVote1: "Missing Vote 1 votes: {names}",
    noLynchDeterminable: "No lynched player can be determined.",
    wolvesPickedHamster: "Wolves chose the Werehamster: nobody is devoured.",
    guardProtected: "Bodyguard protected the victim: nobody is devoured.",
    seerSawHamster: "Seer saw the Werehamster: it dies with the devoured player.",
    winnerHamster: "Werehamster is the sole winner (alive at game end).",
    winnerHumans: "Humans win: all wolves eliminated.",
    winnerWolves: "Wolves win: numerical parity reached.",
    mediumInfoScript: "Medium: result about previous lynched player.",
    masonsScript: "Masons (first night only): recognize each other.",
    bodyguardScript: "Bodyguard: choose protected target before wolves (not self).",
    seerScript: "Seer: choose target and answer yes/no.",
    wolvesScript: "Wolves: choose victim.",
    mythomaniacScript: "Mythomaniac: end-of-second-night copy (Wolf or Seer only).",
    mediumNight2: "Medium (from night 2)",
    bodyguardTarget: "Bodyguard target (from night 2)",
    seerTarget: "Seer target",
    wolvesTarget: "Wolves target",
    mythomaniacTarget: "Mythomaniac target (end of night 2)",
    selectTarget: "Select voted player",
    nightLabel: "Night {n}",
    dayLabel: "Day {n}",
    alive: "Alive",
    dead: "Dead",
    ghost: "Ghost",
    benvenuto: "Benvenuto",
    guideFullTitle: "Complete Guide",
  },
};

const ROLE_DEFS = {
  villager: { id: "villager", name: "Villico", faction: "humans", min: 8, special: false, max: 12 },
  seer: { id: "seer", name: "Veggente", faction: "humans", min: 8, special: false, max: 1 },
  werewolf: { id: "werewolf", name: "Lupo Mannaro", faction: "wolves", min: 8, special: false, max: 3 },
  medium: { id: "medium", name: "Medium", faction: "humans", min: 9, special: true, max: 1 },
  possessed: { id: "possessed", name: "Indemoniato", faction: "humans", min: 10, special: true, max: 1 },
  bodyguard: { id: "bodyguard", name: "Guardia del corpo", faction: "humans", min: 11, special: true, max: 1 },
  mason: { id: "mason", name: "Massone", faction: "humans", min: 13, special: true, max: 2 },
  werehamster: { id: "werehamster", name: "Criceto mannaro", faction: "solo", min: 15, special: true, max: 1 },
  mythomaniac: { id: "mythomaniac", name: "Mitomane", faction: "humans", min: 16, special: true, max: 1 },
};

const DB = {
  db: null,
  mode: null,
  memory: {
    kv: new Map(),
    games: new Map(),
  },
  hasLocalStorage() {
    try {
      const k = "__cardux_test__";
      localStorage.setItem(k, "1");
      localStorage.removeItem(k);
      return true;
    } catch {
      return false;
    }
  },
  storageKey(store, key) {
    return `cardux:${store}:${key}`;
  },
  localPut(store, value) {
    const key = store === "kv" ? value.key : value.id;
    if (!key) return;
    if (this.hasLocalStorage()) {
      localStorage.setItem(this.storageKey(store, key), JSON.stringify(value));
      return;
    }
    this.memory[store].set(key, clone(value));
  },
  localGet(store, key) {
    if (this.hasLocalStorage()) {
      const raw = localStorage.getItem(this.storageKey(store, key));
      return raw ? JSON.parse(raw) : null;
    }
    return this.memory[store].get(key) ? clone(this.memory[store].get(key)) : null;
  },
  localGetAll(store) {
    if (this.hasLocalStorage()) {
      const prefix = `cardux:${store}:`;
      const out = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const k = localStorage.key(i);
        if (k && k.startsWith(prefix)) {
          const raw = localStorage.getItem(k);
          if (raw) out.push(JSON.parse(raw));
        }
      }
      return out;
    }
    return [...this.memory[store].values()].map((v) => clone(v));
  },
  localDel(store, key) {
    if (this.hasLocalStorage()) {
      localStorage.removeItem(this.storageKey(store, key));
      return;
    }
    this.memory[store].delete(key);
  },
  async open() {
    if (this.mode === "local") return null;
    if (this.db) return this.db;
    if (!("indexedDB" in window)) {
      this.mode = "local";
      return null;
    }
    try {
      this.db = await new Promise((resolve, reject) => {
        const req = indexedDB.open("cardux-db", 1);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains("kv")) db.createObjectStore("kv", { keyPath: "key" });
          if (!db.objectStoreNames.contains("games")) db.createObjectStore("games", { keyPath: "id" });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      this.mode = "idb";
      return this.db;
    } catch {
      this.mode = "local";
      return null;
    }
  },
  async get(store, key) {
    const db = await this.open();
    if (!db) return this.localGet(store, key);
    try {
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readonly");
        const req = tx.objectStore(store).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    } catch {
      this.mode = "local";
      return this.localGet(store, key);
    }
  },
  async put(store, value) {
    const db = await this.open();
    if (!db) {
      this.localPut(store, value);
      return;
    }
    try {
      await new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        tx.objectStore(store).put(value);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch {
      this.mode = "local";
      this.localPut(store, value);
    }
  },
  async getAll(store) {
    const db = await this.open();
    if (!db) return this.localGetAll(store);
    try {
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readonly");
        const req = tx.objectStore(store).getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
      });
    } catch {
      this.mode = "local";
      return this.localGetAll(store);
    }
  },
  async del(store, key) {
    const db = await this.open();
    if (!db) {
      this.localDel(store, key);
      return;
    }
    try {
      await new Promise((resolve, reject) => {
        const tx = db.transaction(store, "readwrite");
        tx.objectStore(store).delete(key);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch {
      this.mode = "local";
      this.localDel(store, key);
    }
  },
};

const state = {
  lang: "it",
  setup: {
    namesInput: "",
    protectedModeEnabled: false,
    firstNightModeratorKilledEnabled: false,
    lockTimeoutSec: 60,
    discussionTimerSec: DEFAULT_TIMER_SECONDS,
    selectedTemplateId: "recommended",
    themeId: "blood-fog",
  },
  setupPreview: null,
  game: null,
  archive: [],
  ui: {
    modal: null,
    importText: "",
    timerDuration: DEFAULT_TIMER_SECONDS,
    timerRemaining: DEFAULT_TIMER_SECONDS,
    timerRunning: false,
    timerHandle: null,
    unlockUntil: 0,
    longPressHandle: null,
    benvenutoAssignId: "",
  },
};

function currentThemeLabel() {
  return state.setup.themeId === "blood-fog" ? t("themeBloodFog") : t("themeMoonOps");
}

function themeIconMoon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.9 3.2a1 1 0 0 0-1.2 1.3 7.8 7.8 0 1 1-9.2 9.2 1 1 0 0 0-1.3 1.2A9.8 9.8 0 1 0 14.9 3.2Z"/></svg>`;
}

function themeIconBlood() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.5c-.7 0-1 .4-2.2 2-2 2.5-5.6 6.8-5.6 10.4a7.8 7.8 0 1 0 15.6 0c0-3.6-3.6-7.9-5.6-10.4-1.2-1.6-1.5-2-2.2-2Zm0 16.8a2.7 2.7 0 0 1-2.7-2.7 1 1 0 1 1 2 0 .7.7 0 1 0 1.4 0 1 1 0 1 1 2 0 2.7 2.7 0 0 1-2.7 2.7Z"/></svg>`;
}

function renderThemeToggleButton() {
  const isBlood = state.setup.themeId === "blood-fog";
  return `<button class="icon-btn-round" data-action="toggle-theme" aria-label="${t("themeSwitch")}: ${currentThemeLabel()}" title="${t("themeSwitch")}: ${currentThemeLabel()}">
    <span class="theme-icon-single ${isBlood ? "blood" : "moon"}" aria-hidden="true">
      ${isBlood ? themeIconBlood() : themeIconMoon()}
    </span>
  </button>`;
}

function applyTheme() {
  const themeId = THEME_IDS.includes(state.setup.themeId) ? state.setup.themeId : "blood-fog";
  state.setup.themeId = themeId;
  document.body.setAttribute("data-theme", themeId);
}

function t(key) {
  return I18N[state.lang]?.[key] || I18N.it[key] || key;
}

function tf(key, vars = {}) {
  let out = t(key);
  Object.entries(vars).forEach(([k, v]) => {
    out = out.replaceAll(`{${k}}`, String(v));
  });
  return out;
}

function uid() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isoNow() {
  return new Date().toISOString();
}

function clone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(input) {
  const div = document.createElement("div");
  div.textContent = String(input ?? "");
  return div.innerHTML;
}

function roleName(roleId) {
  const labels = {
    it: {
      villager: "Villico",
      seer: "Veggente",
      werewolf: "Lupo Mannaro",
      medium: "Medium",
      possessed: "Indemoniato",
      bodyguard: "Guardia del corpo",
      mason: "Massone",
      werehamster: "Criceto mannaro",
      mythomaniac: "Mitomane",
    },
    en: {
      villager: "Villager",
      seer: "Seer",
      werewolf: "Werewolf",
      medium: "Medium",
      possessed: "Possessed",
      bodyguard: "Bodyguard",
      mason: "Mason",
      werehamster: "Werehamster",
      mythomaniac: "Mythomaniac",
    },
  };
  return labels[state.lang]?.[roleId] || labels.it[roleId] || ROLE_DEFS[roleId]?.name || roleId;
}

function roleIconFallback(roleId) {
  const map = {
    villager: "V",
    seer: "S",
    werewolf: "W",
    medium: "M",
    possessed: "P",
    bodyguard: "B",
    mason: "Ma",
    werehamster: "Wh",
    mythomaniac: "My",
  };
  return map[roleId] || "?";
}

function roleIconHtml(roleId, size = "md") {
  return `<span class="role-icon role-icon-${roleId} role-icon-${size}" data-fallback="${escapeHtml(roleIconFallback(roleId))}" aria-hidden="true"></span>`;
}

function localizeGameTitle(title) {
  const raw = String(title || "").trim();
  if (!raw) return `${t("gameTitleFallback")} ${new Date().toLocaleString()}`;
  if (state.lang === "en" && raw.startsWith("Partita ")) return raw.replace(/^Partita\s+/u, "Game ");
  if (state.lang === "it" && raw.startsWith("Game ")) return raw.replace(/^Game\s+/u, "Partita ");
  return raw;
}

function getOutcomeText(outcome) {
  if (!outcome) return t("gameOverFallback");
  if (outcome.winner === "werehamster") return t("winnerHamster");
  if (outcome.winner === "humans") return t("winnerHumans");
  if (outcome.winner === "wolves") return t("winnerWolves");
  return outcome.text || t("gameOverFallback");
}

function canonicalRulesetVersion(rawVersion) {
  if (typeof rawVersion !== "string") return RULESET_VERSION;
  return rawVersion.trim() === RULESET_VERSION ? RULESET_VERSION : RULESET_VERSION;
}

function renderGuideContent() {
  if (state.lang === "en") {
    return `
    <h3>${t("guideFullTitle")}</h3>
    <p class="tiny">This guide summarizes flow, roles, powers, and timing in the current ruleset.</p>

    <h4>Objectives</h4>
    <ul>
      <li>Humans: eliminate all Werewolves.</li>
      <li>Werewolves: reach numerical parity with alive humans.</li>
      <li>Werehamster: win alone by staying alive at game end.</li>
    </ul>

    <h4>Turn flow in app</h4>
    <ol>
      <li>Night: moderator records night actions (specials, seer, wolves).</li>
      <li>Day: announce deaths and optionally pass Benvenuto.</li>
      <li>Discussion + single vote: each voter has one selector in table.</li>
      <li>Execution: highest-voted player is eliminated, becomes ghost, Benvenuto updates.</li>
    </ol>
    <p class="tiny">Tally = received votes for each player.</p>

    <h4>Ghost rules</h4>
    <ul>
      <li>They do not speak and do not reveal role.</li>
      <li>They close eyes at night and cannot use powers.</li>
      <li>In current flow they vote during the discussion vote.</li>
    </ul>

    <h4>Benvenuto (what it does)</h4>
    <ul>
      <li>Defines vote order start point (left of Benvenuto).</li>
      <li>Tie-break: closest clockwise to Benvenuto wins tie priority.</li>
      <li>If left on "Auto", app assigns Benvenuto to current dead/lynched player.</li>
    </ul>

    <h4>Base roles</h4>
    <ul>
      <li>${roleIconHtml("villager", "sm")} <strong>Villager</strong>: no power, human goal.</li>
      <li>${roleIconHtml("seer", "sm")} <strong>Seer</strong>: every night checks one target; moderator answers yes/no on wolf nature. Called even if ghost to avoid info leak.</li>
      <li>${roleIconHtml("werewolf", "sm")} <strong>Werewolf</strong>: at night wolves jointly choose one victim.</li>
    </ul>

    <h4>Special roles (timing and powers)</h4>
    <ul>
      <li>${roleIconHtml("medium", "sm")} <strong>Medium</strong> (9+): from night 2 gets info about previous lynched player (wolf yes/no).</li>
      <li>${roleIconHtml("possessed", "sm")} <strong>Possessed</strong> (10+): human aligned with wolves without knowing them; wins with wolves.</li>
      <li>${roleIconHtml("bodyguard", "sm")} <strong>Bodyguard</strong> (11+): from night 2 protects one target before wolves; cannot self-protect; if matches wolves target, nobody dies.</li>
      <li>${roleIconHtml("mason", "sm")} <strong>Masons</strong> (13+): two players who recognize each other only on first night; always as a pair.</li>
      <li>${roleIconHtml("werehamster", "sm")} <strong>Werehamster</strong> (15+): not in humans/wolves factions; cannot be devoured; if seen by Seer dies with devoured victim; if alive at game end wins alone.</li>
      <li>${roleIconHtml("mythomaniac", "sm")} <strong>Mythomaniac</strong> (16+): at end of second night copies role of an alive target only if target is Wolf or Seer; otherwise stays human.</li>
    </ul>

    <h4>Recommended setup</h4>
    <ul>
      <li>Base 8: 5 Villagers, 2 Wolves, 1 Seer.</li>
      <li>9+: Medium, 10+: Possessed, 11+: Bodyguard, 13+: Masons, 15+: Werehamster, 16+: Mythomaniac.</li>
      <li>At 16+ add third Wolf.</li>
      <li>Masons only as pair (0 or 2).</li>
    </ul>
  `;
  }
  return `
    <h3>${t("guideFullTitle")}</h3>
    <p class="tiny">Questa guida riassume la dinamica del gioco e il comportamento di ogni ruolo nel ruleset italiano.</p>

    <h4>Obiettivi</h4>
    <ul>
      <li>Umani: eliminare tutti i Lupi Mannari.</li>
      <li>Lupi Mannari: arrivare alla parita numerica con gli umani vivi.</li>
      <li>Criceto mannaro: vincere da solo restando vivo a fine partita.</li>
    </ul>

    <h4>Flusso di turno nell'app</h4>
    <ol>
      <li>Notte: il narratore registra azioni notturne (speciali, veggente, lupi).</li>
      <li>Giorno: annuncio morti e passaggio eventuale del Benvenuto.</li>
      <li>Discussione + voto unico: tutti i votanti hanno un selettore in tabella.</li>
      <li>Esecuzione: il piu votato viene eliminato, diventa fantasma, si aggiorna Benvenuto.</li>
    </ol>
    <p class="tiny">Tally = voti ricevuti da ciascun giocatore nel voto di discussione.</p>

    <h4>Regole Fantasmi</h4>
    <ul>
      <li>Non parlano e non rivelano il ruolo.</li>
      <li>Chiudono gli occhi di notte e non usano poteri.</li>
      <li>Nel flusso attuale votano nel voto di discussione.</li>
    </ul>

    <h4>Benvenuto (a cosa serve)</h4>
    <ul>
      <li>Definisce il punto di partenza dell'ordine votazione (si parte da sinistra del Benvenuto).</li>
      <li>Risoluzione pareggi: a parita vale chi e piu vicino al Benvenuto in senso orario.</li>
      <li>Se lasci "Auto", l'app assegna Benvenuto al morto/linciato del momento.</li>
    </ul>

    <h4>Ruoli base</h4>
    <ul>
      <li>${roleIconHtml("villager", "sm")} <strong>Villico</strong>: nessun potere, obiettivo umano.</li>
      <li>${roleIconHtml("seer", "sm")} <strong>Veggente</strong>: ogni notte indica un target; il narratore risponde si/no sulla natura lupesca (Lupo). La fase viene chiamata anche se e fantasma per non dare info.</li>
      <li>${roleIconHtml("werewolf", "sm")} <strong>Lupo Mannaro</strong>: di notte i lupi scelgono insieme una vittima.</li>
    </ul>

    <h4>Ruoli speciali (turno e poteri)</h4>
    <ul>
      <li>${roleIconHtml("medium", "sm")} <strong>Medium</strong> (9+): dalla seconda notte riceve il responso sul linciato del giorno prima (lupo si/no).</li>
      <li>${roleIconHtml("possessed", "sm")} <strong>Indemoniato</strong> (10+): umano che parteggia per i lupi, senza conoscerli; vince con i lupi.</li>
      <li>${roleIconHtml("bodyguard", "sm")} <strong>Guardia del corpo</strong> (11+): dalla seconda notte protegge un giocatore prima dei lupi; non puo proteggere se stesso; se coincide con la vittima lupi, nessuno sbranato.</li>
      <li>${roleIconHtml("mason", "sm")} <strong>Massoni</strong> (13+): due giocatori che si riconoscono solo la prima notte; devono essere sempre in coppia.</li>
      <li>${roleIconHtml("werehamster", "sm")} <strong>Criceto mannaro</strong> (15+): non appartiene a umani/lupi; non puo essere sbranato; se visto dal veggente muore con lo sbranato; se vivo a fine partita vince da solo.</li>
      <li>${roleIconHtml("mythomaniac", "sm")} <strong>Mitomane</strong> (16+): alla fine della seconda notte copia il ruolo di un vivo solo se e Lupo o Veggente, altrimenti resta umano normale.</li>
    </ul>

    <h4>Setup consigliato</h4>
    <ul>
      <li>Base 8: 5 Villici, 2 Lupi, 1 Veggente.</li>
      <li>9+: Medium, 10+: Indemoniato, 11+: Guardia, 13+: Massoni, 15+: Criceto, 16+: Mitomane.</li>
      <li>A 16+ si aggiunge il terzo Lupo.</li>
      <li>Massoni solo in coppia (0 o 2).</li>
    </ul>
  `;
}

function parseNames(input) {
  return input
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function formatTime(sec) {
  const s = Math.max(0, Number(sec) || 0);
  const mm = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const ss = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${mm}:${ss}`;
}

function isSecretLocked() {
  if (!state.game?.settings?.protectedModeEnabled) return false;
  return Date.now() > state.ui.unlockUntil;
}

function getPlayer(game, id) {
  return game.players.find((p) => p.id === id) || null;
}

function alivePlayers(game) {
  return game.players.filter((p) => p.status === "Alive");
}

function effectiveRoleId(player) {
  if (player.roleId === "mythomaniac" && player.copiedRoleId) return player.copiedRoleId;
  return player.roleId;
}

function isWolf(player) {
  return effectiveRoleId(player) === "werewolf";
}

function isMannaro(player) {
  const id = effectiveRoleId(player);
  return id === "werewolf" || id === "werehamster";
}

function clockwiseDistance(game, candidateId) {
  const total = game.players.length;
  const ben = getPlayer(game, game.benvenutoPlayerId) || game.players[0];
  const cand = getPlayer(game, candidateId);
  if (!ben || !cand) return Number.MAX_SAFE_INTEGER;
  return (cand.seatIndex - ben.seatIndex + total) % total;
}

function leftOrderFromBenvenuto(game) {
  const total = game.players.length;
  const ben = getPlayer(game, game.benvenutoPlayerId) || game.players[0];
  const from = (ben?.seatIndex ?? 0) + 1;
  return [...game.players].sort((a, b) => {
    const da = (a.seatIndex - from + total) % total;
    const db = (b.seatIndex - from + total) % total;
    return da - db;
  });
}

function phaseLabel(phase) {
  const map = {
    Night: t("phaseNight"),
    Day: t("phaseDay"),
    Vote1: t("phaseVote1"),
    Execution: t("phaseExecution"),
    Ended: t("phaseEnded"),
  };
  return map[phase] || phase;
}
function recommendedComposition(n) {
  const c = {
    villager: 0,
    seer: 1,
    werewolf: n >= 16 ? 3 : 2,
    medium: 0,
    possessed: 0,
    bodyguard: 0,
    mason: 0,
    werehamster: 0,
    mythomaniac: 0,
  };
  c.villager = n - c.seer - c.werewolf;
  const add = (roleId, count = 1) => {
    if (c.villager >= count) {
      c[roleId] += count;
      c.villager -= count;
    }
  };
  if (n >= 9) add("medium");
  if (n >= 10) add("possessed");
  if (n >= 11) add("bodyguard");
  if (n >= 13) add("mason", 2);
  if (n >= 15) add("werehamster");
  if (n >= 16) add("mythomaniac");
  return c;
}

function classicComposition(n) {
  const c = {
    villager: 0,
    seer: 1,
    werewolf: n >= 16 ? 3 : 2,
    medium: 0,
    possessed: 0,
    bodyguard: 0,
    mason: 0,
    werehamster: 0,
    mythomaniac: 0,
  };
  c.villager = n - c.seer - c.werewolf;
  if (n >= 9 && c.villager > 0) {
    c.medium = 1;
    c.villager -= 1;
  }
  return c;
}

function smoothComposition(n) {
  const c = clone(recommendedComposition(n));
  let specials = c.medium + c.possessed + c.bodyguard + c.mason + c.werehamster + c.mythomaniac;
  const limit = Math.max(2, Math.floor(n / 3));
  const reductionOrder = ["mythomaniac", "werehamster", "mason"];
  for (const roleId of reductionOrder) {
    while (specials > limit && c[roleId] > 0) {
      c[roleId] -= 1;
      c.villager += 1;
      specials -= 1;
    }
  }
  if (c.mason === 1) {
    c.mason = 0;
    c.villager += 1;
  }
  return c;
}

function compositionToDeck(comp) {
  const deck = [];
  Object.entries(comp).forEach(([roleId, count]) => {
    for (let i = 0; i < count; i += 1) deck.push(roleId);
  });
  return deck;
}

function compositionWarnings(comp, playerCount) {
  const warnings = [];
  const total = compositionToDeck(comp).length;
  if (total !== playerCount) warnings.push(state.lang === "en" ? `Roles ${total} differ from players ${playerCount}.` : `Ruoli ${total} diversi dai giocatori ${playerCount}.`);
  if (!(comp.mason === 0 || comp.mason === 2)) warnings.push(state.lang === "en" ? "Masons must be in pair (0 or 2)." : "Massoni non in coppia (0 o 2).");
  const specials = comp.medium + comp.possessed + comp.bodyguard + comp.mason + comp.werehamster + comp.mythomaniac;
  if (playerCount <= 10 && specials >= 4) warnings.push(state.lang === "en" ? "Too many special roles for this player count: risk of chaos/long turns." : "Troppi speciali per questo numero: rischio caos/tempi lunghi.");
  return warnings;
}

function setupOptions(playerCount) {
  const a = recommendedComposition(playerCount);
  const b = classicComposition(playerCount);
  const c = smoothComposition(playerCount);
  const labels = state.lang === "en"
    ? { recommended: "Recommended", classic: "Classic", smooth: "Balanced light" }
    : { recommended: "Consigliato", classic: "Classico", smooth: "Bilanciato leggero" };
  return [
    { id: "recommended", label: labels.recommended, composition: a, warnings: compositionWarnings(a, playerCount) },
    { id: "classic", label: labels.classic, composition: b, warnings: compositionWarnings(b, playerCount) },
    { id: "smooth", label: labels.smooth, composition: c, warnings: compositionWarnings(c, playerCount) },
  ];
}

function createPreview(names) {
  const options = setupOptions(names.length);
  const selected = options.find((o) => o.id === state.setup.selectedTemplateId) || options[0];
  const deck = shuffle(compositionToDeck(selected.composition));
  const assignments = names.map((name, idx) => ({ id: uid(), name, seatIndex: idx, roleId: deck[idx] || "villager" }));
  return {
    playerCount: names.length,
    options,
    chosenId: selected.id,
    assignments,
  };
}

function rerollPreview(preview) {
  const option = preview.options.find((o) => o.id === preview.chosenId) || preview.options[0];
  const deck = shuffle(compositionToDeck(option.composition));
  preview.assignments.forEach((a, idx) => {
    a.roleId = deck[idx] || "villager";
  });
}

function assignmentWarnings(assignments) {
  const comp = {
    villager: 0,
    seer: 0,
    werewolf: 0,
    medium: 0,
    possessed: 0,
    bodyguard: 0,
    mason: 0,
    werehamster: 0,
    mythomaniac: 0,
  };
  assignments.forEach((a) => {
    if (comp[a.roleId] !== undefined) comp[a.roleId] += 1;
  });
  return compositionWarnings(comp, assignments.length);
}

function freshNight() {
  return {
    guardTargetId: "",
    seerTargetId: "",
    seerSawWolf: null,
    wolfTargetId: "",
    mitomaniacTargetId: "",
    notes: "",
    pendingDeaths: [],
    outcomeText: "",
  };
}

function freshVote1() {
  return { votes: [], lynchedId: "" };
}

function createGameFromPreview(preview) {
  const players = preview.assignments.map((a) => ({
    id: a.id,
    name: a.name,
    roleId: a.roleId,
    copiedRoleId: null,
    status: "Alive",
    seatIndex: a.seatIndex,
    notes: "",
  }));

  const game = {
    id: uid(),
    title: `${t("gameTitleFallback")} ${new Date().toLocaleString()}`,
    createdAt: isoNow(),
    updatedAt: isoNow(),
    rulesetVersion: RULESET_VERSION,
    settings: {
      protectedModeEnabled: !!state.setup.protectedModeEnabled,
      firstNightModeratorKilledEnabled: !!state.setup.firstNightModeratorKilledEnabled,
      lockTimeoutSec: Number(state.setup.lockTimeoutSec) || 60,
      discussionTimerSec: Number(state.setup.discussionTimerSec) || DEFAULT_TIMER_SECONDS,
    },
    phase: "Night",
    counters: { nightNumber: 1, dayNumber: 0 },
    benvenutoPlayerId: players[0]?.id || "",
    players,
    current: {
      night: freshNight(),
      vote1: freshVote1(),
      lastLynchedWasWolf: null,
    },
    outcome: null,
    eventLog: [],
    undo: null,
  };

  pushEvent(game, "GameStarted", { playerCount: players.length, protected: game.settings.protectedModeEnabled });
  return game;
}

function normalizeGameSchema(game) {
  if (!game.current) game.current = {};
  if (!game.current.night) game.current.night = freshNight();
  if (!game.current.vote1) game.current.vote1 = freshVote1();
  if (!Array.isArray(game.current.vote1.votes)) game.current.vote1.votes = [];
  if (typeof game.current.vote1.lynchedId !== "string") game.current.vote1.lynchedId = "";

  if ((game.phase === "Clues" || game.phase === "Vote2") && !game.current.vote1.lynchedId) {
    game.phase = "Vote1";
  }

  if (!game.benvenutoPlayerId && game.players?.length) {
    game.benvenutoPlayerId = game.players[0].id;
  }
  if (Array.isArray(game.players)) {
    game.players.forEach((p) => {
      if (p.roleId === "owl") p.roleId = "villager";
      if (p.copiedRoleId === "owl") p.copiedRoleId = null;
    });
  }
  if (game.current?.night && Object.prototype.hasOwnProperty.call(game.current.night, "owlTargetId")) {
    delete game.current.night.owlTargetId;
  }
  game.rulesetVersion = canonicalRulesetVersion(game.rulesetVersion);
  if (typeof game.title === "string" && /docx/iu.test(game.title)) {
    game.title = game.title.replace(/docx/giu, "Consigliato");
  }
  if (game.outcome && typeof game.outcome === "object" && typeof game.outcome.winner === "string") {
    game.outcome.text = getOutcomeText(game.outcome);
  }

  return game;
}

function pushEvent(game, type, payload = {}) {
  game.eventLog.push({ id: uid(), type, timestamp: isoNow(), payload });
  game.updatedAt = isoNow();
}

async function persistSettings() {
  await DB.put("kv", {
    key: "settings",
    value: {
      lang: state.lang,
      protectedModeEnabled: state.setup.protectedModeEnabled,
      lockTimeoutSec: state.setup.lockTimeoutSec,
      discussionTimerSec: state.setup.discussionTimerSec,
      themeId: state.setup.themeId,
    },
  });
}

async function persistGame() {
  if (!state.game) return;
  state.game.rulesetVersion = canonicalRulesetVersion(state.game.rulesetVersion);
  await DB.put("games", state.game);
  await DB.put("kv", { key: "currentGameId", value: state.game.id });
  state.archive = (await DB.getAll("games")).map((g) => normalizeGameSchema(g));
  state.archive.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

async function loadInitialState() {
  const storedSettings = await DB.get("kv", "settings");
  if (storedSettings?.value) {
    state.lang = storedSettings.value.lang || "it";
    state.setup.protectedModeEnabled = !!storedSettings.value.protectedModeEnabled;
    state.setup.lockTimeoutSec = Number(storedSettings.value.lockTimeoutSec) || 60;
    state.setup.discussionTimerSec = Number(storedSettings.value.discussionTimerSec) || DEFAULT_TIMER_SECONDS;
    state.setup.themeId = THEME_IDS.includes(storedSettings.value.themeId) ? storedSettings.value.themeId : "blood-fog";
  }

  const current = await DB.get("kv", "currentGameId");
  if (current?.value) {
    const game = await DB.get("games", current.value);
    if (game) {
      state.game = normalizeGameSchema(game);
      state.ui.timerDuration = Number(game.settings.discussionTimerSec) || DEFAULT_TIMER_SECONDS;
      state.ui.timerRemaining = state.ui.timerDuration;
    }
  }

  state.archive = (await DB.getAll("games")).map((g) => normalizeGameSchema(g));
  state.archive.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function hasRole(game, roleId) {
  return game.players.some((p) => p.roleId === roleId);
}

function playerOfRole(game, roleId) {
  return game.players.find((p) => p.roleId === roleId) || null;
}
function compileNightScript(game) {
  const night = game.counters.nightNumber;
  const script = [];
  if (night >= 2 && hasRole(game, "medium")) script.push(t("mediumInfoScript"));
  if (night === 1 && game.players.filter((p) => p.roleId === "mason").length === 2) script.push(t("masonsScript"));
  if (night >= 2 && hasRole(game, "bodyguard")) script.push(t("bodyguardScript"));
  if (hasRole(game, "seer")) script.push(t("seerScript"));
  if (hasRole(game, "werewolf")) script.push(t("wolvesScript"));
  if (night === 2 && hasRole(game, "mythomaniac")) script.push(t("mythomaniacScript"));
  return script;
}

function tally(votes) {
  const m = new Map();
  votes.forEach((v) => m.set(v.targetId, (m.get(v.targetId) || 0) + 1));
  return m;
}

function sortByVoteAndTie(game, voteMap) {
  const arr = [...voteMap.entries()].map(([id, count]) => ({ id, count, dist: clockwiseDistance(game, id) }));
  arr.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.dist - b.dist;
  });
  return arr;
}

function vote1Voters(game) {
  return leftOrderFromBenvenuto(game).filter((p) => p.status !== "Dead");
}

function vote1Targets(game) {
  return game.players.filter((p) => p.status === "Alive");
}

function performWithUndo(type, payload, mutateFn) {
  if (!state.game) return;
  const before = clone(state.game);
  mutateFn(state.game);
  state.game.undo = { snapshot: before, label: type };
  pushEvent(state.game, type, payload);
  persistGame().then(render);
}

function resolveNight(game) {
  const night = game.current.night;
  const guardActive = game.counters.nightNumber >= 2 && hasRole(game, "bodyguard");
  const wolvesActive = hasRole(game, "werewolf");
  const seerActive = hasRole(game, "seer");

  night.pendingDeaths = [];
  night.outcomeText = "";

  if (seerActive && night.seerTargetId) {
    const target = getPlayer(game, night.seerTargetId);
    night.seerSawWolf = !!target && isWolf(target);
  } else {
    night.seerSawWolf = null;
  }

  let victimId = wolvesActive ? night.wolfTargetId : "";
  const victim = getPlayer(game, victimId);
  const guardTargetId = guardActive ? night.guardTargetId : "";

  if (!victim || victim.status !== "Alive") victimId = "";
  if (victimId) {
    if (victim.roleId === "werehamster") {
      victimId = "";
      night.outcomeText = t("wolvesPickedHamster");
    } else if (guardTargetId && guardTargetId === victimId) {
      victimId = "";
      night.outcomeText = t("guardProtected");
    }
  }

  if (victimId) night.pendingDeaths.push(victimId);

  const hamster = playerOfRole(game, "werehamster");
  if (hamster && hamster.status === "Alive" && night.seerTargetId === hamster.id && victimId && victimId !== hamster.id) {
    night.pendingDeaths.push(hamster.id);
    night.outcomeText = `${night.outcomeText} ${t("seerSawHamster")}`;
  }

  const mito = playerOfRole(game, "mythomaniac");
  if (mito && mito.status === "Alive" && game.counters.nightNumber === 2 && night.mitomaniacTargetId) {
    const target = getPlayer(game, night.mitomaniacTargetId);
    const targetRole = target ? effectiveRoleId(target) : "";
    if (targetRole === "seer" || targetRole === "werewolf") {
      mito.copiedRoleId = targetRole;
      night.outcomeText = state.lang === "en"
        ? `${night.outcomeText} Mythomaniac copies ${roleName(targetRole)}.`
        : `${night.outcomeText} Mitomane copia ${roleName(targetRole)}.`;
    } else {
      mito.copiedRoleId = null;
      night.outcomeText = state.lang === "en"
        ? `${night.outcomeText} Mythomaniac stays human.`
        : `${night.outcomeText} Mitomane resta umano.`;
    }
  }

  night.pendingDeaths = [...new Set(night.pendingDeaths)];
  night.pendingDeaths.forEach((id) => {
    const p = getPlayer(game, id);
    if (p && p.status === "Alive") p.status = "Dead";
  });

  game.phase = "Day";
  game.counters.dayNumber = game.counters.nightNumber;
}

function announceDay(game, benvenutoId) {
  const deadNow = game.players.filter((p) => p.status === "Dead");
  deadNow.forEach((p) => {
    p.status = "Ghost";
  });
  if (benvenutoId && getPlayer(game, benvenutoId)) game.benvenutoPlayerId = benvenutoId;
  else if (deadNow[0]) game.benvenutoPlayerId = deadNow[0].id;
  game.phase = "Vote1";
}

function closeVote1(game) {
  const voters = vote1Voters(game);
  const votesByVoter = new Map(game.current.vote1.votes.map((v) => [v.voterId, v.targetId]));
  const missingVoters = voters.filter((v) => !votesByVoter.get(v.id));
  if (missingVoters.length > 0) {
    throw new Error(tf("missingVote1", { names: missingVoters.map((p) => p.name).join(", ") }));
  }

  const normalizedVotes = voters.map((v) => ({ voterId: v.id, targetId: votesByVoter.get(v.id) }));
  const ranked = sortByVoteAndTie(game, tally(normalizedVotes));
  const lynchedId = ranked[0]?.id || "";
  if (!lynchedId) throw new Error(t("noLynchDeterminable"));

  game.current.vote1.votes = normalizedVotes;
  game.current.vote1.lynchedId = lynchedId;
  const victim = getPlayer(game, lynchedId);
  if (victim && victim.status === "Alive") victim.status = "Dead";
  game.phase = "Execution";
}

function checkWin(game) {
  const alive = alivePlayers(game);
  const wolves = alive.filter((p) => isWolf(p)).length;
  const humans = alive.length - wolves;
  const hamster = playerOfRole(game, "werehamster");
  const hamsterAlive = hamster && hamster.status === "Alive";

  if (wolves === 0) {
    game.outcome = hamsterAlive
      ? { winner: "werehamster", text: t("winnerHamster") }
      : { winner: "humans", text: t("winnerHumans") };
    game.phase = "Ended";
    return;
  }

  if (wolves >= humans) {
    game.outcome = hamsterAlive
      ? { winner: "werehamster", text: t("winnerHamster") }
      : { winner: "wolves", text: t("winnerWolves") };
    game.phase = "Ended";
  }
}

function confirmExecution(game, benvenutoId) {
  const lynchedId = game.current.vote1.lynchedId;
  const p = getPlayer(game, lynchedId);
  if (p && p.status === "Dead") p.status = "Ghost";

  game.benvenutoPlayerId = benvenutoId && getPlayer(game, benvenutoId) ? benvenutoId : lynchedId;

  const role = p ? effectiveRoleId(p) : "";
  game.current.lastLynchedWasWolf = role === "werewolf";

  checkWin(game);
  if (game.phase === "Ended") return;

  game.counters.nightNumber += 1;
  game.phase = "Night";
  game.current.night = freshNight();
  game.current.vote1 = freshVote1();
}

function resetTimerState() {
  clearTimer();
  const s = Number(state.ui.timerDuration) || DEFAULT_TIMER_SECONDS;
  state.ui.timerRemaining = s;
}

function startTimer() {
  if (state.ui.timerRunning) return;
  state.ui.timerRunning = true;
  state.ui.timerHandle = setInterval(() => {
    state.ui.timerRemaining -= 1;
    if (state.ui.timerRemaining <= 0) {
      state.ui.timerRemaining = 0;
      clearTimer();
    }
    render();
  }, 1000);
}

function clearTimer() {
  if (state.ui.timerHandle) clearInterval(state.ui.timerHandle);
  state.ui.timerHandle = null;
  state.ui.timerRunning = false;
}

function unlockSecrets() {
  if (!state.game?.settings?.protectedModeEnabled) return;
  const sec = Number(state.game.settings.lockTimeoutSec) || 60;
  state.ui.unlockUntil = Date.now() + sec * 1000;
  render();
}

function setNested(obj, path, value) {
  const parts = path.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(cur, parts[i])) cur[parts[i]] = {};
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
}

function parseFieldValue(raw) {
  if (raw === "true") return true;
  if (raw === "false") return false;
  return raw;
}

function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function updateSetupPlayerCount() {
  const el = document.getElementById("setup-player-count");
  if (!el) return;
  const count = parseNames(state.setup.namesInput).length;
  el.textContent = tf("playersCount", { count });
}

function compositionRows(comp) {
  return Object.entries(comp)
    .filter(([, c]) => c > 0)
    .map(([id, c]) => `<div class="row tight"><span class="role-inline">${roleIconHtml(id, "sm")}${roleName(id)}</span><strong>x${c}</strong></div>`)
    .join("");
}

function renderSetupView() {
  const names = parseNames(state.setup.namesInput);
  const count = names.length;
  const preview = state.setupPreview;
  const selectedOption = preview?.options.find((o) => o.id === preview?.chosenId);

  return `
    <div class="layout">
      <section class="card">
        <h2>${t("setup")}</h2>
        <p>${t("setupNamesHint")}</p>
        <div class="field">
          <label>${t("playerNames")}</label>
          <textarea class="input" rows="8" data-field="namesInput" placeholder="Alice&#10;Bob&#10;Carla">${escapeHtml(state.setup.namesInput)}</textarea>
          <div id="setup-player-count" class="tiny">${tf("playersCount", { count })}</div>
        </div>
        <div class="grid two">
          <div class="field">
            <label>${t("protectedScreen")}</label>
            <select data-field="protectedModeEnabled">
              <option value="false" ${state.setup.protectedModeEnabled ? "" : "selected"}>OFF</option>
              <option value="true" ${state.setup.protectedModeEnabled ? "selected" : ""}>${t("onOptIn")}</option>
            </select>
          </div>
          <div class="field">
            <label>${t("lockTimeout")}</label>
            <select data-field="lockTimeoutSec">
              <option value="30" ${Number(state.setup.lockTimeoutSec) === 30 ? "selected" : ""}>30s</option>
              <option value="60" ${Number(state.setup.lockTimeoutSec) === 60 ? "selected" : ""}>60s</option>
              <option value="300" ${Number(state.setup.lockTimeoutSec) === 300 ? "selected" : ""}>300s</option>
            </select>
          </div>
          <div class="field">
            <label>${t("discussionTimerDefault")}</label>
            <input class="input" type="number" min="30" max="3600" step="30" value="${Number(state.setup.discussionTimerSec)}" data-field="discussionTimerSec" />
          </div>
          <div class="field">
            <label>${t("firstNightModCompat")}</label>
            <select data-field="firstNightModeratorKilledEnabled">
              <option value="false" ${state.setup.firstNightModeratorKilledEnabled ? "" : "selected"}>OFF</option>
              <option value="true" ${state.setup.firstNightModeratorKilledEnabled ? "selected" : ""}>ON</option>
            </select>
          </div>
        </div>
        <div class="btn-row">
          <button class="primary" data-action="generate-setup">${t("generate")}</button>
          <button data-action="open-import">${t("import")}</button>
        </div>
      </section>

      <section class="card">
        <h3>${t("archive")}</h3>
        ${
          state.archive.length === 0
            ? `<p class="muted">${t("noArchive")}</p>`
            : `<div class="archive-list">
                ${state.archive
                  .map(
                    (g) => `<div class="row">
                      <div class="stack">
                        <strong>${escapeHtml(g.title || t("gameTitleFallback"))}</strong>
                        <span class="tiny">${formatDate(g.updatedAt)} · ${phaseLabel(g.phase)}</span>
                      </div>
                      <div class="btn-row">
                        <button data-action="resume-game" data-game-id="${g.id}">${t("resume")}</button>
                        <button data-action="export-game" data-game-id="${g.id}">${t("export")}</button>
                        <button class="danger" data-action="delete-game" data-game-id="${g.id}">${t("delete")}</button>
                      </div>
                    </div>`,
                  )
                  .join("")}
              </div>`
        }
      </section>

      ${
        preview
          ? `<section class="card">
              <h3>${t("setupPreview")}</h3>
              <div class="field">
                <label>${t("template")}</label>
                <select data-field="selectedTemplateId">
                  ${preview.options
                    .map((o) => `<option value="${o.id}" ${preview.chosenId === o.id ? "selected" : ""}>${o.label}</option>`)
                    .join("")}
                </select>
              </div>
              ${
                selectedOption
                  ? `<div class="grid two">
                      <div>
                        <p class="summary"><strong>${t("composition")}</strong></p>
                        <div class="role-list">${compositionRows(selectedOption.composition)}</div>
                      </div>
                      <div>
                        <p class="summary"><strong>${t("warnings")}</strong></p>
                        ${
                          selectedOption.warnings.length
                            ? selectedOption.warnings.map((w) => `<div class="warning tiny">${escapeHtml(w)}</div>`).join("")
                            : `<p class="tiny ok">${t("noWarnings")}</p>`
                        }
                      </div>
                    </div>`
                  : ""
              }
              <div class="btn-row" style="margin-top:.8rem">
                <button data-action="reroll-roles">${t("rerollRoles")}</button>
              </div>
              <div class="player-list" style="margin-top:.8rem">
                ${preview.assignments
                  .sort((a, b) => a.seatIndex - b.seatIndex)
                  .map(
                    (a) => `<div class="row">
                      <strong class="role-inline">${roleIconHtml(a.roleId, "sm")}${a.seatIndex + 1}. ${escapeHtml(a.name)}</strong>
                      <select data-action="change-assignment-role" data-player-id="${a.id}">
                        ${Object.values(ROLE_DEFS)
                          .map((r) => `<option value="${r.id}" ${a.roleId === r.id ? "selected" : ""}>${roleName(r.id)}</option>`)
                          .join("")}
                      </select>
                    </div>`,
                  )
                  .join("")}
              </div>
              <div class="btn-row" style="margin-top:1rem">
                <button class="primary" data-action="start-game">${t("start")}</button>
              </div>
            </section>`
          : ""
      }
    </div>
  `;
}

function renderNight(game) {
  if (isSecretLocked()) {
    return `<div class="hidden-secret"><strong>${t("protectedContent")}</strong><p>${t("nightActionsHidden")}</p></div>`;
  }

  const nightNumber = game.counters.nightNumber;
  const script = compileNightScript(game);
  const alive = alivePlayers(game);
  const n = game.current.night;
  const optionList = (selectedId, list) =>
    list
      .map((p) => `<option value="${p.id}" ${selectedId === p.id ? "selected" : ""}>${escapeHtml(p.name)}</option>`)
      .join("");
  const noSelfGuardList = alive.filter((p) => p.roleId !== "bodyguard");
  const mediumText = game.current.lastLynchedWasWolf === null ? "N/A" : game.current.lastLynchedWasWolf ? (state.lang === "en" ? "YES" : "SI") : "NO";

  const roleFields = [];
  if (hasRole(game, "medium") && nightNumber >= 2) {
    roleFields.push(`<div class="field"><label>${t("mediumNight2")}</label><input class="input" value="${mediumText}" disabled /></div>`);
  }
  if (hasRole(game, "bodyguard") && nightNumber >= 2) {
    roleFields.push(
      `<div class="field"><label>${t("bodyguardTarget")}</label><select data-field="night.guardTargetId"><option value="">${t("noOne")}</option>${optionList(n.guardTargetId, noSelfGuardList)}</select></div>`,
    );
  }
  if (hasRole(game, "seer")) {
    roleFields.push(
      `<div class="field"><label>${t("seerTarget")}</label><select data-field="night.seerTargetId"><option value="">${t("noOne")}</option>${optionList(n.seerTargetId, alive)}</select></div>`,
    );
  }
  if (hasRole(game, "werewolf")) {
    roleFields.push(
      `<div class="field"><label>${t("wolvesTarget")}</label><select data-field="night.wolfTargetId"><option value="">${t("noOne")}</option>${optionList(n.wolfTargetId, alive)}</select></div>`,
    );
  }
  if (hasRole(game, "mythomaniac") && nightNumber === 2) {
    roleFields.push(
      `<div class="field"><label>${t("mythomaniacTarget")}</label><select data-field="night.mitomaniacTargetId"><option value="">${t("noOne")}</option>${optionList(n.mitomaniacTargetId, alive)}</select></div>`,
    );
  }

  return `
    <div class="phase-box">
      <h3>${tf("nightLabel", { n: game.counters.nightNumber })}</h3>
      <p><strong>${t("script")}:</strong> ${t("nightCloseEyes")}</p>
      <div class="stack tiny">${script.map((s) => `<div class="summary">${escapeHtml(s)}</div>`).join("")}</div>
    </div>

    <div class="grid two" style="margin-top:.8rem">
      ${roleFields.join("") || `<div class="tiny muted">${t("nightNoActions")}</div>`}
    </div>

    <div class="field"><label>${t("moderatorNotes")}</label><textarea class="input" rows="2" data-field="night.notes">${escapeHtml(game.current.night.notes || "")}</textarea></div>
    <div class="btn-row"><button class="primary" data-action="resolve-night">${t("resolveNight")}</button></div>
  `;
}

function renderDay(game) {
  const dead = game.players.filter((p) => p.status === "Dead");
  const opts = dead
    .map((p) => `<option value="${p.id}" ${state.ui.benvenutoAssignId === p.id ? "selected" : ""}>${escapeHtml(p.name)}</option>`)
    .join("");
  return `
    <div class="phase-box">
      <h3>${tf("dayLabel", { n: game.counters.dayNumber })}</h3>
      <p><strong>${t("script")}:</strong> ${t("dayOpenEyes")}</p>
      <p class="tiny">${t("dayAnnouncementDeaths")}: ${dead.length ? dead.map((d) => escapeHtml(d.name)).join(", ") : t("none")}.</p>
      <p class="tiny">${escapeHtml(game.current.night.outcomeText || "")}</p>
    </div>
    <div class="field"><label>${t("assignBenvenuto")}</label><select data-field="ui.benvenutoAssignId"><option value="" ${!state.ui.benvenutoAssignId ? "selected" : ""}>${t("auto")}</option>${opts}</select></div>
    <div class="btn-row"><button class="primary" data-action="announce-day">${t("announceAndVote")}</button></div>
  `;
}

function renderVote1(game) {
  const voters = vote1Voters(game);
  const targets = vote1Targets(game);
  const votesMap = new Map(game.current.vote1.votes.map((v) => [v.voterId, v.targetId]));
  const filledVotes = game.current.vote1.votes.filter((v) => v.targetId);
  const tall = tally(filledVotes);
  const ratio = state.ui.timerDuration > 0 ? (state.ui.timerRemaining / state.ui.timerDuration) * 100 : 0;
  const remaining = voters.filter((v) => !votesMap.get(v.id)).length;

  return `
    <div class="phase-box">
      <h3>${t("discussVote")}</h3>
      <p><strong>${t("script")}:</strong> ${t("discussVoteScript")}</p>
    </div>

    <div class="card" style="margin-top:.8rem">
      <div class="field"><label>${t("discussionTimer")}</label><input class="input" type="number" min="30" max="3600" step="30" data-field="ui.timerDuration" value="${state.ui.timerDuration}" /></div>
      <div class="timer">${formatTime(state.ui.timerRemaining)}</div>
      <div class="timer-bar"><div class="timer-fill" style="width:${Math.max(0, Math.min(100, ratio))}%"></div></div>
      <div class="btn-row" style="margin-top:.6rem"><button data-action="timer-start">${t("timerStart")}</button><button data-action="timer-pause">${t("timerPause")}</button><button data-action="timer-reset">${t("timerReset")}</button></div>
    </div>

    <div class="vote-list" style="margin-top:.8rem">
      ${voters
        .map((voter, i) => {
          const selectedTargetId = votesMap.get(voter.id) || "";
          return `<div class="row">
            <span><strong>${i + 1}. ${escapeHtml(voter.name)}</strong></span>
            <select data-action="set-vote1-target" data-voter-id="${voter.id}">
              <option value="">${t("selectTarget")}</option>
              ${targets
                .map(
                  (target) =>
                    `<option value="${target.id}" ${selectedTargetId === target.id ? "selected" : ""}>${escapeHtml(target.name)}</option>`,
                )
                .join("")}
            </select>
          </div>`;
        })
        .join("")}
    </div>

    <div class="tiny">${t("missingVotes")}: ${remaining}</div>
    <div class="tiny">${t("tallyReceived")}: ${[...tall.entries()].map(([id, c]) => `${escapeHtml(getPlayer(game, id)?.name || id)}:${c}`).join(" · ") || t("noVotes")}</div>
    <div class="btn-row" style="margin-top:.8rem"><button class="primary" data-action="close-vote1">${t("closeDiscussionEliminate")}</button></div>
  `;
}

function renderExecution(game) {
  const lynched = getPlayer(game, game.current.vote1.lynchedId);
  const opts = game.players
    .filter((p) => p.status !== "Dead")
    .map((p) => `<option value="${p.id}" ${state.ui.benvenutoAssignId === p.id ? "selected" : ""}>${escapeHtml(p.name)}</option>`)
    .join("");
  return `
    <div class="phase-box">
      <h3>${t("execution")}</h3>
      <p><strong>${t("script")}:</strong> ${t("executionScript")}</p>
      <p>${t("lynched")}: <strong>${escapeHtml(lynched?.name || "-")}</strong></p>
    </div>
    <div class="field"><label>${t("assignBenvenuto")}</label><select data-field="ui.benvenutoAssignId"><option value="${lynched?.id || ""}" ${!state.ui.benvenutoAssignId || state.ui.benvenutoAssignId === lynched?.id ? "selected" : ""}>${escapeHtml(lynched?.name || t("auto"))}</option>${opts}</select></div>
    <div class="btn-row"><button class="primary" data-action="confirm-execution">${t("confirmAndNextNight")}</button></div>
  `;
}

function renderEnded(game) {
  return `
    <div class="phase-box">
      <h3>${t("gameEnded")}</h3>
      <p>${escapeHtml(getOutcomeText(game.outcome))}</p>
    </div>
    <div class="btn-row" style="margin-top:.8rem"><button data-action="back-home">${t("newGame")}</button></div>
  `;
}

function renderNarrative(game) {
  if (game.phase === "Night") return renderNight(game);
  if (game.phase === "Day") return renderDay(game);
  if (game.phase === "Vote1") return renderVote1(game);
  if (game.phase === "Execution") return renderExecution(game);
  return renderEnded(game);
}

function renderPlayersPanel(game) {
  const locked = isSecretLocked();
  const players = [...game.players].sort((a, b) => a.seatIndex - b.seatIndex);
  return `
    <section class="card">
      <h3>${t("players")}</h3>
      <div class="player-list">
        ${players
          .map((p) => {
            const roleText = locked ? "?" : roleName(effectiveRoleId(p));
            const roleIcon = locked
              ? `<span class="role-icon role-icon-generic role-icon-sm" data-fallback="?" aria-hidden="true"></span>`
              : roleIconHtml(effectiveRoleId(p), "sm");
            const statusText = p.status === "Alive" ? t("alive") : p.status === "Dead" ? t("dead") : t("ghost");
            const statusClass = p.status.toLowerCase();
            const ben = game.benvenutoPlayerId === p.id ? `<span class="badge benvenuto">${t("benvenuto")}</span>` : "";
            return `<div class="row">
              <div class="stack">
                <strong class="role-inline">${roleIcon}${p.seatIndex + 1}. ${escapeHtml(p.name)}</strong>
                <span class="tiny">${t("role")}: ${escapeHtml(roleText)}</span>
              </div>
              <div class="stack" style="align-items:flex-end">
                <span class="badge ${statusClass}">${statusText}</span>
                ${ben}
              </div>
            </div>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderLogPanel(game) {
  const locked = isSecretLocked();
  return `
    <section class="card">
      <h3>${t("log")}</h3>
      ${
        locked
          ? `<div class="hidden-secret">${t("protectedContent")}</div>`
          : `<div class="log-list">${[...game.eventLog]
              .reverse()
              .slice(0, 25)
              .map((e) => `<div class="row tight"><div class="stack"><strong>${escapeHtml(e.type)}</strong><span class="tiny">${formatDate(e.timestamp)}</span></div></div>`)
              .join("")}</div>`
      }
      <div class="btn-row" style="margin-top:.8rem">
        <button data-action="export-current">${t("export")}</button>
        <button class="warn" data-action="undo-last">${t("undo")}</button>
      </div>
    </section>
  `;
}

function renderGameView() {
  const game = state.game;
  const displayTitle = localizeGameTitle(game.title);
  const displayRulesVersion = canonicalRulesetVersion(game.rulesetVersion);
  const lockTag = game.settings.protectedModeEnabled
    ? isSecretLocked()
      ? `<span class="tag">${t("protectedLock")}</span>`
      : `<span class="tag">${t("protectedOpen")}</span>`
    : `<span class="tag">${t("protectedOff")}</span>`;

  return `
    <div class="layout game-layout">
      <section class="card">
        <h2>${t("gameConsole")}</h2>
        <p class="tiny">${escapeHtml(displayTitle)} · ${tf("gameRulesSummary", { version: escapeHtml(displayRulesVersion) })}</p>
        <p class="tiny">${t("phase")}: <strong>${tf("phaseSummary", { phase: phaseLabel(game.phase), night: game.counters.nightNumber, day: game.counters.dayNumber })}</strong></p>
        <div style="margin-top:.8rem">${renderNarrative(game)}</div>
      </section>
      <div class="layout">${renderPlayersPanel(game)}${renderLogPanel(game)}</div>
    </div>

    ${game.settings.protectedModeEnabled ? `<div class="floating"><button class="primary" id="unlock-btn">${t("holdToUnlock")}</button></div>` : ""}

    <div class="btn-row" style="margin-top:.8rem">${lockTag}<button data-action="back-home">${t("newGame")}</button></div>
  `;
}

function renderModal() {
  if (state.ui.modal === "guide") {
    return `
      <div class="dialog">
        <div class="dialog-panel guide-panel">
          ${renderGuideContent()}
          <div class="btn-row" style="margin-top:.8rem">
            <button class="primary" data-action="close-modal">${t("close")}</button>
          </div>
        </div>
      </div>
    `;
  }

  if (state.ui.modal === "import") {
    return `
      <div class="dialog">
        <div class="dialog-panel">
          <h3>${t("import")}</h3>
          <p class="tiny">${t("pasteExportJson")}</p>
          <textarea class="input" rows="10" data-field="ui.importText">${escapeHtml(state.ui.importText)}</textarea>
          <div class="btn-row" style="margin-top:.8rem">
            <button class="primary" data-action="confirm-import">${t("confirm")}</button>
            <button data-action="close-modal">${t("cancel")}</button>
          </div>
        </div>
      </div>
    `;
  }
  return "";
}

function render() {
  applyTheme();
  const root = document.getElementById("app");
  if (!root) return;

  root.innerHTML = `
    <div class="shell">
      <header class="topbar">
        <div class="topbar-grid">
          <div><h1>${t("title")}</h1><div class="tiny">${t("subtitle")} · v${APP_VERSION}</div></div>
          <div class="btn-row">
            ${renderThemeToggleButton()}
            <button data-action="open-guide">${t("guide")}</button>
            <button data-action="change-lang" data-lang="it" ${state.lang === "it" ? 'class="primary"' : ""}>${t("langItalian")}</button>
            <button data-action="change-lang" data-lang="en" ${state.lang === "en" ? 'class="primary"' : ""}>${t("langEnglish")}</button>
          </div>
        </div>
      </header>

      ${state.game ? renderGameView() : renderSetupView()}

      <footer class="footer">${t("footerPrefix")}<a href="https://cardux.it" target="_blank" rel="noopener noreferrer">cardux.it</a></footer>
    </div>
    ${renderModal()}
  `;

  const unlockBtn = document.getElementById("unlock-btn");
  if (unlockBtn) {
    const clear = () => {
      if (state.ui.longPressHandle) clearTimeout(state.ui.longPressHandle);
      state.ui.longPressHandle = null;
    };
    unlockBtn.addEventListener("pointerdown", () => {
      state.ui.longPressHandle = setTimeout(unlockSecrets, LONG_PRESS_MS);
    });
    unlockBtn.addEventListener("pointerup", clear);
    unlockBtn.addEventListener("pointerleave", clear);
    unlockBtn.addEventListener("pointercancel", clear);
  }
}

async function handleAction(action, el) {
  if (action === "open-guide") {
    state.ui.modal = "guide";
    render();
    return;
  }

  if (action === "toggle-theme") {
    state.setup.themeId = state.setup.themeId === "moon-ops" ? "blood-fog" : "moon-ops";
    applyTheme();
    await persistSettings();
    render();
    return;
  }

  if (action === "change-lang") {
    state.lang = el.dataset.lang || "it";
    if (state.setupPreview) {
      const count = state.setupPreview.assignments.length;
      state.setupPreview.options = setupOptions(count);
      if (!state.setupPreview.options.find((o) => o.id === state.setupPreview.chosenId)) {
        state.setupPreview.chosenId = state.setupPreview.options[0]?.id || "recommended";
      }
    }
    await persistSettings();
    render();
    return;
  }

  if (action === "generate-setup") {
    const names = parseNames(state.setup.namesInput);
    if (names.length < MIN_PLAYERS || names.length > MAX_PLAYERS) {
      alert(tf("playersRangeError", { min: MIN_PLAYERS, max: MAX_PLAYERS }));
      return;
    }
    state.setupPreview = createPreview(names);
    render();
    return;
  }

  if (action === "reroll-roles") {
    if (!state.setupPreview) return;
    rerollPreview(state.setupPreview);
    render();
    return;
  }

  if (action === "change-assignment-role") {
    if (!state.setupPreview) return;
    const p = state.setupPreview.assignments.find((a) => a.id === el.dataset.playerId);
    if (p) p.roleId = el.value;
    render();
    return;
  }

  if (action === "start-game") {
    if (!state.setupPreview) return;
    const warnings = assignmentWarnings(state.setupPreview.assignments);
    if (warnings.length) {
      const ok = window.confirm(tf("setupWarningsConfirm", { list: warnings.join("\n- ") }));
      if (!ok) return;
    }
    state.game = createGameFromPreview(state.setupPreview);
    state.setupPreview = null;
    state.ui.timerDuration = Number(state.game.settings.discussionTimerSec) || DEFAULT_TIMER_SECONDS;
    state.ui.timerRemaining = state.ui.timerDuration;
    await persistGame();
    await persistSettings();
    render();
    return;
  }

  if (action === "resolve-night") {
    performWithUndo("NightResolved", { night: state.game.counters.nightNumber }, (g) => {
      resolveNight(g);
      checkWin(g);
    });
    const firstDead = state.game.players.find((p) => p.status === "Dead");
    state.ui.benvenutoAssignId = firstDead?.id || "";
    return;
  }

  if (action === "announce-day") {
    const benvenutoChoice = state.ui.benvenutoAssignId || "";
    performWithUndo("DayAnnounced", { day: state.game.counters.dayNumber }, (g) => announceDay(g, benvenutoChoice));
    state.ui.benvenutoAssignId = "";
    return;
  }

  if (action === "set-vote1-target") {
    const voterId = el.dataset.voterId;
    const targetId = el.value;
    if (!voterId) return;
    const arr = state.game.current.vote1.votes;
    const idx = arr.findIndex((v) => v.voterId === voterId);
    if (idx >= 0) arr[idx] = { voterId, targetId: targetId || "" };
    else arr.push({ voterId, targetId });
    await persistGame();
    render();
    return;
  }

  if (action === "close-vote1") {
    try {
      performWithUndo("Vote1Closed", {}, (g) => closeVote1(g));
      state.ui.benvenutoAssignId = state.game.current.vote1.lynchedId || "";
    } catch (err) {
      alert(err.message);
    }
    return;
  }


  if (action === "confirm-execution") {
    try {
      const benvenutoChoice = state.ui.benvenutoAssignId || "";
      performWithUndo("ExecutionConfirmed", {}, (g) => confirmExecution(g, benvenutoChoice));
      state.ui.benvenutoAssignId = "";
    } catch (err) {
      alert(err.message);
    }
    return;
  }

  if (action === "undo-last") {
    if (!state.game?.undo?.snapshot) return;
    state.game = state.game.undo.snapshot;
    state.game.undo = null;
    await persistGame();
    render();
    return;
  }

  if (action === "resume-game") {
    const gameId = el.dataset.gameId;
    const g = await DB.get("games", gameId);
    if (!g) return;
    state.game = normalizeGameSchema(g);
    state.ui.timerDuration = Number(g.settings.discussionTimerSec) || DEFAULT_TIMER_SECONDS;
    state.ui.timerRemaining = state.ui.timerDuration;
    await DB.put("kv", { key: "currentGameId", value: g.id });
    render();
    return;
  }

  if (action === "delete-game") {
    const gameId = el.dataset.gameId;
    if (!window.confirm(t("deleteGameConfirm"))) return;
    if (state.game?.id === gameId) {
      state.game = null;
      await DB.put("kv", { key: "currentGameId", value: null });
    }
    await DB.del("games", gameId);
    state.archive = (await DB.getAll("games")).map((g) => normalizeGameSchema(g));
    state.archive.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    render();
    return;
  }

  if (action === "export-game") {
    const g = await DB.get("games", el.dataset.gameId);
    if (g) downloadJson(g, `cardux-${g.id}.json`);
    return;
  }

  if (action === "export-current") {
    if (state.game) downloadJson(state.game, `cardux-${state.game.id}.json`);
    return;
  }

  if (action === "open-import") {
    state.ui.modal = "import";
    state.ui.importText = "";
    render();
    return;
  }

  if (action === "close-modal") {
    state.ui.modal = null;
    state.ui.importText = "";
    render();
    return;
  }

  if (action === "confirm-import") {
    try {
      const parsed = JSON.parse(state.ui.importText);
      if (!parsed?.id || !Array.isArray(parsed.players)) throw new Error(t("invalidJson"));
      normalizeGameSchema(parsed);
      parsed.updatedAt = isoNow();
      await DB.put("games", parsed);
      state.archive = (await DB.getAll("games")).map((g) => normalizeGameSchema(g));
      state.archive.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      state.ui.modal = null;
      state.ui.importText = "";
      render();
    } catch (err) {
      alert(tf("importFailed", { error: err.message }));
    }
    return;
  }

  if (action === "back-home") {
    if (state.game && !window.confirm(t("startNewConfirm"))) return;
    state.game = null;
    state.ui.benvenutoAssignId = "";
    clearTimer();
    await DB.put("kv", { key: "currentGameId", value: null });
    render();
    return;
  }

  if (action === "timer-start") {
    startTimer();
    return;
  }
  if (action === "timer-pause") {
    clearTimer();
    render();
    return;
  }
  if (action === "timer-reset") {
    resetTimerState();
    render();
    return;
  }
}

function bindEvents() {
  document.addEventListener("click", (evt) => {
    if (state.ui.modal === "guide" && evt.target instanceof Element && evt.target.classList.contains("dialog")) {
      state.ui.modal = null;
      render();
      return;
    }

    const el = evt.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;
    // Dropdown actions must be handled only on "change" to avoid immediate re-render on open.
    if (action === "change-assignment-role" || action === "set-vote1-target") return;
    handleAction(action, el).catch((err) => {
      console.error(err);
      alert(tf("genericError", { error: err.message }));
    });
  });

  document.addEventListener("change", async (evt) => {
    const el = evt.target;
    if (!el?.matches("[data-field], [data-action='change-assignment-role'], [data-action='set-vote1-target']")) return;

    if (el.dataset.action === "change-assignment-role") {
      await handleAction("change-assignment-role", el);
      return;
    }

    if (el.dataset.action === "set-vote1-target") {
      await handleAction("set-vote1-target", el);
      return;
    }

    const field = el.dataset.field;
    if (!field) return;
    let value = parseFieldValue(el.value);
    if (el.type === "number") value = Number(el.value);

    if (field.startsWith("ui.")) {
      setNested(state, field, value);
      if (field === "ui.timerDuration" && !state.ui.timerRunning) {
        state.ui.timerRemaining = Number(value) || DEFAULT_TIMER_SECONDS;
      }
      render();
      return;
    }

    if (field.startsWith("night.") && state.game) {
      state.game.current.night[field.split(".")[1]] = value || "";
      await persistGame();
      render();
      return;
    }

    if (Object.prototype.hasOwnProperty.call(state.setup, field)) {
      state.setup[field] = value;
      if (field === "selectedTemplateId" && state.setupPreview) {
        state.setupPreview.chosenId = value;
        rerollPreview(state.setupPreview);
      }
      await persistSettings();
      render();
      return;
    }
  });

  document.addEventListener("input", async (evt) => {
    const el = evt.target;
    if (!el?.matches("[data-field]")) return;
    const field = el.dataset.field;
    if (!field) return;

    if (field === "namesInput") {
      state.setup.namesInput = el.value;
      updateSetupPlayerCount();
      return;
    }

    if (field === "night.notes" && state.game) {
      state.game.current.night.notes = el.value;
      await persistGame();
      return;
    }

    if (field === "ui.importText") {
      state.ui.importText = el.value;
    }
  });
}

async function registerSW() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol === "file:") return;
  try {
    await navigator.serviceWorker.register("./sw.js");
  } catch (err) {
    console.error(err);
  }
}

function initRoleIcons() {
  const img = new Image();
  img.onload = () => document.body.classList.add("role-icons-ready");
  img.onerror = () => document.body.classList.remove("role-icons-ready");
  img.src = "./assets/roles/villager.png";
}

async function init() {
  bindEvents();
  initRoleIcons();
  try {
    await loadInitialState();
  } catch (err) {
    console.error("Storage init failed, app running in fallback mode:", err);
  }
  try {
    await registerSW();
  } catch (err) {
    console.error("SW registration skipped:", err);
  }
  applyTheme();
  render();
}

init().catch((err) => {
  console.error(err);
});

