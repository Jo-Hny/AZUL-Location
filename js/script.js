"use strict";

const SITE = Object.freeze({
  name: "AZUL Location",
  whatsappNumber: "213550400665",
  contactEmail: "hb.location.auto@gmail.com",
  defaultWhatsAppMessage:
    "Bonjour AZUL Location, je souhaite avoir des informations sur une location de voiture.",
});

const vehicles = [
  {
    id: "sandero-essence",
    name: "Dacia Sandero",
    price: 4500,
    fuel: "Essence",
    gearbox: "Manuelle",
    seats: 5,
    ac: true,
    category: "Citadine",
    image: "images/sandero.png",
    gallery: [
      "images/sandero.png",
      "images/sandero.png",
      "images/sandero.png",
      "images/sandero.png",
      "images/sandero.png",
    ],
    imageWidth: 1000,
    imageHeight: 584,
  },
  {
    id: "sandero-diesel",
    name: "Dacia Sandero",
    price: 5500,
    fuel: "Diesel",
    gearbox: "Manuelle",
    seats: 5,
    ac: true,
    category: "Citadine",
    image: "images/sandero-diesel.png",
    gallery: [
      "images/sandero-diesel.png",
      "images/sandero-diesel.png",
      "images/sandero-diesel.png",
      "images/sandero-diesel.png",
      "images/sandero-diesel.png",
    ],
    imageWidth: 1000,
    imageHeight: 655,
  },
  {
    id: "renault-symbol",
    name: "Renault Symbol",
    price: 5500,
    fuel: "Essence",
    gearbox: "Manuelle",
    seats: 5,
    ac: true,
    category: "Berline",
    image: "images/SYMBOL-1.jpg",
    gallery: [
      "images/SYMBOL-1.jpg",
      "images/SYMBOL-2.jpg",
      "images/SYMBOL-3.jpg",
      "images/SYMBOL-4.jpg",
      "images/SYMBOL-5.jpg",
      "images/SYMBOL-6.jpg",
      "images/SYMBOL-7.jpg",
    ],
    imageWidth: 822,
    imageHeight: 800,
  },
  {
    id: "skoda-fabia",
    name: "Skoda Fabia",
    price: 6500,
    fuel: "Essence",
    gearbox: "Manuelle",
    seats: 5,
    ac: true,
    category: "Citadine",
    image: "images/FABIA-1.png",
    gallery: [
      "images/FABIA-1.png",
      "images/FABIA-2.png",
      "images/FABIA-3.png",
      "images/FABIA-4.png",
      "images/FABIA-5.png",
      "images/FABIA-6.png",
      "images/FABIA-7.png",
    ],
    imageWidth: 600,
    imageHeight: 800,
  },
  {
    id: "renault-clio-4",
    name: "Renault Clio 4",
    price: 6500,
    fuel: "Diesel",
    gearbox: "Manuelle",
    seats: 5,
    ac: true,
    category: "Citadine",
    image: "images/CLIO-1.png",
    gallery: [
      "images/CLIO-1.png",
      "images/CLIO-2.png",
      "images/CLIO-3.png",
      "images/CLIO-4.png",
      "images/CLIO-5.png",
      "images/CLIO-6.png",
      "images/CLIO-7.png",
    ],
    imageWidth: 1200,
    imageHeight: 1200,
  },
  {
    id: "renault-clio-5",
    name: "Renault Clio 5",
    price: 7000,
    fuel: "Essence",
    gearbox: "Manuelle",
    seats: 5,
    ac: true,
    category: "Citadine",
    image: "images/clio-v.png",
    gallery: [
      "images/clio-v.png",
      "images/clio-v.png",
      "images/clio-v.png",
      "images/clio-v.png",
      "images/clio-v.png",
    ],
    imageWidth: 600,
    imageHeight: 400,
  },
  {
    id: "seat-arona",
    name: "Seat Arona",
    price: 8000,
    fuel: "Essence",
    gearbox: "Automatique",
    seats: 5,
    ac: true,
    category: "Crossover",
    image: "images/ARONA-1.jpg",
    gallery: [
      "images/ARONA-1.jpg",
      "images/ARONA-2.jpg",
      "images/ARONA-3.jpg",
      "images/ARONA-4.jpg",
      "images/ARONA-5.jpg",
      "images/ARONA-6.jpg",
      "images/ARONA-7.jpg",
    ],
    imageWidth: 600,
    imageHeight: 800,
  },
  {
    id: "seat-arona-fr",
    name: "Seat Arona FR",
    price: 8000,
    fuel: "Essence",
    gearbox: "Automatique",
    seats: 5,
    ac: true,
    category: "Crossover",
    image: "images/ARONA-FR-1.png",
    gallery: [
      "images/ARONA-FR-1.png",
      "images/ARONA-FR-2.png",
      "images/ARONA-FR-3.png",
      "images/ARONA-FR-4.png",
      "images/ARONA-FR-5.png",
      "images/ARONA-FR-6.png",
      "images/ARONA-FR-7.png",
    ],
    imageWidth: 800,
    imageHeight: 800,
  },
];

