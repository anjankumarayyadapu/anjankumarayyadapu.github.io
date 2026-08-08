const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");
const viewLinks = document.querySelectorAll(".nav-link-view");
const pageViews = document.querySelectorAll(".page-view");
const defaultView = "home";

function normalizeViewId(viewId) {
  if (viewId === "skills") {
    return "experience";
  }
  return viewId;
}

function setActiveView(viewId) {
  const target = normalizeViewId(viewId) || defaultView;

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

const rawInitialView = location.hash.replace("#", "");
const initialView = normalizeViewId(rawInitialView) || defaultView;
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

document.querySelectorAll(".video-preview-play").forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.closest(".video-preview");
    if (!wrapper || wrapper.classList.contains("video-preview-active")) {
      return;
    }

    const videoId = wrapper.dataset.videoId;
    const videoTitle = wrapper.dataset.videoTitle || "YouTube video";
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = videoTitle;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    wrapper.replaceChildren(iframe);
    wrapper.classList.add("video-preview-active");
  });
});
