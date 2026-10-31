const serviceItems = [
  {
    icon: "globe",
    title: "Applications Web",
    description: "Développement d'applications web modernes et performantes avec React, Next.js et Node.js",
    features: ["Interface responsive", "Performance optimisée", "SEO friendly", "Progressive Web Apps"],
  },
  {
    icon: "smartphone",
    title: "Applications Mobiles",
    description: "Création d'applications mobiles natives et cross-platform pour iOS et Android",
    features: ["Design intuitif", "Performance native", "Push notifications", "Offline-first"],
  },
  {
    icon: "monitor",
    title: "Sites Web",
    description: "Conception de sites web élégants et fonctionnels pour votre présence en ligne",
    features: ["Design moderne", "CMS personnalisé", "E-commerce", "Maintenance"],
  },
];

const stackItems = [
  ["HTML", "html5"], ["CSS", "css3"], ["JavaScript", "javascript"], ["React", "react"],
  ["Node.js", "nodejs"], ["Laravel", "laravel"], ["PHP", "php"], ["Python", "python"],
];

const devProjects = [
  {
    title: "E-Commerce Platform",
    tech: "React, Node.js, PostgreSQL",
    description: "Plateforme full-stack avec paiement intégré",
    image: "https://images.unsplash.com/photo-1570305109029-a0059a91f8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    details: "Une plateforme e-commerce complète avec gestion des produits, panier, paiement Stripe, et tableau de bord administrateur. Système d'authentification sécurisé et gestion des commandes en temps réel.",
    features: ["Paiement sécurisé", "Dashboard admin", "Gestion stock", "Notifications email"],
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    tech: "Next.js, TypeScript, D3.js",
    description: "Visualisation de données en temps réel",
    image: "https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    details: "Tableau de bord analytique avec visualisations interactives, graphiques personnalisables et export de données. Interface intuitive pour suivre les KPIs en temps réel.",
    features: ["Graphiques interactifs", "Export PDF/Excel", "Filtres avancés", "Temps réel"],
    stack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Mobile App",
    tech: "React Native, Firebase",
    description: "Application mobile cross-platform",
    image: "https://images.unsplash.com/photo-1766932103457-2ee3dc766756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    details: "Application mobile sociale permettant le partage de contenu, messagerie instantanée et notifications push. Interface fluide et expérience utilisateur optimale.",
    features: ["Chat en temps réel", "Push notifications", "Partage médias", "Profils users"],
    stack: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#",
  },
];

const mediaProjects = {
  video: [
    { title: "Commercial Production", category: "Publicité", description: "Direction créative et production", image: "https://images.unsplash.com/photo-1775559065510-7ad57282b73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
    { title: "Documentary", category: "Documentaire", description: "Réalisation et montage", image: "https://images.unsplash.com/photo-1758390851386-79c99432120e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
    { title: "Music Video", category: "Clip Musical", description: "Direction artistique et post-production", image: "https://images.unsplash.com/photo-1768483546760-06fdb0efaf81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
  ],
  photo: [
    { title: "Corporate Portraits", category: "Portrait", description: "Photographie d'entreprise", image: "https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
    { title: "Product Photography", category: "Produit", description: "Photographie commerciale", image: "https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
    { title: "Editorial", category: "Éditorial", description: "Photographie artistique", image: "https://images.unsplash.com/photo-1745847768366-d44dcef9ef35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900" },
  ],
};

const content = document.querySelector("#project-content");
const sectionTitle = document.querySelector("#section-title");
const sectionKicker = document.querySelector("#section-kicker");
const devTabs = document.querySelector("#dev-tabs");
const modal = document.querySelector("#project-modal");
const modalContent = document.querySelector("#modal-content");
let activeSection = "dev";
let activeView = "services";
let currentSlide = 0;

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
})[character]);

function renderServices() {
  content.innerHTML = `<div class="service-grid content-enter">${serviceItems.map((service) => `
    <article class="service-card reveal">
      <div class="service-icon" aria-hidden="true"><i data-lucide="${service.icon}"></i></div>
      <h3>${service.title}</h3><p>${service.description}</p>
      <ul class="feature-list">${service.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
    </article>`).join("")}</div>`;
}

function renderStack() {
  content.innerHTML = `<div class="stack-grid content-enter">${stackItems.map(([name, icon]) => `
    <article class="stack-card reveal">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg" alt="" loading="lazy">
      <strong>${name}</strong>
    </article>`).join("")}</div>`;
}

function renderCarousel() {
  const project = devProjects[currentSlide];
  content.innerHTML = `<div class="carousel content-enter">
    <div class="carousel-stage" id="carousel-stage" role="button" tabindex="0" aria-label="Voir les détails de ${escapeHtml(project.title)}">
      <img class="carousel-image" src="${project.image}" alt="${escapeHtml(project.title)}">
      <div class="carousel-shade"></div>
      <div class="carousel-copy"><h3>${project.title}</h3><p>${project.description}</p><span>${project.tech}</span></div>
    </div>
    <button class="carousel-arrow prev" data-slide="-1" aria-label="Projet précédent"><i data-lucide="chevron-left"></i></button>
    <button class="carousel-arrow next" data-slide="1" aria-label="Projet suivant"><i data-lucide="chevron-right"></i></button>
    <div class="carousel-dots" aria-label="Choisir un projet">${devProjects.map((item, index) => `
      <button class="carousel-dot ${index === currentSlide ? "is-active" : ""}" data-project-index="${index}" aria-label="Afficher ${escapeHtml(item.title)}" aria-current="${index === currentSlide}">
        <img src="${item.image}" alt="" loading="lazy">
      </button>`).join("")}</div>
  </div>`;
  document.querySelector("#carousel-stage").addEventListener("click", () => openProject(currentSlide));
  document.querySelector("#carousel-stage").addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProject(currentSlide); }
  });
}

