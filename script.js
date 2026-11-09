/* PERSONALIZZAZIONE: i testi IT/EN sono definiti qui sotto.
   Per nome, email, collegamenti, pubblicazioni e progetti modifica index.html.
*/
const translations = {
  it: {
    skip:"Vai al contenuto",
    navAbout:"Chi sono",
    navResearch:"Ricerca",
    navProjects:"Progetti",
    navPublications:"Pubblicazioni",
    navContact:"Contatti",
    eyebrow:"Portfolio accademico · Disponibile per collaborazioni",
    hello:"Ciao, sono",
    role:"Ricerca · Statistica · Data Science",
    heroDescription:"Studio come trasformare dati complessi in conoscenza affidabile, combinando metodi statistici, machine learning e ricerca interdisciplinare.",
    explore:"Esplora la ricerca",
    downloadCV:"Scarica il CV",
    chipOne:"Curiosità e metodo",
    chipTwo:"Dati → conoscenza",
    scroll:"Scopri di più",
    aboutTitle:"Un po' di me<span class='accent'>.</span>",
    aboutLead:"Un approccio rigoroso, aperto e interdisciplinare.",
    aboutP1:"Sono un ricercatore interessato all'analisi dei dati e allo sviluppo di metodi quantitativi per affrontare problemi reali.",
    aboutP2:"Il mio lavoro si colloca all'intersezione tra statistica, machine learning e applicazioni scientifiche. Mi piace costruire strumenti riproducibili, collaborare e comunicare risultati in modo chiaro.",
    getInTouch:"Parliamone",
    factLocation:"Sede",
    factArea:"Ambiti",
    factAreaValue:"Statistica · AI · Ricerca",
    factAffiliation:"Affiliazione",
    factAffiliationValue:"Università / Centro di ricerca",
    factEmail:"Email",
    networkHint:"Esplora le connessioni: trascina i punti o seleziona un interesse.",
    networkReset:"Ripristina disposizione",
    researchTitle:"Interessi di ricerca<span class='accent'>.</span>",
    researchLead:"Domande concrete, strumenti quantitativi e risultati riproducibili.",
    research1Title:"Statistica & inferenza",
    research1Description:"Modelli statistici, disegno degli studi e analisi rigorose dell'incertezza.",
    research2Title:"Machine learning",
    research2Description:"Metodi predittivi, interpretabilità e valutazione robusta dei modelli.",
    research3Title:"Applicazioni scientifiche",
    research3Description:"Integrazione dei dati e metodologie riproducibili per la ricerca.",
    projectsTitle:"Progetti selezionati<span class='accent'>.</span>",
    projectsLead:"Una selezione di idee, strumenti e collaborazioni.",
    projectType1:"Software · Open source",
    project1Title:"Progetto di analisi dati",
    project1Description:"Una pipeline riproducibile per elaborare, analizzare e visualizzare dati complessi.",
    projectType2:"Ricerca · Metodologia",
    project2Title:"Metodi statistici applicati",
    project2Description:"Sviluppo e confronto di approcci quantitativi su problemi di ricerca.",
    projectType3:"Applicazioni · Visualizzazione",
    project3Title:"Dashboard interattiva",
    project3Description:"Un'interfaccia intuitiva per esplorare i risultati e supportare le decisioni.",
    viewProject:"Vedi il progetto",
    publicationsTitle:"Pubblicazioni<span class='accent'>.</span>",
    publicationsLead:"Articoli e lavori: sostituisci gli esempi con le tue citazioni reali.",
    pubLabel1:"Articolo · esempio",
    pubLabel2:"Preprint · esempio",
    pub1Title:"Titolo della tua pubblicazione scientifica",
    pub1Authors:"Nome Cognome, Coautore A, Coautore B · Rivista / Conferenza",
    pub2Title:"Un secondo lavoro o preprint",
    pub2Authors:"Nome Cognome, Coautore C · Repository / Rivista",
    pubNote:"Queste pubblicazioni sono segnaposto: sostituiscile prima di pubblicare il sito.",
    contactTitle:"Costruiamo qualcosa <em>insieme.</em>",
    contactDescription:"Hai un'idea di ricerca, una proposta di collaborazione o semplicemente una domanda? Scrivimi.",
    writeEmail:"Scrivimi un'email",
    footer:"Creato con cura, pubblicato con GitHub Pages.",
    backTop:"Torna su"
  },
  en: {
    skip:"Skip to content",
    navAbout:"About",
    navResearch:"Research",
    navProjects:"Projects",
    navPublications:"Publications",
    navContact:"Contact",
    eyebrow:"Academic portfolio · Open to collaborations",
    hello:"Hello, I'm",
    role:"Research · Statistics · Data Science",
    heroDescription:"I explore how to turn complex data into reliable knowledge by combining statistical methods, machine learning and interdisciplinary research.",
    explore:"Explore research",
    downloadCV:"Download CV",
    chipOne:"Curiosity & rigour",
    chipTwo:"Data → knowledge",
    scroll:"Explore more",
    aboutTitle:"A little about me<span class='accent'>.</span>",
    aboutLead:"A rigorous, open and interdisciplinary approach.",
    aboutP1:"I am a researcher interested in data analysis and the development of quantitative methods to address real-world problems.",
    aboutP2:"My work lies at the intersection of statistics, machine learning and scientific applications. I enjoy building reproducible tools, collaborating and communicating findings clearly.",
    getInTouch:"Let's connect",
    factLocation:"Based in",
    factArea:"Fields",
    factAreaValue:"Statistics · AI · Research",
    factAffiliation:"Affiliation",
    factAffiliationValue:"University / Research Centre",
    factEmail:"Email",
    networkHint:"Explore connections: drag nodes or select a research interest.",
    networkReset:"Reset layout",
    researchTitle:"Research interests<span class='accent'>.</span>",
    researchLead:"Real questions, quantitative tools, reproducible results.",
    research1Title:"Statistics & inference",
    research1Description:"Statistical models, study design and rigorous uncertainty analysis.",
    research2Title:"Machine learning",
    research2Description:"Predictive methods, interpretability and robust model evaluation.",
    research3Title:"Scientific applications",
    research3Description:"Data integration and reproducible methods for research.",
    projectsTitle:"Selected projects<span class='accent'>.</span>",
    projectsLead:"A selection of ideas, tools and collaborations.",
    projectType1:"Software · Open source",
    project1Title:"Data analysis project",
    project1Description:"A reproducible pipeline for processing, analysing and visualising complex data.",
    projectType2:"Research · Methods",
    project2Title:"Applied statistical methods",
    project2Description:"Developing and comparing quantitative approaches to research challenges.",
    projectType3:"Applications · Visualisation",
    project3Title:"Interactive dashboard",
    project3Description:"An intuitive interface to explore results and support decision-making.",
    viewProject:"View project",
    publicationsTitle:"Publications<span class='accent'>.</span>",
    publicationsLead:"Papers and preprints: replace these examples with your actual citations.",
    pubLabel1:"Article · example",
    pubLabel2:"Preprint · example",
    pub1Title:"Title of your scientific publication",
    pub1Authors:"Name Surname, Coauthor A, Coauthor B · Journal / Conference",
    pub2Title:"Another paper or preprint",
    pub2Authors:"Name Surname, Coauthor C · Repository / Journal",
    pubNote:"These publications are placeholders: replace them before publishing.",
    contactTitle:"Let's build something <em>together.</em>",
    contactDescription:"Have a research idea, collaboration proposal or simply a question? Feel free to get in touch.",
    writeEmail:"Send me an email",
    footer:"Crafted with care, published with GitHub Pages.",
    backTop:"Back to top"
  }
};
/* Site controls: references to the original navigation, theme, and language elements. */
const languageButton = document.getElementById('language-toggle'); // Language switch button.
const languageLabel = document.getElementById('language-label'); // Displays the next available language.
const themeButton = document.getElementById('theme-toggle'); // Light/dark toggle button.
const themeIcon = document.getElementById('theme-icon'); // Current theme icon.
const menuButton = document.querySelector('.menu-toggle'); // Mobile navigation button.
const nav = document.querySelector('.site-nav'); // Main navigation links.

