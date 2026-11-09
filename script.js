/* PERSONALIZZAZIONE: i testi IT/EN sono definiti qui sotto.
   Per nome, email, collegamenti, pubblicazioni e progetti modifica index.html.
*/
const translations = {
  it: {
    skip:"Vai al contenuto", navAbout:"Chi sono",navResearch:"Ricerca",navProjects:"Progetti",navPublications:"Pubblicazioni",navContact:"Contatti",
    eyebrow:"Portfolio accademico · Disponibile per collaborazioni",hello:"Ciao, sono",role:"Ricerca · Statistica · Data Science",heroDescription:"Studio come trasformare dati complessi in conoscenza affidabile, combinando metodi statistici, machine learning e ricerca interdisciplinare.",explore:"Esplora la ricerca",downloadCV:"Scarica il CV",chipOne:"Curiosità e metodo",chipTwo:"Dati → conoscenza",scroll:"Scopri di più",
    aboutTitle:"Un po' di me<span class='accent'>.</span>",aboutLead:"Un approccio rigoroso, aperto e interdisciplinare.",aboutP1:"Sono un ricercatore interessato all'analisi dei dati e allo sviluppo di metodi quantitativi per affrontare problemi reali.",aboutP2:"Il mio lavoro si colloca all'intersezione tra statistica, machine learning e applicazioni scientifiche. Mi piace costruire strumenti riproducibili, collaborare e comunicare risultati in modo chiaro.",getInTouch:"Parliamone",factLocation:"Sede",factArea:"Ambiti",factAreaValue:"Statistica · AI · Ricerca",factAffiliation:"Affiliazione",factAffiliationValue:"Università / Centro di ricerca",factEmail:"Email",
    researchTitle:"Interessi di ricerca<span class='accent'>.</span>",researchLead:"Domande concrete, strumenti quantitativi e risultati riproducibili.",research1Title:"Statistica & inferenza",research1Description:"Modelli statistici, disegno degli studi e analisi rigorose dell'incertezza.",research2Title:"Machine learning",research2Description:"Metodi predittivi, interpretabilità e valutazione robusta dei modelli.",research3Title:"Applicazioni scientifiche",research3Description:"Integrazione dei dati e metodologie riproducibili per la ricerca.",
    projectsTitle:"Progetti selezionati<span class='accent'>.</span>",projectsLead:"Una selezione di idee, strumenti e collaborazioni.",projectType1:"Software · Open source",project1Title:"Progetto di analisi dati",project1Description:"Una pipeline riproducibile per elaborare, analizzare e visualizzare dati complessi.",projectType2:"Ricerca · Metodologia",project2Title:"Metodi statistici applicati",project2Description:"Sviluppo e confronto di approcci quantitativi su problemi di ricerca.",projectType3:"Applicazioni · Visualizzazione",project3Title:"Dashboard interattiva",project3Description:"Un'interfaccia intuitiva per esplorare i risultati e supportare le decisioni.",viewProject:"Vedi il progetto",
    publicationsTitle:"Pubblicazioni<span class='accent'>.</span>",publicationsLead:"Articoli e lavori: sostituisci gli esempi con le tue citazioni reali.",pubLabel1:"Articolo · esempio",pubLabel2:"Preprint · esempio",pub1Title:"Titolo della tua pubblicazione scientifica",pub1Authors:"Nome Cognome, Coautore A, Coautore B · Rivista / Conferenza",pub2Title:"Un secondo lavoro o preprint",pub2Authors:"Nome Cognome, Coautore C · Repository / Rivista",pubNote:"Queste pubblicazioni sono segnaposto: sostituiscile prima di pubblicare il sito.",
    contactTitle:"Costruiamo qualcosa <em>insieme.</em>",contactDescription:"Hai un'idea di ricerca, una proposta di collaborazione o semplicemente una domanda? Scrivimi.",writeEmail:"Scrivimi un'email",footer:"Creato con cura, pubblicato con GitHub Pages.",backTop:"Torna su"
  },
  en: {
    skip:"Skip to content",navAbout:"About",navResearch:"Research",navProjects:"Projects",navPublications:"Publications",navContact:"Contact",
    eyebrow:"Academic portfolio · Open to collaborations",hello:"Hello, I'm",role:"Research · Statistics · Data Science",heroDescription:"I explore how to turn complex data into reliable knowledge by combining statistical methods, machine learning and interdisciplinary research.",explore:"Explore research",downloadCV:"Download CV",chipOne:"Curiosity & rigour",chipTwo:"Data → knowledge",scroll:"Explore more",
    aboutTitle:"A little about me<span class='accent'>.</span>",aboutLead:"A rigorous, open and interdisciplinary approach.",aboutP1:"I am a researcher interested in data analysis and the development of quantitative methods to address real-world problems.",aboutP2:"My work lies at the intersection of statistics, machine learning and scientific applications. I enjoy building reproducible tools, collaborating and communicating findings clearly.",getInTouch:"Let's connect",factLocation:"Based in",factArea:"Fields",factAreaValue:"Statistics · AI · Research",factAffiliation:"Affiliation",factAffiliationValue:"University / Research Centre",factEmail:"Email",
    researchTitle:"Research interests<span class='accent'>.</span>",researchLead:"Real questions, quantitative tools, reproducible results.",research1Title:"Statistics & inference",research1Description:"Statistical models, study design and rigorous uncertainty analysis.",research2Title:"Machine learning",research2Description:"Predictive methods, interpretability and robust model evaluation.",research3Title:"Scientific applications",research3Description:"Data integration and reproducible methods for research.",
    projectsTitle:"Selected projects<span class='accent'>.</span>",projectsLead:"A selection of ideas, tools and collaborations.",projectType1:"Software · Open source",project1Title:"Data analysis project",project1Description:"A reproducible pipeline for processing, analysing and visualising complex data.",projectType2:"Research · Methods",project2Title:"Applied statistical methods",project2Description:"Developing and comparing quantitative approaches to research challenges.",projectType3:"Applications · Visualisation",project3Title:"Interactive dashboard",project3Description:"An intuitive interface to explore results and support decision-making.",viewProject:"View project",
    publicationsTitle:"Publications<span class='accent'>.</span>",publicationsLead:"Papers and preprints: replace these examples with your actual citations.",pubLabel1:"Article · example",pubLabel2:"Preprint · example",pub1Title:"Title of your scientific publication",pub1Authors:"Name Surname, Coauthor A, Coauthor B · Journal / Conference",pub2Title:"Another paper or preprint",pub2Authors:"Name Surname, Coauthor C · Repository / Journal",pubNote:"These publications are placeholders: replace them before publishing.",
    contactTitle:"Let's build something <em>together.</em>",contactDescription:"Have a research idea, collaboration proposal or simply a question? Feel free to get in touch.",writeEmail:"Send me an email",footer:"Crafted with care, published with GitHub Pages.",backTop:"Back to top"
  }
};
const languageButton = document.getElementById('language-toggle');
const languageLabel = document.getElementById('language-label');
const themeButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
function setLanguage(lang) {
  const dictionary = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (!(key in dictionary)) return;
    // Trusted, locally authored translation strings, with intentional accent/em markup.
    node.innerHTML = dictionary[key];
  });
  document.documentElement.lang = lang;
  languageLabel.textContent = lang === 'it' ? 'EN' : 'IT';
  document.title = lang === 'it' ? 'Nome Cognome · Ricerca & Dati' : 'Name Surname · Research & Data';
  const description = document.querySelector('meta[name="description"]');
  description.content = lang === 'it' ? 'Sito personale accademico: ricerca, progetti, pubblicazioni e contatti.' : 'Academic portfolio: research, projects, publications and contact.';
  try { localStorage.setItem('site-language',lang); } catch (_) {}
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro');
  try { localStorage.setItem('site-theme',theme); } catch (_) {}
}
let savedLang = 'it', savedTheme = 'light';
try { savedLang = localStorage.getItem('site-language') || 'it'; savedTheme = localStorage.getItem('site-theme') || 'light'; } catch (_) {}
setLanguage(savedLang === 'en' ? 'en' : 'it');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'it' ? 'en' : 'it'));
themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(isOpen));
  menuButton.setAttribute('aria-label',isOpen ? 'Chiudi menu' : 'Apri menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}}),{threshold:.08});
  document.documentElement.classList.add('js-animations');
  document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}
// If you have not uploaded a CV yet, the button is intentionally disabled.
const cvLink = document.getElementById('cv-link');
// Remove the next two lines AFTER uploading the actual file at cv/CV.pdf.
cvLink.addEventListener('click', event => { event.preventDefault(); window.alert(document.documentElement.lang === 'it' ? 'Aggiungi prima il tuo CV in cv/CV.pdf (vedi README).' : 'Please add your CV at cv/CV.pdf first (see README).'); });