function renderGallery(section) {
  const projects = mediaProjects[section];
  content.innerHTML = `<div class="gallery-grid content-enter">${projects.map((project) => `
    <article class="gallery-card reveal">
      <div class="gallery-media"><img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy">
        <span class="gallery-category">${project.category}</span>
        <span class="gallery-symbol" aria-hidden="true"><i data-lucide="${section === "video" ? "play" : "image"}"></i></span>
      </div>
      <div class="gallery-info"><h3>${project.title}</h3><p>${project.description}</p><div class="gallery-rule"></div></div>
    </article>`).join("")}</div>`;
}

function observeReveals() {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => observer.observe(element));
}

function render() {
  const isDevelopment = activeSection === "dev";
  devTabs.hidden = !isDevelopment;
  document.querySelectorAll("[data-section-switch]").forEach((button) => {
    const active = button.dataset.sectionSwitch === activeSection;
    button.classList.toggle("is-active", active);
    if (button.matches(".role-button")) button.setAttribute("aria-pressed", String(active));
  });

  if (activeSection === "video") {
    sectionTitle.textContent = "Production Vidéo";
    sectionKicker.textContent = "02 / MOVING IMAGE";
    renderGallery("video");
  } else if (activeSection === "photo") {
    sectionTitle.textContent = "Photographie";
    sectionKicker.textContent = "03 / STILL IMAGE";
    renderGallery("photo");
  } else {
    sectionTitle.textContent = "Développement";
    sectionKicker.textContent = "01 / DIGITAL CRAFT";
    if (activeView === "services") renderServices();
    if (activeView === "stack") renderStack();
    if (activeView === "projects") renderCarousel();
    document.querySelectorAll(".view-tab").forEach((button) => {
      const active = button.dataset.view === activeView;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
  }
  observeReveals();
  window.lucide?.createIcons();
}

function changeSlide(offset) {
  currentSlide = (currentSlide + offset + devProjects.length) % devProjects.length;
  renderCarousel();
}

function openProject(index) {
  const project = devProjects[index];
  modalContent.innerHTML = `<img class="modal-image" src="${project.image}" alt="${escapeHtml(project.title)}">
    <h2 id="modal-title">${project.title}</h2><p>${project.details}</p>
    <h3>Fonctionnalités</h3><div class="modal-features">${project.features.map((feature) => `<span>• &nbsp;${feature}</span>`).join("")}</div>
    <h3>Technologies utilisées</h3><div class="tech-pills">${project.stack.map((tech) => `<span>${tech}</span>`).join("")}</div>
    <a class="project-link" href="${project.link}">Voir le projet <i data-lucide="arrow-right" aria-hidden="true"></i></a>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  window.lucide?.createIcons();
  document.querySelector("#modal-close").focus();
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

document.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-section-switch]");
  if (sectionButton) {
    activeSection = sectionButton.dataset.sectionSwitch;
    const mobileLinks = document.querySelector("#mobile-links");
    mobileLinks.hidden = true;
    document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
    render();
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    activeView = viewButton.dataset.view;
    render();
  }

  const slideButton = event.target.closest("[data-slide]");
  if (slideButton) changeSlide(Number(slideButton.dataset.slide));

  const projectButton = event.target.closest("[data-project-index]");
  if (projectButton) {
    currentSlide = Number(projectButton.dataset.projectIndex);
    renderCarousel();
  }

  if (event.target.closest("[data-close-modal]")) closeProject();

  if (event.target.closest("#theme-toggle, #mobile-theme-toggle")) {
    toggleTheme();
  }
});

function initTheme() {
  let theme = "light";
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") {
      theme = saved;
    }
  } catch (e) {}
  applyTheme(theme);
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.setAttribute("data-theme", isLight ? "light" : "dark");
  document.body.setAttribute("data-theme", isLight ? "light" : "dark");
  try {
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  } catch (e) {}

  const metaTheme = document.querySelector("#meta-theme-color");
  if (metaTheme) {
    metaTheme.setAttribute("content", isLight ? "#f3f2ed" : "#000000");
  }

  const label = isLight ? "Passer au mode sombre" : "Passer au mode clair";
  const themeToggle = document.querySelector("#theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }
  const mobileLabel = document.querySelector(".theme-label-text");
  if (mobileLabel) {
    mobileLabel.textContent = isLight ? "Mode sombre" : "Mode clair";
  }

  window.lucide?.createIcons();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = current === "light" ? "dark" : "light";
  applyTheme(nextTheme);
}

document.querySelector("#modal-close")?.addEventListener("click", closeProject);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) closeProject();
});

document.querySelector("#menu-toggle")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!isOpen));
  button.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
  const mobileLinks = document.querySelector("#mobile-links");
  if (mobileLinks) mobileLinks.hidden = isOpen;
});

const nav = document.querySelector("#floating-nav");
const hero = document.querySelector("#hero");
const coverSplash = document.querySelector("#cover-splash");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const coverH = coverSplash ? coverSplash.offsetHeight : 0;

  // Nav appears after user scrolls past the cover splash
  if (nav && !nav.classList.contains("nav-always-visible")) {
    nav.classList.toggle("is-visible", scrollY > coverH * 0.6);
  }

  // Parallax fade on hero-content (relative to position within hero)
  if (hero) {
    const heroContent = hero.querySelector(".hero-content");
    if (heroContent) {
      const heroScroll = Math.max(0, scrollY - coverH);
      const progress = Math.min(heroScroll / (window.innerHeight * 0.72), 1);
      heroContent.style.opacity = String(1 - progress * 0.8);
      heroContent.style.transform = `scale(${1 - progress * 0.045})`;
    }
  }
}, { passive: true });



initTheme();
function initAboutPhotoCarousel() {
  const carousel = document.querySelector(".about-portrait-media");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(".about-portrait-slide")];
  const dots = [...carousel.querySelectorAll(".about-portrait-dot")];
  if (slides.length < 2 || dots.length !== slides.length) return;

  let activeIndex = 0;
  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      dots[slideIndex].classList.toggle("is-active", isActive);
      dots[slideIndex].setAttribute("aria-pressed", String(isActive));
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      if (!document.hidden && !carousel.matches(":hover") && !carousel.contains(document.activeElement)) {
        showSlide(activeIndex + 1);
      }
    }, 3000);
  }
}
initAboutPhotoCarousel();
function initAboutStatsTicker() {
  const ticker = document.querySelector(".about-stats-strip");
  if (!ticker) return;

  const stats = [...ticker.querySelectorAll(".about-stat-box")];
  if (stats.length < 2) return;

  let activeIndex = 0;
  window.setInterval(() => {
    if (document.hidden) return;

    activeIndex = (activeIndex + 1) % stats.length;
    stats.forEach((stat, index) => {
      const isActive = index === activeIndex;
      stat.classList.toggle("is-active", isActive);
      stat.setAttribute("aria-hidden", String(!isActive));
    });
  }, 4000);
}
initAboutStatsTicker();
function initAboutFeatureCarousel() {
  const carousel = document.querySelector(".about-feature-carousel");
  if (!carousel) return;

  const features = [...carousel.querySelectorAll(".about-feature-box")];
  const dots = [...carousel.querySelectorAll(".about-feature-dots button")];
  if (features.length < 2 || dots.length !== features.length) return;

  let activeIndex = 0;
  const showFeature = (index) => {
    activeIndex = (index + features.length) % features.length;
    features.forEach((feature, featureIndex) => {
      const isActive = featureIndex === activeIndex;
      feature.classList.toggle("is-active", isActive);
      feature.setAttribute("aria-hidden", String(!isActive));
      dots[featureIndex].classList.toggle("is-active", isActive);
      dots[featureIndex].setAttribute("aria-pressed", String(isActive));
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showFeature(index));
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      if (!document.hidden && !carousel.matches(":hover") && !carousel.contains(document.activeElement)) {
        showFeature(activeIndex + 1);
      }
    }, 4000);
  }
}
initAboutFeatureCarousel();
function initAboutTimelineCarousel() {
  const carousel = document.querySelector(".about-timeline-carousel");
  const timeline = carousel?.querySelector(".about-timeline");
  if (!carousel || !timeline) return;

  const items = [...timeline.querySelectorAll(".timeline-item")];
  const dots = [...carousel.querySelectorAll(".timeline-dots button")];
  if (items.length < 2 || dots.length !== items.length) return;

  let activeIndex = 0;
  const updateTimelineHeight = () => {
    timeline.style.height = `${Math.max(...items.map((item) => item.offsetHeight))}px`;
  };
  const showItem = (index) => {
    activeIndex = (index + items.length) % items.length;
    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === activeIndex;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-hidden", String(!isActive));
      dots[itemIndex].classList.toggle("is-active", isActive);
      dots[itemIndex].setAttribute("aria-pressed", String(isActive));
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showItem(index));
  });
  window.addEventListener("resize", updateTimelineHeight);
  updateTimelineHeight();

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      if (!document.hidden && !carousel.matches(":hover") && !carousel.contains(document.activeElement)) {
        showItem(activeIndex + 1);
      }
    }, 4000);
  }
}
initAboutTimelineCarousel();
function initAboutValuesCarousel() {
  const carousel = document.querySelector(".about-values-carousel");
  const grid = carousel?.querySelector(".about-values-grid");
  if (!carousel || !grid) return;

  const values = [...grid.querySelectorAll(".about-value-box")];
  if (values.length < 2) return;

  let activeIndex = 0;
  const updateCarousel = () => {
    values.forEach((value, index) => {
      const isActive = index === activeIndex;
      value.classList.toggle("is-active", isActive);
      value.setAttribute("aria-hidden", String(!isActive));
    });

    grid.style.height = `${values[activeIndex].offsetHeight}px`;
  };
  const showValue = (index) => {
    activeIndex = (index + values.length) % values.length;
    updateCarousel();
  };

  window.addEventListener("resize", updateCarousel);
  updateCarousel();

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      if (!document.hidden && !carousel.matches(":hover") && !carousel.contains(document.activeElement)) {
        showValue(activeIndex + 1);
      }
    }, 4000);
  }
}
initAboutValuesCarousel();
if (content && devTabs) {
  render();
}
observeReveals();

/* ── About Page: Interactive Skill Filter ── */
(function initSkillFilters() {
  const filterButtons = document.querySelectorAll("[data-skill-filter]");
  const carousel = document.querySelector(".about-skills-carousel");
  const grid = carousel?.querySelector(".about-skills-grid");
  const skillCards = [...(grid?.querySelectorAll("[data-skill-cat]") || [])];
  const previousButton = carousel?.querySelector(".about-skills-previous");
  const nextButton = carousel?.querySelector(".about-skills-next");
  const count = carousel?.querySelector(".about-skills-count");
  if (!filterButtons.length || !skillCards.length || !grid || !previousButton || !nextButton || !count) return;

  let visibleCards = skillCards;
  let activeIndex = 0;

  const updateCarousel = () => {
    skillCards.forEach((card) => {
      const isVisible = visibleCards.includes(card);
      card.style.display = isVisible ? "flex" : "none";
      card.classList.toggle("is-active", isVisible && visibleCards[activeIndex] === card);
      card.setAttribute("aria-hidden", String(!isVisible || visibleCards[activeIndex] !== card));
    });

    const activeCard = visibleCards[activeIndex];
    grid.style.height = `${activeCard.offsetHeight}px`;
    count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(visibleCards.length).padStart(2, "0")}`;
    previousButton.disabled = visibleCards.length < 2;
    nextButton.disabled = visibleCards.length < 2;
  };

  const showCard = (index) => {
    activeIndex = (index + visibleCards.length) % visibleCards.length;
    updateCarousel();
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.skillFilter;
      visibleCards = skillCards.filter((card) => filter === "all" || card.dataset.skillCat === filter);
      if (!visibleCards.length) return;

      activeIndex = 0;
      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("is-active", isActive);
        filterButton.setAttribute("aria-selected", String(isActive));
      });
      updateCarousel();
    });
  });

  previousButton.addEventListener("click", () => showCard(activeIndex - 1));
  nextButton.addEventListener("click", () => showCard(activeIndex + 1));
  window.addEventListener("resize", updateCarousel);
  updateCarousel();

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      if (!document.hidden && !carousel.matches(":hover") && !carousel.contains(document.activeElement)) {
        showCard(activeIndex + 1);
      }
    }, 4000);
  }
})();