/* Change translated page content and preserve the visitor's selection. */
function setLanguage(lang) {
  const dictionary = translations[lang]; // Select the requested translation dictionary.
  document.querySelectorAll('[data-i18n]').forEach(node => { // Update each translatable element.
    const key = node.dataset.i18n; // Find its translation identifier.
    if (!(key in dictionary)) return; // Skip elements without a translation.
    node.innerHTML = dictionary[key]; // Render locally authored translated text and intended markup.
  });
  document.documentElement.lang = lang; // Keep the HTML language correct for screen readers.
  languageLabel.textContent = lang === 'it' ? 'EN' : 'IT'; // Show the other language.
  document.title = lang === 'it' ? 'Nome Cognome · Ricerca & Dati' : 'Name Surname · Research & Data'; // Translate the browser tab.
  const description = document.querySelector('meta[name="description"]'); // Locate the page description.
  description.content = lang === 'it' ? 'Sito personale accademico: ricerca, progetti, pubblicazioni e contatti.' : 'Academic portfolio: research, projects, publications and contact.'; // Translate search metadata.
  refreshResearchGraphLabels(); // Translate graph labels if the graph has been initialized.
  try {
    localStorage.setItem('site-language', lang); // Remember the language locally.
  } catch (_) {
    // Continue without local storage when access is restricted.
  }
}

