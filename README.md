# Nightflow | The Werewolf Engine

Web app mobile-first per moderare partite di **Lupus in Tabula**.

## Avvio locale

Serve un server statico (PWA/service worker non funziona su `file://`).

Esempi:

- `python -m http.server 5173`
- `npx serve .`
- doppio click su `avvia-app.bat`

Poi apri `http://localhost:5173`.

Nota: ora l'app si apre anche con doppio click su `index.html` (modalita fallback storage), ma installazione PWA e cache offline completa richiedono comunque `http://localhost` o hosting HTTPS.

## Cosa include in questa release

- Setup partita 8-24 giocatori con suggerimenti:
  - `Consigliato`
  - `Classico`
  - `Bilanciato leggero`
- Override manuale ruoli per ogni giocatore
- Flusso guidato:
  - Notte
  - Giorno
  - Voto 1
  - Esecuzione
- Votazione giorno in tabella completa:
  - un selettore per ogni votante
  - tally in tempo reale (`Voti ricevuti`)
  - eliminazione diretta del piu votato (niente indizi/voto 2)
- Bottone `Guida` sempre accessibile in topbar con regolamento dettagliato (flusso + ruoli)
- Regole chiave implementate:
  - Guardia no self e protezione vittima
  - Fantasmi votano solo al voto 1
  - Tie-break vicino al Benvenuto (senso orario)
  - Criceto mannaro (non sbranabile + interazione Veggente)
  - Mitomane (fine notte 2)
  - Condizioni vittoria (Umani/Lupi/Criceto unico vincitore)
- Event log + undo ultimo step
- Archivio partite locale (IndexedDB)
- Export/Import JSON
- PWA installabile
- Schermata protetta opt-in con unlock via long-press
- Footer: `© 2026 | cardux.it` (link solo su `cardux.it`)

## Note

- App single-user (solo moderatore).
- Nessun backend/cloud: tutti i dati restano locali sul dispositivo/browser.