const galleryState = {
  vehicle: null,
  index: 0,
  modal: null,
  image: null,
  title: null,
  counter: null,
  closeButton: null,
  lastFocus: null,
  touchStartX: 0,
  touchStartY: 0,
};

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initDates();
  populateVehicleSelect();
  preselectVehicleFromUrl();
  initReservationForm();
  renderFeaturedVehicles();
  renderCatalogue();
  initFilters();
  initContactForm();
  initRevealAnimations();
  initHeroShowcaseCarousel();
  initVehicleGallery();
  initFloatingWhatsApp();
});

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  if (!toggle) return;

  const setMenuOpen = (opened) => {
    document.body.classList.toggle("nav-open", opened);
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.setAttribute(
      "aria-label",
      opened ? "Fermer le menu" : "Ouvrir le menu",
    );
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(!document.body.classList.contains("nav-open"));
  });

  document
    .querySelectorAll(".main-nav a")
    .forEach((link) =>
      link.addEventListener("click", () => setMenuOpen(false)),
    );
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

function initDates() {
  const today = getTodayInputValue();
  const start = document.getElementById("dateDebut");
  const end = document.getElementById("dateFin");
  if (start) start.min = today;
  if (end) end.min = today;
  if (start && end) {
    start.addEventListener("change", () => {
      end.min = start.value || today;
      if (end.value && start.value && end.value < start.value)
        end.value = start.value;
      updateReservationSummary();
    });
    end.addEventListener("change", updateReservationSummary);
  }
}

function populateVehicleSelect() {
  const select = document.getElementById("vehicule");
  if (!select) return;
  vehicles.forEach((v) => {
    const option = document.createElement("option");
    option.value = v.id;
    option.textContent = `${v.name} — ${formatPrice(v.price)} / jour`;
    select.appendChild(option);
  });
  select.addEventListener("change", updateReservationSummary);
}

function preselectVehicleFromUrl() {
  const select = document.getElementById("vehicule");
  if (!select) return;
  const params = new URLSearchParams(window.location.search);
  const vehicleId = params.get("vehicule");
  if (vehicleId && vehicles.some((v) => v.id === vehicleId)) {
    select.value = vehicleId;
    setTimeout(
      () =>
        document
          .getElementById("reservation")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      120,
    );
    updateReservationSummary();
  }
}

function initReservationForm() {
  const form = document.getElementById("reservationForm");
  if (!form) return;
  form.addEventListener("input", (event) => {
    clearFieldError(event.target);
    updateReservationSummary();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(form);
    const data = getReservationData();
    const valid = validateReservation(form, data);
    if (!valid) return;
    const vehicle = vehicles.find((v) => v.id === data.vehicleId);
    const total = calculateTotal(vehicle.price, data.dateDebut, data.dateFin);
    const message = buildReservationMessage(data, vehicle, total);
    setHiddenValue(
      form,
      "_subject",
      `Nouvelle réservation - ${vehicle.name} - AZUL Location`,
    );
    setHiddenValue(form, "vehicule_nom", vehicle.name);
    setHiddenValue(form, "duree_location", `${total.days} jour(s)`);
    setHiddenValue(form, "prix_estime", formatPrice(total.price));
    setHiddenValue(
      form,
      "telephone_complet",
      `${data.indicatif} ${data.telephone}`,
    );
    setHiddenValue(
      form,
      "dates_lisibles",
      `${formatDate(data.dateDebut)} au ${formatDate(data.dateFin)}`,
    );
    openWhatsApp(message);
    form.submit();
  });
}