/* Switch colour palettes and remember the selected theme. */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme; // Apply the selected CSS palette.
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾'; // Show an appropriate theme symbol.
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'); // Explain the theme action.
  try {
    localStorage.setItem('site-theme', theme); // Remember the theme locally.
  } catch (_) {
    // Continue without local storage when access is restricted.
  }
}

/* Restore saved user preferences, falling back to Italian and light mode. */
let savedLang = 'it'; // Default language.
let savedTheme = 'light'; // Default colour theme.
try {
  savedLang = localStorage.getItem('site-language') || 'it'; // Read previously saved language.
  savedTheme = localStorage.getItem('site-theme') || 'light'; // Read previously saved theme.
} catch (_) {
  // Keep the defaults if browser storage is unavailable.
}
setLanguage(savedLang === 'en' ? 'en' : 'it'); // Apply the initial language.
setTheme(savedTheme === 'dark' ? 'dark' : 'light'); // Apply the initial theme.

/* Wire the existing header controls without changing their behaviour. */
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'it' ? 'en' : 'it')); // Toggle between Italian and English.
themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark')); // Toggle light/dark mode.
menuButton.addEventListener('click', () => { // Open or close mobile navigation.
  const isOpen = nav.classList.toggle('open'); // Update menu visibility.
  menuButton.setAttribute('aria-expanded', String(isOpen)); // Keep the accessible state in sync.
  menuButton.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu'); // Update screen-reader label.
});
nav.querySelectorAll('a').forEach(link => { // Close mobile navigation after selecting a destination.
  link.addEventListener('click', () => {
    nav.classList.remove('open'); // Hide the navigation menu.
    menuButton.setAttribute('aria-expanded', 'false'); // Reset the accessible expanded state.
  });
});
document.getElementById('year').textContent = new Date().getFullYear(); // Update the footer year automatically.

/* Fade content in when visible, except when reduced motion is preferred. */
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, observerInstance) => { // Observe newly visible sections.
    entries.forEach(entry => {
      if (!entry.isIntersecting) return; // Leave non-visible sections unchanged.
      entry.target.classList.add('is-visible'); // Reveal the visible section.
      observerInstance.unobserve(entry.target); // Stop observing an already revealed section.
    });
  }, { threshold: .08 });
  document.documentElement.classList.add('js-animations'); // Activate reveal styles.
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); // Register reveal sections.
}

