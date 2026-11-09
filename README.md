# Portfolio accademico bilingue (IT / EN)

Sito moderno e responsive, in HTML/CSS/JavaScript puro, **senza framework né installazioni**. Funziona su GitHub Pages.

## 1. Prova il sito

Apri `index.html` con un browser. Puoi anche usare l'estensione **Live Server** in Visual Studio Code per visualizzare ogni modifica senza ricaricare manualmente.

## 2. Personalizzazione (checklist)

Tutti i contenuti sono **esempi**: modifica ciò che serve prima della pubblicazione.

- [ ] **Nome e cognome:** in `index.html`, sostituisci `Nome Cognome` (e le iniziali `NC`); sostituisci anche il titolo IT e EN in `script.js` nella funzione `setLanguage`.
- [ ] **Presentazione, traduzioni e pulsanti:** cambia le stringhe italiane e inglesi nell'oggetto `translations` di `script.js`.
- [ ] **Sede e affiliazione:** cambia i valori nelle sezioni `#about` di `index.html`.
- [ ] **Email:** sostituisci `nome.cognome@example.com` in `index.html` (sia nel testo sia negli attributi `mailto:`).
- [ ] **Link:** sostituisci `USERNAME` in tutti gli indirizzi GitHub e LinkedIn; sostituisci l'ORCID provvisorio.
- [ ] **Progetti:** personalizza titoli e descrizioni bilingui in `script.js`; aggiorna i link dei progetti in `index.html`.
- [ ] **Pubblicazioni:** modifica anni e URL DOI in `index.html`; modifica titoli/autori e relativi testi bilingui in `script.js`. Elimina gli esempi che non servono e l'avviso segnaposto.
- [ ] **Foto:** sostituisci `assets/avatar.svg` con una tua immagine (per esempio `assets/foto.jpg`) e aggiorna il percorso dell'immagine in `index.html` e il suo testo `alt`.
- [ ] **Favicon:** cambia `assets/favicon.svg` se vuoi un logo personale.
- [ ] **CV:** aggiungi il tuo PDF come `cv/CV.pdf` e rimuovi le due righe finali in `script.js` che intercettano il clic sul CV (vedi sotto).
- [ ] **Metadati:** aggiorna `<title>`, la descrizione e i meta tag Open Graph in `index.html` e i valori della funzione `setLanguage` in `script.js`.
- [ ] **Colori:** modifica le variabili CSS nella sezione `Editorial visual refinement` di `style.css`, per entrambi i temi.
- [ ] **Luogo di lavoro / affiliazione / progetti:** verifica la correttezza dei dati e rimuovi tutto ciò che non vuoi rendere pubblico.

### CV: passaggio importante

Il pacchetto **non contiene un CV inventato**. Finché non aggiungi il vero file, il pulsante mostra un messaggio. Dopo aver copiato il tuo PDF in `cv/CV.pdf`, cerca e **rimuovi** da `script.js` il seguente codice:

```js
cvLink.addEventListener('click', event => { event.preventDefault(); window.alert(document.documentElement.lang === 'it' ? 'Aggiungi prima il tuo CV in cv/CV.pdf (vedi README).' : 'Please add your CV at cv/CV.pdf first (see README).'); });
```

Puoi anche eliminare `const cvLink = document.getElementById('cv-link');`.

## 3. Pubblicazione gratuita su GitHub Pages

1. Crea un account su https://github.com/ se non lo hai già.
2. Crea un repository pubblico chiamato **`TUOUSERNAME.github.io`** (sostituisci con il tuo username GitHub reale).
3. Carica nella **radice** del repository i file `index.html`, `style.css`, `script.js`, `.nojekyll`, `README.md` e le cartelle `assets` e `cv` (non la cartella esterna `academic-site`). In GitHub puoi usare **Add file → Upload files**. Il file nascosto `.nojekyll` può essere aggiunto manualmente se il sistema non lo mostra.
4. Apri **Settings → Pages → Build and deployment**.
5. Seleziona **Deploy from a branch**, branch **main**, cartella **/(root)**, quindi **Save**.
6. Visita `https://TUOUSERNAME.github.io/` dopo la pubblicazione (potrebbero servire alcuni minuti).

Se usi invece un repository con un nome qualsiasi, l'indirizzo sarà in genere `https://TUOUSERNAME.github.io/NOME-REPOSITORY/`. Il sito usa collegamenti relativi e funziona anche in questo caso.

Guida ufficiale: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 4. Modifiche successive

Modifica localmente i file e carica le versioni aggiornate sullo stesso repository. GitHub Pages pubblica le nuove modifiche automaticamente.

## 5. Caratteristiche

- Layout responsive (desktop, tablet, smartphone).
- Cambio lingua IT / EN con preferenza memorizzata nel browser.
- Tema chiaro / scuro con preferenza memorizzata.
- Navigazione per sezioni e menu mobile.
- Animazioni leggere rispettose delle preferenze di accessibilità.
- Nessun database, framework o server richiesto.
- Google Fonts facoltativi: se non disponibili, si usano i font di sistema. Per funzionare *senza internet* la grafica rimane comunque leggibile.

## 6. Note importanti

Questo progetto è un modello da completare. Non pubblicare i contenuti segnaposto, link non verificati o dati personali non destinati al pubblico. GitHub Pages è hosting statico: il pulsante per inviare email apre il programma di posta dell'utente e non include un form con backend.

**Licenza:** puoi utilizzare e modificare liberamente questo modello per il tuo sito personale.


## Aspetto editoriale e grafo Research / Editorial style and Research graph

- Colori più sobri, foto ridotta e meno elementi decorativi; tutti i contenuti originali sono mantenuti.
- La sezione **Research Interests** ora presenta una rete interattiva di punti collegati. Trascina i nodi, selezionali con mouse o tastiera, oppure usa il pulsante di ripristino.
- Per cambiare le connessioni modifica `graphNodes` e `graphEdges` in `script.js`. I tre temi principali usano le traduzioni `research1Title`, `research2Title`, `research3Title` e le rispettive descrizioni.
- Per modificare palette e dimensioni, cerca `Editorial visual refinement` in `style.css`.
- La grafica non richiede librerie esterne. Con `prefers-reduced-motion` attivo, la rete rimane statica e utilizzabile.
- Le regole CSS sono disposte con una proprietà per riga e commenti per gruppi logici. HTML e JavaScript includono commenti descrittivi per le principali sezioni e operazioni.

The graph is a lightweight interactive SVG network with draggable nodes, keyboard selection and bilingual descriptions. Customize its nodes and edges in `script.js`.
