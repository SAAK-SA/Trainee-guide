/**
 * Bilingual (AR/EN) instant language switcher.
 * Reads copy from the `translations` object defined in translations.js.
 */
(function () {
  const STORAGE_KEY = "saak-lang";
  const RTL_LANGS = ["ar"];

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    document.documentElement.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getNested(dict, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    const labelEl = document.querySelector("[data-lang-label]");
    if (labelEl) labelEl.textContent = lang === "ar" ? "EN" : "AR";

    document.title = lang === "ar"
      ? "مركز ساك تيم للتدريب | دليل المتدرب"
      : "SAAK Team Training Center | Trainee Guide";

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangSwitch() {
    const saved = localStorage.getItem(STORAGE_KEY) || "ar";
    applyLanguage(saved);

    const btn = document.getElementById("lang-switch");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const current = document.documentElement.lang;
      applyLanguage(current === "ar" ? "en" : "ar");
    });
  }

  document.addEventListener("DOMContentLoaded", initLangSwitch);
})();