/* Keep the existing CV placeholder warning until a real CV has been uploaded. */
const cvLink = document.getElementById('cv-link'); // CV download button.
cvLink.addEventListener('click', event => { // Intercept downloads while the sample site has no CV.
  event.preventDefault(); // Avoid navigating to a nonexistent document.
  const message = document.documentElement.lang === 'it' ? 'Aggiungi prima il tuo CV in cv/CV.pdf (vedi README).' : 'Please add your CV at cv/CV.pdf first (see README).'; // Prepare the bilingual warning.
  window.alert(message); // Explain how to enable CV downloads.
});

/* Research-network dataset: change labels and connections here, not in the SVG. */
const graphNodes = [
  { id: 'statistics', x: .26, y: .37, type: 'main', key: 1 }, // First main research theme.
  { id: 'ml', x: .69, y: .28, type: 'main', key: 2 }, // Second main research theme.
  { id: 'applications', x: .59, y: .77, type: 'main', key: 3 }, // Third main research theme.
  { id: 'inference', x: .10, y: .17, type: 'secondary', label: 'Inference' }, // Supporting topic.
  { id: 'models', x: .16, y: .73, type: 'secondary', label: 'Models' }, // Supporting topic.
  { id: 'causality', x: .46, y: .12, type: 'secondary', label: 'Causality' }, // Supporting topic.
  { id: 'explainability', x: .88, y: .49, type: 'secondary', label: 'XAI' }, // Supporting topic.
  { id: 'data', x: .87, y: .84, type: 'secondary', label: 'Data' }, // Supporting topic.
  { id: 'open', x: .34, y: .90, type: 'secondary', label: 'Open science' } // Supporting topic.
];
const graphEdges = [
  ['statistics', 'ml'], // Statistics and ML connect.
  ['statistics', 'applications'], // Statistics and applications connect.
  ['ml', 'applications'], // ML and applications connect.
  ['statistics', 'inference'], // Inference belongs to statistics.
  ['statistics', 'models'], // Models belong to statistics.
  ['statistics', 'causality'], // Causality connects to statistics.
  ['ml', 'causality'], // Causality also connects to ML.
  ['ml', 'explainability'], // Interpretability connects to ML.
  ['applications', 'explainability'], // Interpretability applies to research.
  ['applications', 'data'], // Applications use data.
  ['applications', 'open'], // Applications support open science.
  ['statistics', 'open'] // Reproducibility also connects to statistics.
];
const graphSvg = document.getElementById('research-graph'); // SVG surface for the interactive graph.
const graphReset = document.getElementById('network-reset'); // Button for restoring graph positions.
const graphDetailIndex = document.getElementById('network-detail-index'); // Selected theme identifier.
const graphDetailTitle = document.getElementById('network-detail-title'); // Selected theme heading.
const graphDetailDescription = document.getElementById('network-detail-description'); // Selected theme description.
const svgNamespace = 'http://www.w3.org/2000/svg'; // Namespace for SVG elements.
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)'); // Accessibility motion preference.
const graphById = new Map(graphNodes.map(node => [node.id, node])); // Fast lookup of connected nodes.
const graphShapes = new Map(); // DOM references to nodes and labels.
const graphLines = []; // DOM references to links.
let graphWidth = 800; // Current SVG width in CSS pixels.
let graphHeight = 390; // Current SVG height in CSS pixels.
let graphSelected = 'statistics'; // Initial selected research interest.
let graphDragged = null; // Active pointer drag state.
let graphFrame = null; // Current animation frame handle.
let graphActive = true; // Used to pause animations when hidden.

/* Return the translated label for a main node, or its short fixed label. */
function graphLabel(node) {
  return node.key ? translations[document.documentElement.lang]['research' + node.key + 'Title'] : node.label;
}

/* Update the translated detail panel and all three main-node labels. */
function refreshResearchGraphLabels() {
  if (!document.querySelector('.graph-node')) return;
  graphNodes.forEach(node => { graphShapes.get(node.id).label.textContent = graphLabel(node); });
  selectGraphNode(graphSelected);
}

