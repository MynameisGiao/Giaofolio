gsap.registerPlugin(ScrollTrigger);

/* ================= BUTTON HOVER ================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () =>
    gsap.to(btn, { scale: 1.05, duration: 0.2 })
  );
  btn.addEventListener("mouseleave", () =>
    gsap.to(btn, { scale: 1, duration: 0.2 })
  );
});

/* ================= CARD HOVER ================= */
document.querySelectorAll(".card, .skill-card, .project-card").forEach(card => {
  card.addEventListener("mouseenter", () =>
    gsap.to(card, { scale: 1.03, duration: 0.2 })
  );
  card.addEventListener("mouseleave", () =>
    gsap.to(card, { scale: 1, duration: 0.2 })
  );
});

/* ================= MASCOT (ONE SOURCE OF TRUTH) ================= */
gsap.to(".about-mascot, .contact-mascot", {
  y: -10,
  duration: 2.8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

/* ================= HERO BG PARALLAX ================= */
gsap.to(".hero-scene", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    scrub: true
  },
  backgroundPosition: "50% 60%"
});

/* ================= PROJECT CARD SCROLL ================= */
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 70%"
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power3.out"
});

/* ================= CONTACT ITEM SCROLL ================= */
gsap.from(".contact-item", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 75%"
  },
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.12,
  ease: "power3.out"
});

/* ================= SCROLL TO TOP ================= */
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  gsap.to(scrollBtn, {
    opacity: window.scrollY > 400 ? 1 : 0,
    pointerEvents: window.scrollY > 400 ? "auto" : "none"
  });
});

scrollBtn?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ================= PROJECT MODAL ================= */
const modal = document.querySelector(".project-modal");
const modalContent = modal.querySelector(".modal-content");

document.querySelectorAll(".view-project").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.classList.add("modal-open");

    modal.querySelector(".modal-title").textContent = btn.dataset.title || "";
    modal.querySelector(".modal-desc").textContent = btn.dataset.desc || "";
    modal.querySelector(".modal-tech").textContent = btn.dataset.tech || "";

    const img = modal.querySelector(".modal-image");
    if (btn.dataset.image) img.src = btn.dataset.image;

    gsap.fromTo(
      modalContent,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" }
    );
  });
});

function closeModal() {
  gsap.to(modalContent, {
    scale: 0.9,
    opacity: 0,
    duration: 0.25,
    onComplete: () => {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
}

modal.querySelector(".modal-close")?.addEventListener("click", closeModal);
modal.querySelector(".modal-overlay")?.addEventListener("click", closeModal);
modal.querySelector(".modal-close-btn")?.addEventListener("click", closeModal);

/* ================= TYPING ================= */
new Typed(".typing", {
  strings: ["Playable Developer", "Game Developer", "Creative Gameplay Engineer"],
  typeSpeed: 90,
  backSpeed: 60,
  loop: true
});

/* ================= MOBILE MENU ================= */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu.querySelectorAll("[data-link]");
let menuOpen = false;

const menuTL = gsap.timeline({ paused: true });

menuTL
  .to(mobileMenu, {
    y: "0%",
    duration: 0.6,
    ease: "power4.out"
  })
  .from(
    mobileLinks,
    {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.35,
      ease: "power3.out"
    },
    "-=0.3"
  );

burger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuOpen ? menuTL.play() : menuTL.reverse();
  document.body.classList.toggle("modal-open", menuOpen);
});

mobileLinks.forEach(link =>
  link.addEventListener("click", () => {
    menuOpen = false;
    menuTL.reverse();
    document.body.classList.remove("modal-open");
  })
);

/* ================= SCROLL SPY ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});