/* ── Copy Email Helper ── */
document.querySelectorAll("[data-copy-email]").forEach(btn => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = "andytshuta01@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      const originalText = btn.innerHTML;
      btn.innerHTML = `<i data-lucide="check" aria-hidden="true"></i> Copié !`;
      window.lucide?.createIcons();
      setTimeout(() => {
        btn.innerHTML = originalText;
        window.lucide?.createIcons();
      }, 2200);
    } catch(err) {}
  });
});

/* ── Electronic Scoreboard ── */
(function initScoreboard() {
  const stats = [
    { value: "8+",  label: "Ans d'expérience" },
    { value: "50+", label: "Clients satisfaits" },
    { value: "12",  label: "Récompenses"       },
  ];

  const sbValue  = document.getElementById("sb-value");
  const sbLabel  = document.getElementById("sb-label");
  const dots     = document.querySelectorAll(".sb-dot");
  const screen   = document.querySelector(".scoreboard-screen");

  if (!sbValue || !sbLabel) return;

  let current = 0;
  let timer   = null;

  function flipTo(idx) {
    if (idx === current) return;
    current = idx;

    // Update dots
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));

    // Flip value out → update → flip in
    sbValue.classList.remove("flip-in");
    sbValue.classList.add("flip-out");
    sbLabel.classList.remove("flip-in");
    sbLabel.classList.add("flip-out");

    setTimeout(() => {
      sbValue.textContent = stats[idx].value;
      sbLabel.textContent = stats[idx].label;
      sbValue.classList.remove("flip-out");
      sbValue.classList.add("flip-in");
      sbLabel.classList.remove("flip-out");
      sbLabel.classList.add("flip-in");
    }, 350);
  }

  function next() {
    flipTo((current + 1) % stats.length);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  // Dot click navigation
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.idx, 10);
      flipTo(idx);
      startTimer(); // reset timer on manual click
    });
  });

  // Pause on hover
  screen.addEventListener("mouseenter", () => clearInterval(timer));
  screen.addEventListener("mouseleave", () => startTimer());

  startTimer();
})();

/* ── Cover Splash Scroll Blur Effect ── */
(function initCoverScrollBlur() {
  const coverSplash = document.getElementById("cover-splash");
  if (!coverSplash) return;

  let ticking = false;

  function updateBlur() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const vh = window.innerHeight || 800;
    // La progression va de 0 (haut de page) à 1 (quand on atteint 70% de la hauteur de la cover)
    const progress = Math.min(1, Math.max(0, scrollY / (vh * 0.7)));
    // Le flou passe de 0px (photo claire et nette) à 24px (flou artistique)
    const blurAmount = (progress * 24).toFixed(1);

    coverSplash.style.setProperty("--cover-scroll", progress.toFixed(3));
    coverSplash.style.setProperty("--cover-blur", `${blurAmount}px`);

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateBlur);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", updateBlur, { passive: true });
  document.addEventListener("DOMContentLoaded", updateBlur);

  // Exécution immédiate : au départ la photo est 100% nette (0px flou)
  updateBlur();
})();
