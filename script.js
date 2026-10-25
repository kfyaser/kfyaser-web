// KF. Yaser portfolio — personalize this before publishing.
const OWNER_EMAIL = "karimiabahad@gmail.com"; // Replace with the email address where you want inquiries.

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

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  if (OWNER_EMAIL === "karimiabahad@gmail.com") {
    document.getElementById("formMessage").textContent =
      "Before publishing: open script.js and replace karimiabahad@gmail.com with your real contact email. The form is not connected yet.";
    return;
  }
  const subject = encodeURIComponent("Website project inquiry — " + form.get("type"));
  const body = encodeURIComponent(
    "New website project inquiry\n\n" +
    "Name: " + form.get("name") + "\n" +
    "Email: " + form.get("email") + "\n" +
    "Website type: " + form.get("type") + "\n" +
    "Budget: " + form.get("budget") + "\n" +
    "Timeline: " + form.get("timeline") + "\n\n" +
    "Project details:\n" + form.get("details")
  );
  document.getElementById("formMessage").textContent =
    "Your email app should open with the project details. Please press Send there.";
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
});
