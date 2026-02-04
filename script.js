// EMAILJS
emailjs.init("PASTE_YOUR_PUBLIC_KEY_HERE");

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_xgul5s7",
    "template_whk7z0s",
    this
  ).then(
    () => alert("Message sent successfully!"),
    () => alert("Failed to send message")
  );

  this.reset();
});

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// DARK / LIGHT MODE
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});
