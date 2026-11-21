// MarinoDeep - interactions

document.addEventListener("DOMContentLoaded", () => {
  // Sticky navigation background on scroll
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const setMenu = (open) => {
    links.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setMenu(!links.classList.contains("is-open")));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Background video: hide it if the file is missing so the animated ocean fallback shows
  const video = document.getElementById("heroVideo");
  if (video) {
    const source = video.querySelector("source");
    const hide = () => video.classList.add("is-hidden");
    video.addEventListener("error", hide);
    if (source) source.addEventListener("error", hide);
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") playAttempt.catch(() => {});
  }

  // Highlight the menu link for the section in view
  const navAnchors = Array.from(links.querySelectorAll('a:not(.nav__cta)'));
  const targets = navAnchors
    .map((a) => {
      const href = a.getAttribute("href") || "";
      return href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
    })
    .filter((t) => t && t.tagName === "SECTION");
  const spy = () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let current = targets[0];
    targets.forEach((t) => {
      if (t.getBoundingClientRect().top + window.scrollY <= y) current = t;
    });
    navAnchors.forEach((a) =>
      a.classList.toggle("is-active", current && a.getAttribute("href") === "#" + current.id)
    );
  };
  spy();
  window.addEventListener("scroll", spy, { passive: true });

  // Reveal sections on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
  } else {
    items.forEach((el) => el.classList.add("is-visible"));
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalPreview');
  const modalCaption = document.getElementById('imgModalCaption');
  const closeBtn = document.getElementById('imgModalClose');

  // Har "View Image" button par click listener
  document.querySelectorAll('.card__img-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      modalImg.src = btn.getAttribute('data-image');
      modalImg.alt = btn.getAttribute('data-title');
      modalCaption.textContent = btn.getAttribute('data-title');
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  // Modal band karne ka function
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  };

  closeBtn.addEventListener('click', closeModal);

  // Dark background par click karne se band ho
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape key se band ho
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});