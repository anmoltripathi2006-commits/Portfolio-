document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("HK8St7m_nWNHMHe1Q"); // your PUBLIC KEY

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgul5s7",     // your SERVICE ID
      "template_whk7z0s",    // your TEMPLATE ID
      this
    )
    .then(function () {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    });
  });

});
