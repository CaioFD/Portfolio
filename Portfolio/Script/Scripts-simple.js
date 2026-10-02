// Alternative version using a simpler approach
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID
  emailjs.init("WWfcMwdLgkTVrn3Rp");

  // Handle form submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const submitBtn = document.getElementById("submit-btn");
      const loading = document.getElementById("loading");

      // Basic validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.value = "Sending...";
      if (loading) loading.style.display = "block";

      // Wait briefly to avoid rate limiting
      setTimeout(() => {
        // Submit directly using sendForm
        emailjs
          .sendForm("service_ymv8p1n", "template_dj9qhxj", contactForm)
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              alert(
                "Message sent successfully! I'll be in touch soon."
              );
              contactForm.reset();
            },
            function (error) {
              console.log("FAILED...", error);

              if (error.status === 418) {
                alert(
                  "The server is temporarily unavailable. Please wait 5 minutes and try again."
                );
              } else if (error.status === 429) {
                alert(
                  "Too many attempts. Please wait a few minutes and try again."
                );
              } else {
                alert(
                  `Error ${error.status}: ${
                    error.text || "Please try again in a few minutes."
                  }`
                );
              }
            }
          )
          .finally(function () {
            submitBtn.disabled = false;
            submitBtn.value = "Send Message";
            if (loading) loading.style.display = "none";
          });
      }, 1000); // Wait 1 second before submitting
    });
  }

  // Add behavior to "Contact me" buttons
  const contactButtons = document.querySelectorAll(".button-1");
  contactButtons.forEach((button) => {
    if (button.textContent.trim() === "Contact me") {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "Contacte.html";
      });
    }
  });
});
