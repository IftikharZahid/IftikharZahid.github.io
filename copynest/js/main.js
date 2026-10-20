(function () {
  "use strict";
  const config = window.COPYNEST_CONFIG || {};
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
  }

  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const expanded = button.getAttribute("aria-expanded") === "true";
      const answer = button.closest(".faq-item").querySelector(".faq-answer");
      button.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
    });
  });

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
  document.querySelectorAll("[data-app-name]").forEach(function (element) {
    element.textContent = config.appName || "CopyNest";
  });

  document.querySelectorAll("[data-play-link]").forEach(function (link) {
    const url = config.googlePlayUrl || "";
    const internalTesting = config.publicationStatus === "internal-testing" &&
      /^https:\/\/play\.google\.com\/apps\/internaltest\/[0-9]+$/.test(url);
    const published = config.publicationStatus === "published" &&
      /^https:\/\/play\.google\.com\/store\/apps\/details\?id=[A-Za-z0-9._]+/.test(url);
    if (internalTesting || published) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      const arrow = link.querySelector("span[aria-hidden]");
      link.textContent = internalTesting ? "Join Internal Testing " : "Get it on Google Play ";
      if (arrow) link.appendChild(arrow);
      link.setAttribute("aria-label", internalTesting ? "Join CopyNest Google Play internal testing (eligible testers only)" : "Get CopyNest on Google Play");
    } else {
      link.href = "support.html";
      link.removeAttribute("target");
      link.removeAttribute("rel");
      link.textContent = "Coming Soon ↗";
      link.setAttribute("aria-label", "CopyNest is coming soon. Visit support for information.");
    }
  });

  document.querySelectorAll("[data-support-email]").forEach(function (element) {
    const email = config.supportEmail || "";
    if (email && !email.startsWith("REPLACE_WITH") && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      element.href = "mailto:" + email;
      element.textContent = email;
    } else {
      element.removeAttribute("href");
      element.textContent = "Support email not configured yet";
    }
  });

  document.querySelectorAll("[data-developer-name]").forEach(function (element) {
    const name = config.developerName || "";
    element.textContent = name && !name.startsWith("REPLACE_WITH") ? name : "Developer identity to be configured";
  });

  // Only add subtle reveal behavior when motion is not reduced.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const revealItems = document.querySelectorAll(".feature-card, .step, .preview-card");
    revealItems.forEach(function (item) { item.classList.add("reveal-ready"); });
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  }
})();