/* Highlight a topic and present its existing bilingual description below the diagram. */
function selectGraphNode(id) {
  const node = graphById.get(id);
  const mainNode = node.key ? node : graphById.get('statistics');
  graphSelected = mainNode.id;
  graphShapes.forEach((shape, key) => { shape.group.classList.toggle('active', key === graphSelected); });
  graphLines.forEach(edge => { edge.element.classList.toggle('emphasized', edge.from === graphSelected || edge.to === graphSelected); });
  graphDetailIndex.textContent = String(mainNode.key).padStart(2, '0') + ' / RESEARCH';
  graphDetailTitle.textContent = graphLabel(mainNode);
  graphDetailDescription.textContent = translations[document.documentElement.lang]['research' + mainNode.key + 'Description'];
}

/* Render edges first, so they always sit behind the movable nodes. */
function createResearchGraph() {
  graphEdges.forEach(([from, to]) => {
    const line = document.createElementNS(svgNamespace, 'line');
    line.setAttribute('class', 'graph-link');
    graphSvg.appendChild(line);
    graphLines.push({ from, to, element: line });
  });
  graphNodes.forEach(node => {
    const group = document.createElementNS(svgNamespace, 'g');
    const circle = document.createElementNS(svgNamespace, 'circle');
    const label = document.createElementNS(svgNamespace, 'text');
    group.setAttribute('class', 'graph-node ' + node.type);
    group.setAttribute('role', 'button');
    group.setAttribute('tabindex', '0');
    group.setAttribute('aria-label', graphLabel(node));
    circle.setAttribute('r', node.key ? '10' : '5');
    label.setAttribute('x', '0');
    label.setAttribute('y', node.key ? '29' : '20');
    label.setAttribute('text-anchor', 'middle');
    label.textContent = graphLabel(node);
    group.appendChild(circle);
    group.appendChild(label);
    graphSvg.appendChild(group);
    graphShapes.set(node.id, { group, label });
    group.addEventListener('pointerdown', event => startGraphDrag(event, node));
    group.addEventListener('pointermove', event => moveGraphDrag(event, node));
    group.addEventListener('pointerup', event => stopGraphDrag(event, node));
    group.addEventListener('pointercancel', event => stopGraphDrag(event, node));
    group.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectGraphNode(node.id);
      }
    });
  });
  selectGraphNode(graphSelected);
  resizeResearchGraph();
}

/* Reset and resize the simulation while retaining proportional locations. */
function resizeResearchGraph() {
  const bounds = graphSvg.getBoundingClientRect();
  graphWidth = Math.max(280, bounds.width);
  graphHeight = Math.max(250, bounds.height);
  graphSvg.setAttribute('viewBox', '0 0 ' + graphWidth + ' ' + graphHeight);
  graphNodes.forEach(node => {
    if (node.px === undefined) node.px = node.x * graphWidth;
    else node.px = node.px * graphWidth / (node.lastWidth || graphWidth);
    if (node.py === undefined) node.py = node.y * graphHeight;
    else node.py = node.py * graphHeight / (node.lastHeight || graphHeight);
    node.lastWidth = graphWidth;
    node.lastHeight = graphHeight;
    node.vx = 0;
    node.vy = 0;
  });
  paintResearchGraph();
}

/* Convert the pointer position into coordinates on the SVG surface. */
function graphPointerPoint(event) {
  const bounds = graphSvg.getBoundingClientRect();
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
}

/* Begin dragging a node and select the associated research theme. */
function startGraphDrag(event, node) {
  if (event.button !== 0) return;
  const pointer = graphPointerPoint(event);
  graphDragged = { id: node.id, pointerId: event.pointerId, offsetX: node.px - pointer.x, offsetY: node.py - pointer.y, startX: pointer.x, startY: pointer.y };
  graphShapes.get(node.id).group.setPointerCapture(event.pointerId);
  graphShapes.get(node.id).group.classList.add('dragging');
  if (node.key) selectGraphNode(node.id);
}

