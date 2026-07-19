/**
 * SAAK Team Training Center — site interactions.
 * Vanilla JS only. No external dependencies.
 */
(function () {
  "use strict";

  /* ---------------- Loading screen ---------------- */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    if (loader) setTimeout(() => loader.classList.add("is-hidden"), 350);
  });

  /* ---------------- Sticky header + scroll progress ---------------- */
  const header = document.getElementById("site-header");
  const progressBar = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = pct + "%";
    if (header) header.classList.toggle("is-scrolled", scrollTop > 10);
    if (backToTop) backToTop.classList.toggle("is-visible", scrollTop > 500);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.getElementById("nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Active nav on scroll ---------------- */
  const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(`.primary-nav a[href="#${entry.target.id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((sec) => navObserver.observe(sec));
  }

  /* ---------------- Reveal on scroll ---------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------------- Smart image: load real photo, fallback to placeholder ---------------- */
  const iconMap = {
    building: "icon-building", door: "icon-door", bell: "icon-bell", user: "icon-user",
    badge: "icon-badge", chair: "icon-chair", laptop: "icon-laptop", calendar: "icon-calendar"
  };

  document.querySelectorAll(".smart-img[data-src]").forEach((el) => {
    const src = el.getAttribute("data-src");
    const iconKey = el.getAttribute("data-icon") || "building";
    const labelKey = el.getAttribute("data-label-key");

    const placeholder = document.createElement("div");
    placeholder.className = "smart-img-placeholder";
    placeholder.innerHTML =
      `<svg width="40" height="40"><use href="#${iconMap[iconKey] || "icon-building"}"/></svg>` +
      `<span data-i18n="${labelKey || ""}"></span>`;
    el.appendChild(placeholder);
    if (labelKey && window.translations) {
      const lang = document.documentElement.lang || "ar";
      const parts = labelKey.split(".");
      let val = translations[lang];
      parts.forEach((p) => { val = val && val[p] !== undefined ? val[p] : null; });
      if (typeof val === "string") placeholder.querySelector("span").textContent = val;
    }

    const img = el.querySelector("img");
    const probe = new Image();
    probe.onload = () => {
      img.src = src;
      el.classList.add("is-loaded");
    };
    probe.onerror = () => { /* keep placeholder */ };
    probe.src = src;
  });

  /* ---------------- Lightbox ---------------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    if (!lightbox || !src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });

  document.querySelectorAll(".smart-img.is-loaded, .smart-img").forEach((el) => {
    el.style.cursor = "zoom-in";
    el.addEventListener("click", () => {
      const img = el.querySelector("img");
      if (img && img.getAttribute("src")) openLightbox(img.src, img.alt);
    });
  });

  const scheduleFullsize = document.getElementById("schedule-fullsize");
  if (scheduleFullsize) {
    scheduleFullsize.addEventListener("click", () => {
      const img = document.querySelector("#schedule-preview img");
      if (img && img.getAttribute("src")) openLightbox(img.src, "Training schedule");
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".accordion-item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });

      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });

  /* ---------------- Floor plan zoom / fullscreen ---------------- */
  const floorImg = document.getElementById("floorplan-img");
  const zoomIn = document.getElementById("floor-zoom-in");
  const zoomOut = document.getElementById("floor-zoom-out");
  const fullscreenBtn = document.getElementById("floor-fullscreen");
  let floorScale = 1;

  function setFloorScale(scale) {
    floorScale = Math.min(Math.max(scale, 1), 2.5);
    if (floorImg) floorImg.style.transform = `scale(${floorScale})`;
  }
  if (zoomIn) zoomIn.addEventListener("click", () => setFloorScale(floorScale + 0.25));
  if (zoomOut) zoomOut.addEventListener("click", () => setFloorScale(floorScale - 0.25));
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      const wrap = document.querySelector(".floorplan-wrap");
      if (!document.fullscreenElement) wrap.requestFullscreen?.();
      else document.exitFullscreen?.();
    });
  }

  /* ---------------- Signature pad ---------------- */
  const canvas = document.getElementById("signature-pad");
  const clearBtn = document.getElementById("signature-clear");
  let hasSignature = false;

  if (canvas) {
    const ctx = canvas.getContext("2d");
    let drawing = false;

    function resizeCanvas() {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.scale(ratio, ratio);
      ctx.strokeStyle = "#123a63";
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const point = e.touches ? e.touches[0] : e;
      return { x: point.clientX - rect.left, y: point.clientY - rect.top };
    }
    function start(e) { drawing = true; hasSignature = true; const p = getPos(e); ctx.beginPath(); ctx.moveTo(p.x, p.y); e.preventDefault(); }
    function move(e) { if (!drawing) return; const p = getPos(e); ctx.lineTo(p.x, p.y); ctx.stroke(); e.preventDefault(); }
    function end() { drawing = false; }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hasSignature = false;
      });
    }
  }

  /* ---------------- Agreement form ---------------- */
  const form = document.getElementById("agreement-form");
  const successPanel = document.getElementById("agreement-success");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let valid = form.checkValidity();
      form.querySelectorAll("input[required]").forEach((input) => input.classList.add("touched"));

      if (!hasSignature) valid = false;

      if (!valid) {
        form.reportValidity();
        return;
      }

      form.hidden = true;
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
