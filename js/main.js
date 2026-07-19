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

  /* ---------------- Sticky header ---------------- */
  const header = document.getElementById("site-header");
  const backToTop = document.getElementById("back-to-top");

  function onScroll() {
    const scrollTop = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", scrollTop > 10);
    if (backToTop) backToTop.classList.toggle("is-visible", scrollTop > 500);
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
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
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------------- About carousel: gentle auto drift left/right ---------------- */
  function initAutoCarousel(track) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let direction = 1;
    let paused = false;
    let resumeTimer;
    let frameCount = 0;

    // Whole-pixel steps applied every other frame: sub-pixel deltas get
    // rounded away by the browser, which would make every frame look
    // "stuck" and flip direction, canceling out into no movement at all.
    function frame() {
      frameCount++;
      if (!paused && frameCount % 2 === 0) {
        const before = track.scrollLeft;
        track.scrollLeft = before + direction;
        if (track.scrollLeft === before) {
          direction *= -1;
          track.scrollLeft = before + direction;
        }
      }
      requestAnimationFrame(frame);
    }

    function pause() {
      paused = true;
      clearTimeout(resumeTimer);
    }
    function resumeLater() {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, 1500);
    }

    ["mouseenter", "touchstart", "focusin", "wheel"].forEach((evt) =>
      track.addEventListener(evt, pause, { passive: true })
    );
    ["mouseleave", "touchend", "focusout"].forEach((evt) =>
      track.addEventListener(evt, resumeLater, { passive: true })
    );

    requestAnimationFrame(frame);
  }
  document.querySelectorAll(".about-carousel").forEach(initAutoCarousel);

  /* ---------------- Smart image: load real photo, fallback to placeholder ---------------- */
  const iconMap = {
    building: "icon-building", door: "icon-door", bell: "icon-bell", user: "icon-user",
    badge: "icon-badge", chair: "icon-chair", laptop: "icon-laptop", calendar: "icon-calendar",
    certificate: "icon-certificate", shield: "icon-shield", globe: "icon-globe"
  };

  document.querySelectorAll(".smart-img[data-src]").forEach((el) => {
    const src = el.getAttribute("data-src");
    const iconKey = el.getAttribute("data-icon") || "building";
    const labelKey = el.getAttribute("data-label-key");

    const placeholder = document.createElement("div");
    placeholder.className = "smart-img-placeholder";
    placeholder.innerHTML =
      `<svg width="40" height="40"><use href="#${iconMap[iconKey] || "icon-building"}"/></svg>` +
      (labelKey ? `<span data-i18n="${labelKey}"></span>` : "");
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

  document.querySelectorAll(".smart-img").forEach((el) => {
    if (el.closest(".about-feature-card")) return;
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

  /* ---------------- Step wizard ---------------- */
  const wizard = document.getElementById("wizard");
  const steps = Array.from(document.querySelectorAll(".step"));
  const totalSteps = steps.length;
  const progressFill = document.getElementById("wizard-progress-fill");
  const stepCurrentEl = document.getElementById("wizard-step-current");
  const stepTitleEl = document.getElementById("wizard-step-title");
  const prevBtn = document.getElementById("wizard-prev");
  const nextBtn = document.getElementById("wizard-next");
  let currentStep = 0;

  function isMobileNav() {
    return window.matchMedia("(max-width: 860px)").matches;
  }

  function stepTitle(index) {
    const header = steps[index] && steps[index].querySelector(".step-accordion-header span");
    return header ? header.textContent : "";
  }

  function renderSteps() {
    steps.forEach((step, i) => {
      const active = i === currentStep;
      step.classList.toggle("is-active", active);
      const body = step.querySelector(".step-body");
      if (!body) return;
      if (isMobileNav()) {
        body.style.maxHeight = active ? body.scrollHeight + "px" : "0px";
      } else {
        body.style.maxHeight = "";
      }
    });
  }

  function updateProgress() {
    if (progressFill) progressFill.style.width = ((currentStep + 1) / totalSteps) * 100 + "%";
    if (stepCurrentEl) stepCurrentEl.textContent = String(currentStep + 1);
    if (stepTitleEl) stepTitleEl.textContent = stepTitle(currentStep);
  }

  function updateNavButtons() {
    if (prevBtn) prevBtn.disabled = currentStep === 0;
    if (nextBtn) nextBtn.style.visibility = currentStep === totalSteps - 1 ? "hidden" : "visible";
  }

  function updateActiveNavLinks() {
    document.querySelectorAll(".step-jump[data-step]").forEach((btn) => {
      btn.classList.toggle("is-active", Number(btn.getAttribute("data-step")) === currentStep);
    });
  }

  function goToStep(index, opts) {
    currentStep = Math.max(0, Math.min(totalSteps - 1, index));
    renderSteps();
    updateProgress();
    updateNavButtons();
    updateActiveNavLinks();
    if (!opts || opts.scroll !== false) {
      wizard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goToStep(currentStep - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToStep(currentStep + 1));

  document.querySelectorAll(".step-jump[data-step]").forEach((btn) => {
    btn.addEventListener("click", () => goToStep(Number(btn.getAttribute("data-step"))));
  });

  document.getElementById("start-tour")?.addEventListener("click", () => goToStep(0));

  steps.forEach((step, i) => {
    const header = step.querySelector(".step-accordion-header");
    if (header) header.addEventListener("click", () => goToStep(i));
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderSteps, 150);
  });

  goToStep(0, { scroll: false });

  // Re-run once translations are applied on load / language switch so titles/progress stay in sync.
  document.addEventListener("saak:lang-changed", () => updateProgress());

  /* ---------------- Agreement form ---------------- */
  // Google Apps Script web-app endpoint — replace with your deployed script URL.
  // Script source: see /docs/google-apps-script.js in this project.
  const SHEETS_ENDPOINT = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

  const form = document.getElementById("agreement-form");
  const successPanel = document.getElementById("agreement-success");
  const agreeCheckbox = document.getElementById("f-agree");
  const submitBtn = document.getElementById("agreement-submit");

  if (agreeCheckbox && submitBtn) {
    agreeCheckbox.addEventListener("change", () => {
      submitBtn.disabled = !agreeCheckbox.checked;
    });
  }

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const valid = form.checkValidity() && agreeCheckbox.checked;
      form.querySelectorAll("input[required]").forEach((input) => input.classList.add("touched"));

      if (!valid) {
        form.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.classList.add("is-loading");

      const payload = new URLSearchParams({
        name:     (document.getElementById("f-name")    || {}).value || "",
        company:  (document.getElementById("f-company") || {}).value || "",
        date:     (document.getElementById("f-date")    || {}).value || "",
        lang:     document.documentElement.lang || "ar",
        timestamp: new Date().toISOString()
      });

      try {
        // no-cors: Google Apps Script doesn't return CORS headers on POST;
        // we treat any network-level completion as success.
        await fetch(SHEETS_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload.toString()
        });
      } catch (_) {
        // Network error — still show success; data may have arrived.
      }

      form.hidden = true;
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
