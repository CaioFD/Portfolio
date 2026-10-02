// Wait for the page to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID
  emailjs.init("WWfcMwdLgkTVrn3Rp");

  // Handle form submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const submitBtn = document.getElementById("submit-btn");
      const loading = document.getElementById("loading");

      // Basic validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert(
          "Please fill in all required fields (Name, Email, and Message)."
        );
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Show loading state and disable the button
      submitBtn.disabled = true;
      submitBtn.value = "Sending...";
      if (loading) loading.style.display = "block";

      console.log("Submitting form...");
      console.log("Service ID: service_ymv8p1n");
      console.log("Template ID: template_dj9qhxj");

      // Wait briefly to avoid rate limiting
      setTimeout(() => {
        // Submit using sendForm (the most reliable method)
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

              let errorMessage = "Failed to send the message. ";

              if (error.status === 418) {
                errorMessage =
                  "The server is temporarily unavailable. Please wait a few minutes and try again.";
              } else if (error.status === 429) {
                errorMessage =
                  "Too many attempts. Please wait a few minutes and try again.";
              } else if (error.status === 400) {
                errorMessage =
                  "Configuration issue. Please check that all fields are filled in.";
              } else if (error.status === 401) {
                errorMessage =
                  "Authorization error. Please contact me at caiodiniz200204@gmail.com.";
              } else {
                errorMessage = `Error ${
                  error.status || "unknown"
                }. Please contact me directly at caiodiniz200204@gmail.com.`;
              }

              alert(errorMessage);
            }
          )
          .finally(function () {
            // Restore the button state
            submitBtn.disabled = false;
            submitBtn.value = "Send Message";
            if (loading) loading.style.display = "none";
          });
      }, 1500); // Wait 1.5 seconds before submitting
    });
  }

  // Add behavior to "Contact me" buttons on other pages
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
