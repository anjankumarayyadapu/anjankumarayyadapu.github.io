const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");
const viewLinks = document.querySelectorAll(".nav-link-view");
const pageViews = document.querySelectorAll(".page-view");
const defaultView = "home";

function setActiveView(viewId) {
  const target = viewId || defaultView;

  pageViews.forEach((section) => {
    const isActive = section.dataset.view === target;
    section.classList.toggle("page-view-active", isActive);
    section.hidden = !isActive;
  });

  viewLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.view === target);
  });

  if (location.hash.replace("#", "") !== target) {
    history.replaceState(null, "", `#${target}`);
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.view);

    if (navLinks && navToggle) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const initialView = location.hash.replace("#", "") || defaultView;
const hasInitialView = Array.from(pageViews).some(
  (section) => section.dataset.view === initialView
);
setActiveView(hasInitialView ? initialView : defaultView);

window.addEventListener("hashchange", () => {
  const viewId = location.hash.replace("#", "");
  if (viewId) {
    setActiveView(viewId);
  }
});
