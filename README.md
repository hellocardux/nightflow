# Nightflow | The Werewolf Engine 🐺🌙

<div align="center">
  <img src="assets/cover/nightflow-cover.png" alt="Nightflow Cover" width="100%">
  <br><br>
  <img src="icons/icon.svg" alt="App Icon" width="64">
</div>

**Nightflow** è un'applicazione web mobile-first pensata per agire come **Assistente Moderatore** nelle partite dal vivo del noto party-game a ruoli nascosti (stile *Lupus in Tabula* o *Werewolf*).

Il progetto nasce con l'obiettivo di snellire drasticamente il lavoro del narratore (moderatore) eliminando carta, penna e confusione durante le delicate fasi notturne, garantendo precisione nel tally dei voti e nell'applicazione delle regole speciali.

---

## 🚀 Caratteristiche Principali

*   **PWA Installabile e 100% Offline**: L'intera app è lato client. Una volta installata, può funzionare in luoghi senza connessione internet (cantine, boschi, baite). Non c'è un backend e nessun dato viene inviato su server remoti.
*   **Gestione Flusso Guidato**: Modera automaticamente i passaggi da Notte a Giorno, dal Voto all'Esecuzione. Prompts a schermo aiutano il narratore a non dimenticare le chiamate dei ruoli ("Veggente svegliati", "Lupi scegliete").
*   **Ruoli e Regole Integrate**: Supporta pienamente interazioni complesse (es. la Guardia che non può auto-proteggersi, il Criceto Mannaro immune ai Lupi, il Mitomane).
*   **Sistema di Tallying**: Una comoda matrice per raccogliere rapidamente il voto di ogni giocatore vivo durante l'arringa diurna per l'esecuzione.
*   **Archivio Partite e Storage Triplo**: IndexedDB locale per l'archiviazione a lungo termine, con graceful fallback a localStorage o In-Memory. Permette anche Import/Export via JSON.
*   **i18n (IT / EN)**: Completamente localizzata in Italiano e Inglese.
*   **Privacy & "Screen Lock"**: Modalità protetta attivabile dal Master (via long-press) per nascondere i dati sensibili dello schermo da occhi indiscreti durante la notte.

## 📦 Installazione e Hosting

Nightflow è progettata come applicazione serverless e statica (HTML/JS/CSS puri). Può essere hostata ovunque e servita semplicemente.

### Su GitHub Pages (Consigliato)

1. Vai su **Settings > Pages** del repository su GitHub.
2. Sotto **Build and deployment**, seleziona \Deploy from a branch\.
3. Scegli il branch \main\ e la root \/\, poi salva.
4. Visita l'URL generato. Dal browser mobile (Chrome/Safari) ti verrà proposto di installarla nella Home ("Aggiungi a schermata Home").

### Uso Locale

Dato che i Service Worker richiedono HTTPS o \localhost\, non aprire semplicemente \index.html\. Usa un server HTTP locale:

\\\ash
# Con Python
python -m http.server 5173

# O con Node/npx
npx serve .
\\\

Poi apri \http://localhost:5173\. L'app include un file \vvia-app.bat\ per Windows che automatizza questo passaggio via Python.

## 🛠️ Stack Tecnologico

Questo progetto adotta deliberatamente un approccio **Zero-Build, Vanilla JS** molto leggero.

*   **Unico JavaScript** (\pp.js\): Nessun framework tipo React, Vue o Svelte. L'intera logica (stato interno, rendering DOM, regole e traduzioni) vive all'interno di un unico file altamente strutturato.
*   **Vanilla CSS** (\styles.css\): Zero preprocessori o Tailwind. Solo le moderne custom properties e Grid/Flexbox per un layout rigorosamente mobile-first.

## 🎭 Ruoli Supportati (Ruleset V1 IT)

*   **Umani Base**: Villager (Villico), Seer (Veggente).
*   **Lupi Base**: Werewolf (Lupo Mannaro).
*   **Ruoli Speciali**:
    *   **Bodyguard** (Guardia del Corpo): Protegge una vittima prima dei lupi (non se stesso).
    *   **Masons** (Massoni): Si riconoscono nella prima notte.
    *   **Medium** (Medium): Scopre l'allineamento del linciato del giorno prima.
    *   **Possessed** (Indemoniato): Umano allineato per la vittoria con i lupi.
    *   **Mythomaniac** (Mitomane): Copia il ruolo a fine Notte 2. Diventa Lupo/Veggente solo se il bersaglio lo è, altrimenti resta umano.
    *   **Werehamster** (Criceto Mannaro): Fazione solitaria: Immune ai Lupi, ma muore di colpo se il Veggente lo ispeziona. Vince da solo a fine partita.

## 🤝 Contribuzione

Feedback, pull requests per nuove feature, fix a bug sfuggenti nel ruleset o aggiunte di nuovi ruoli sono benvenuti. Se volete estendere i ruoli, la modifica si applica principalmente in \pp.js\ estendendo l'oggetto \ROLE_DEFS\ e la logica della fase Notte (\
esolveNight\).

---
Un progetto meta-ludico di *Massimo Cardolicchio* - © 2026

