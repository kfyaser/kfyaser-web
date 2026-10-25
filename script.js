// KF. Yaser portfolio — contact form submits directly to Formspree from index.html.

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const opening = mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", String(opening));
  menuBtn.setAttribute("aria-label", opening ? "Close menu" : "Open menu");
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "Open menu");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