function getReservationData() {
  return {
    nom: valueOf("nom"),
    prenom: valueOf("prenom"),
    pointRetrait: valueOf("pointRetrait"),
    vehicleId: valueOf("vehicule"),
    dateDebut: valueOf("dateDebut"),
    dateFin: valueOf("dateFin"),
    indicatif: valueOf("indicatif"),
    telephone: valueOf("telephone"),
    email: valueOf("email"),
    message: valueOf("message"),
  };
}

function validateReservation(form, data) {
  let isValid = true;
  const today = getTodayInputValue();
  const required = [
    ["nom", "Nom obligatoire"],
    ["prenom", "Prénom obligatoire"],
    ["pointRetrait", "Point de retrait obligatoire"],
    ["vehicule", "Véhicule obligatoire"],
    ["dateDebut", "Date de début obligatoire"],
    ["dateFin", "Date de fin obligatoire"],
    ["telephone", "Téléphone obligatoire"],
  ];
  required.forEach(([id, msg]) => {
    if (!valueOf(id)) {
      showError(id, msg);
      isValid = false;
    }
  });
  if (data.dateDebut && data.dateDebut < today) {
    showError(
      "dateDebut",
      "La date de début doit être à partir d’aujourd’hui.",
    );
    isValid = false;
  }
  if (data.dateFin && data.dateFin < today) {
    showError("dateFin", "La date de fin doit être à partir d’aujourd’hui.");
    isValid = false;
  }
  if (data.dateDebut && data.dateFin && data.dateFin < data.dateDebut) {
    showError(
      "dateFin",
      "La date de fin doit être identique ou après la date de début.",
    );
    isValid = false;
  }
  if (data.telephone && !/^\+?[0-9\s().-]{7,20}$/.test(data.telephone)) {
    showError("telephone", "Numéro de téléphone invalide.");
    isValid = false;
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    showError("email", "Adresse email invalide.");
    isValid = false;
  }
  if (!isValid) form.querySelector(".error")?.focus();
  return isValid;
}

function buildReservationMessage(data, vehicle, total) {
  return [
    "Bonjour AZUL Location, je souhaite réserver un véhicule.",
    "",
    `Nom : ${data.nom}`,
    `Prénom : ${data.prenom}`,
    `Véhicule : ${vehicle.name}`,
    `Point de retrait : ${data.pointRetrait}`,
    `Date de début : ${formatDate(data.dateDebut)}`,
    `Date de fin : ${formatDate(data.dateFin)}`,
    `Durée : ${total.days} jour(s)`,
    `Prix estimé : ${formatPrice(total.price)}`,
    `Téléphone : ${data.indicatif} ${data.telephone}`,
    `Email : ${data.email || "Non renseigné"}`,
    `Message : ${data.message || "Aucun message"}`,
    "",
    "Merci de me confirmer la disponibilité.",
  ].join("\n");
}

function updateReservationSummary() {
  const box = document.getElementById("reservationSummary");
  const select = document.getElementById("vehicule");
  const start = valueOf("dateDebut");
  const end = valueOf("dateFin");
  const today = getTodayInputValue();
  if (!box || !select) return;
  const vehicle = vehicles.find((v) => v.id === select.value);
  box.classList.remove("is-ready");
  if (!vehicle) {
    box.textContent =
      "Sélectionnez un véhicule et vos dates pour afficher l’estimation.";
    return;
  }
  if (!start || !end) {
    box.textContent = `${vehicle.name} : ${formatPrice(vehicle.price)} / jour. Ajoutez vos dates pour calculer le total.`;
    return;
  }
  if (start < today || end < today) {
    box.textContent =
      "Date invalide : choisissez une date à partir d’aujourd’hui.";
    return;
  }
  if (end < start) {
    box.textContent =
      "Date invalide : la date de fin doit être identique ou après la date de début.";
    return;
  }
  const total = calculateTotal(vehicle.price, start, end);
  box.classList.add("is-ready");
  box.innerHTML = `
    <strong>${escapeHtml(vehicle.name)}</strong>
    <span>${total.days} jour(s)</span>
    <span>Total estimé : ${formatPrice(total.price)}</span>
  `;
}

function calculateTotal(pricePerDay, start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  const ms = endDate - startDate;
  const days = Math.max(1, Math.ceil(ms / 86400000));
  return { days, price: days * pricePerDay };
}