/* Move a dragged node without allowing it to disappear beyond the SVG boundary. */
function moveGraphDrag(event, node) {
  if (!graphDragged || graphDragged.id !== node.id || graphDragged.pointerId !== event.pointerId) return;
  const pointer = graphPointerPoint(event);
  node.px = Math.max(55, Math.min(graphWidth - 55, pointer.x + graphDragged.offsetX));
  node.py = Math.max(35, Math.min(graphHeight - 42, pointer.y + graphDragged.offsetY));
  node.vx = 0;
  node.vy = 0;
  paintResearchGraph();
}

/* Finish the drag; clicking a secondary node highlights its nearest main theme. */
function stopGraphDrag(event, node) {
  if (!graphDragged || graphDragged.pointerId !== event.pointerId) return;
  graphShapes.get(node.id).group.classList.remove('dragging');
  if (!node.key) {
    const linkedMain = graphEdges.find(([from, to]) => (from === node.id && graphById.get(to).key) || (to === node.id && graphById.get(from).key));
    if (linkedMain) selectGraphNode(graphById.get(linkedMain[0]).key ? linkedMain[0] : linkedMain[1]);
  }
  graphDragged = null;
}

/* Reposition SVG circles, labels and connection lines for the current frame. */
function paintResearchGraph() {
  graphLines.forEach(edge => {
    const from = graphById.get(edge.from);
    const to = graphById.get(edge.to);
    edge.element.setAttribute('x1', from.px);
    edge.element.setAttribute('y1', from.py);
    edge.element.setAttribute('x2', to.px);
    edge.element.setAttribute('y2', to.py);
  });
  graphNodes.forEach(node => { graphShapes.get(node.id).group.setAttribute('transform', 'translate(' + node.px + ',' + node.py + ')'); });
}

/* Apply gentle spring forces and friction for an Obsidian-like moving graph. */
function animateResearchGraph() {
  if (!motionReduced.matches && graphActive && !document.hidden) {
    graphNodes.forEach(node => {
      if (graphDragged && graphDragged.id === node.id) return;
      const centerPull = .00045;
      node.vx += (node.x * graphWidth - node.px) * centerPull;
      node.vy += (node.y * graphHeight - node.py) * centerPull;
      graphNodes.forEach(other => {
        if (other.id === node.id) return;
        const dx = node.px - other.px;
        const dy = node.py - other.py;
        const distanceSquared = Math.max(225, dx * dx + dy * dy);
        const repulsion = 190 / distanceSquared;
        node.vx += dx * repulsion / Math.sqrt(distanceSquared);
        node.vy += dy * repulsion / Math.sqrt(distanceSquared);
      });
      node.vx += Math.sin(performance.now() / 1800 + node.x * 11) * .003;
      node.vy += Math.cos(performance.now() / 2300 + node.y * 9) * .003;
      node.vx *= .94;
      node.vy *= .94;
    });
    graphNodes.forEach(node => {
      if (graphDragged && graphDragged.id === node.id) return;
      node.px = Math.max(60, Math.min(graphWidth - 60, node.px + node.vx));
      node.py = Math.max(35, Math.min(graphHeight - 42, node.py + node.vy));
    });
    paintResearchGraph();
  }
  graphFrame = window.requestAnimationFrame(animateResearchGraph);
}

/* Return every node to its original designed location. */
function resetResearchGraph() {
  graphNodes.forEach(node => {
    node.px = node.x * graphWidth;
    node.py = node.y * graphHeight;
    node.vx = 0;
    node.vy = 0;
  });
  selectGraphNode('statistics');
  paintResearchGraph();
}

/* Initialize the accessible interactive graph after the page markup has loaded. */
createResearchGraph();
graphReset.addEventListener('click', resetResearchGraph);
new ResizeObserver(resizeResearchGraph).observe(graphSvg);
new IntersectionObserver(entries => { graphActive = entries[0].isIntersecting; }).observe(graphSvg);
graphFrame = window.requestAnimationFrame(animateResearchGraph);
