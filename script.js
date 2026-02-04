document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({
    publicKey: "HK8St7m_nWNHMHe1Q"
  });

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgul5s7",
      "template_whk7z0s",
      this
    )
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    });
  });

});