function renderFeaturedVehicles() {
  const target = document.getElementById("featuredVehicles");
  if (!target) return;
  const featuredIds = ["renault-symbol", "skoda-fabia", "renault-clio-4"];
  const featured = featuredIds
    .map((id) => vehicles.find((vehicle) => vehicle.id === id))
    .filter(Boolean);
  target.innerHTML = featured.map(vehicleCard).join("");
}

function renderCatalogue(list = vehicles) {
  const grid = document.getElementById("catalogueGrid");
  const empty = document.getElementById("emptyCatalogue");
  if (!grid) return;
  grid.innerHTML = list.map(vehicleCard).join("");
  if (empty) empty.hidden = list.length !== 0;
}

function vehicleCard(v) {
  const alt = v.name.replace(/"/g, "&quot;");
  return `<article class="vehicle-card reveal" data-price="${v.price}" data-fuel="${v.fuel}" data-gearbox="${v.gearbox}" data-category="${v.category}">
    <div class="vehicle-media">
      <button class="vehicle-gallery-trigger" type="button" data-vehicle-id="${v.id}" aria-label="Voir les photos de ${alt}">
        <img src="${v.image}" alt="${alt}" width="${v.imageWidth}" height="${v.imageHeight}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.closest('.vehicle-media').classList.add('image-missing');">
        <span class="gallery-badge">${v.gallery.length} photos</span>
      </button>
    </div>
    <div class="vehicle-body">
      <div class="vehicle-top"><h3>${v.name}</h3><span class="price-pill">${formatPrice(v.price)}/j</span></div>
      <div class="specs"><span>⛽ ${v.fuel}</span><span>⚙️ ${v.gearbox}</span><span>👥 ${v.seats} places</span><span>❄️ Climatisation</span></div>
      <a class="btn btn-primary" href="index.html?vehicule=${encodeURIComponent(v.id)}#reservation" aria-label="Réserver ${alt}">Réserver</a>
    </div>
  </article>`;
}

function initFilters() {
  const price = document.getElementById("filterPrice");
  const fuel = document.getElementById("filterFuel");
  const gearbox = document.getElementById("filterGearbox");
  const category = document.getElementById("filterCategory");
  const sort = document.getElementById("filterSort");
  const reset = document.getElementById("resetFilters");
  if (!price || !fuel || !gearbox || !category) return;
  const apply = () => {
    const minPrice = price.value === "all" ? 0 : Number(price.value);
    const filtered = vehicles
      .filter(
        (v) =>
          v.price >= minPrice &&
          (fuel.value === "all" || v.fuel === fuel.value) &&
          (gearbox.value === "all" || v.gearbox === gearbox.value) &&
          (category.value === "all" || v.category === category.value),
      )
      .sort((a, b) => {
        if (sort?.value === "price-desc") return b.price - a.price;
        return a.price - b.price;
      });
    renderCatalogue(filtered);
    initRevealAnimations();
  };
  [price, fuel, gearbox, category, sort]
    .filter(Boolean)
    .forEach((el) => el.addEventListener("change", apply));
  reset?.addEventListener("click", () => {
    price.value = fuel.value = gearbox.value = category.value = "all";
    if (sort) sort.value = "price-asc";
    apply();
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const whatsAppButton = document.getElementById("contactWhatsAppButton");
  if (!form) return;
  form.addEventListener("input", (event) => clearFieldError(event.target));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateContact(form)) return;
    const message = buildContactMessage();
    setHiddenValue(
      form,
      "_subject",
      `Contact AZUL Location - ${valueOf("contactSujet")}`,
    );
    openWhatsApp(message);
    form.submit();
  });
  whatsAppButton?.addEventListener("click", () => {
    if (!validateContact(form)) return;
    openWhatsApp(buildContactMessage());
  });
}

function validateContact(form) {
  clearErrors(form);
  let ok = true;
  [
    ["contactNom", "Nom obligatoire"],
    ["contactEmail", "Email obligatoire"],
    ["contactSujet", "Sujet obligatoire"],
    ["contactMessage", "Message obligatoire"],
  ].forEach(([id, msg]) => {
    if (!valueOf(id)) {
      showError(id, msg);
      ok = false;
    }
  });
  if (
    valueOf("contactEmail") &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueOf("contactEmail"))
  ) {
    showError("contactEmail", "Adresse email invalide.");
    ok = false;
  }
  if (!ok) form.querySelector(".error")?.focus();
  return ok;
}

function buildContactMessage() {
  return [
    "Bonjour AZUL Location, je vous contacte depuis le site.",
    "",
    `Nom : ${valueOf("contactNom")}`,
    `Email : ${valueOf("contactEmail")}`,
    `Téléphone : ${valueOf("contactPhone") || "Non renseigné"}`,
    `Sujet : ${valueOf("contactSujet")}`,
    `Message : ${valueOf("contactMessage")}`,
  ].join("\n");
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  elements.forEach((el) => observer.observe(el));
}

function initVehicleGallery() {
  createVehicleGalleryModal();

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".vehicle-gallery-trigger");
    if (!trigger) return;
    const vehicle = vehicles.find((v) => v.id === trigger.dataset.vehicleId);
    if (vehicle) openVehicleGallery(vehicle, 0);
  });

  document.addEventListener("keydown", (event) => {
    if (!galleryState.modal || galleryState.modal.hidden) return;
    if (event.key === "Escape") closeVehicleGallery();
    if (event.key === "ArrowRight")
      showVehicleGalleryImage(galleryState.index + 1);
    if (event.key === "ArrowLeft")
      showVehicleGalleryImage(galleryState.index - 1);
  });
}

function initHeroShowcaseCarousel() {
  const showcase = document.querySelector(".hero-showcase");
  const image = document.querySelector(".hero-car-main");
  const price = document.querySelector(".showcase-price");
  const label = document.querySelector(".showcase-label");
  if (!showcase || !image || !price || !label) return;

  const slides = [
    {
      image: "images/ARONA-FR-1-sans-fond.png",
      alt: "Seat Arona FR disponible à la location",
      name: "Seat Arona FR",
      price: 8000,
    },
    {
      image: "images/SYMBOL-1-sans-fond.png",
      alt: "Renault Symbol disponible à la location",
      name: "Renault Symbol",
      price: 5500,
    },
    {
      image: "images/FABIA-1-sans-fond.png",
      alt: "Skoda Fabia disponible à la location",
      name: "Skoda Fabia",
      price: 6500,
    },
    {
      image: "images/ARONA-1-sans-fond.png",
      alt: "Dacia Sandero disponible à la location",
      name: "SEAT Arona",
      price: 8000,
    },
    {
      image: "images/CLIO-1-sans-fond.png",
      alt: "Renault Clio disponible à la location",
      name: "Renault Clio 4",
      price: 5500,
    },
  ];

  slides.forEach((slide) => {
    const preload = new Image();
    preload.src = slide.image;
  });

  let currentIndex = 0;
  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    const slide = slides[currentIndex];
    showcase.classList.add("is-switching");

    window.setTimeout(() => {
      image.src = slide.image;
      image.alt = slide.alt;
      price.textContent = `À partir de ${formatPrice(slide.price)} / jour`;
      label.textContent = slide.name;
      showcase.classList.remove("is-switching");
    }, 350);
  }, 3800);
}

function createVehicleGalleryModal() {
  if (galleryState.modal) return;
  const modal = document.createElement("div");
  modal.className = "vehicle-lightbox";
  modal.id = "vehicleLightbox";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Galerie photos du véhicule");
  modal.innerHTML = `
    <div class="vehicle-lightbox-backdrop" data-gallery-close></div>
    <div class="vehicle-lightbox-panel">
      <button class="vehicle-lightbox-close" type="button" data-gallery-close aria-label="Fermer la galerie">×</button>
      <button class="vehicle-lightbox-nav prev" type="button" data-gallery-prev aria-label="Photo précédente">‹</button>
      <figure class="vehicle-lightbox-figure">
        <img class="vehicle-lightbox-image" alt="">
        <figcaption class="vehicle-lightbox-caption">
          <strong></strong>
          <span></span>
        </figcaption>
      </figure>
      <button class="vehicle-lightbox-nav next" type="button" data-gallery-next aria-label="Photo suivante">›</button>
    </div>
  `;
  document.body.appendChild(modal);

  galleryState.modal = modal;
  galleryState.image = modal.querySelector(".vehicle-lightbox-image");
  galleryState.title = modal.querySelector(".vehicle-lightbox-caption strong");
  galleryState.counter = modal.querySelector(".vehicle-lightbox-caption span");
  galleryState.closeButton = modal.querySelector(".vehicle-lightbox-close");

  modal
    .querySelectorAll("[data-gallery-close]")
    .forEach((control) =>
      control.addEventListener("click", closeVehicleGallery),
    );
  modal
    .querySelector("[data-gallery-prev]")
    .addEventListener("click", () =>
      showVehicleGalleryImage(galleryState.index - 1),
    );
  modal
    .querySelector("[data-gallery-next]")
    .addEventListener("click", () =>
      showVehicleGalleryImage(galleryState.index + 1),
    );

  const panel = modal.querySelector(".vehicle-lightbox-panel");
  panel.addEventListener("touchstart", (event) => {
    galleryState.touchStartX = event.changedTouches[0].clientX;
    galleryState.touchStartY = event.changedTouches[0].clientY;
  });
  panel.addEventListener("touchend", (event) => {
    const dx = event.changedTouches[0].clientX - galleryState.touchStartX;
    const dy = event.changedTouches[0].clientY - galleryState.touchStartY;
    if (Math.abs(dx) < 45 || Math.abs(dy) > 80) return;
    showVehicleGalleryImage(galleryState.index + (dx < 0 ? 1 : -1));
  });
}

function openVehicleGallery(vehicle, index = 0) {
  galleryState.vehicle = vehicle;
  galleryState.index = index;
  galleryState.lastFocus = document.activeElement;
  galleryState.modal.hidden = false;
  document.body.classList.add("gallery-open");
  showVehicleGalleryImage(index);
  galleryState.closeButton.focus();
}

function closeVehicleGallery() {
  galleryState.modal.hidden = true;
  document.body.classList.remove("gallery-open");
  galleryState.image.removeAttribute("src");
  galleryState.lastFocus?.focus?.();
  galleryState.vehicle = null;
}

function showVehicleGalleryImage(index) {
  const vehicle = galleryState.vehicle;
  if (!vehicle) return;
  const gallery = vehicle.gallery?.length ? vehicle.gallery : [vehicle.image];
  galleryState.index = (index + gallery.length) % gallery.length;
  const src = gallery[galleryState.index];
  galleryState.image.src = src;
  galleryState.image.alt = `${vehicle.name} - photo ${galleryState.index + 1}`;
  galleryState.title.textContent = vehicle.name;
  galleryState.counter.textContent = `${galleryState.index + 1} / ${gallery.length}`;
}

function initFloatingWhatsApp() {
  if (document.querySelector(".floating-whatsapp")) return;
  const link = document.createElement("a");
  link.className = "floating-whatsapp";
  link.href = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.defaultWhatsAppMessage)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Contacter AZUL Location sur WhatsApp");
  link.innerHTML =
    '<img src="images/whatsapp-icon.png" alt="" width="26" height="26" decoding="async">';
  document.body.appendChild(link);
}

function valueOf(id) {
  return document.getElementById(id)?.value.trim() || "";
}
function setHiddenValue(form, name, value) {
  const field = Array.from(form.elements).find((el) => el.name === name);
  if (field) field.value = value;
}
function getTodayInputValue() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().split("T")[0];
}
function formatPrice(n) {
  return `${Number(n).toLocaleString("fr-FR")} DA`;
}
function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("fr-FR");
}
function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
}
function openWhatsApp(message) {
  window.open(
    `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}
function clearErrors(scope = document) {
  scope.querySelectorAll(".error-message").forEach((el) => el.remove());
  scope.querySelectorAll(".error").forEach(clearFieldError);
}
function clearFieldError(field) {
  if (!field?.classList) return;
  field.classList.remove("error");
  field.removeAttribute("aria-invalid");
  field.removeAttribute("aria-describedby");
}
function showError(id, message) {
  const field = document.getElementById(id);
  if (!field) return;
  const errorId = `${id}Error`;
  document.getElementById(errorId)?.remove();
  field.classList.add("error");
  field.setAttribute("aria-invalid", "true");
  field.setAttribute("aria-describedby", errorId);
  const wrapper = field.closest(".field") || field.parentElement;
  const error = document.createElement("div");
  error.id = errorId;
  error.className = "error-message";
  error.setAttribute("role", "alert");
  error.textContent = message;
  wrapper.appendChild(error);
}
