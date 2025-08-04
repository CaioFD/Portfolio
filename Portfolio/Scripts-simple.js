// Versão alternativa - usando abordagem mais simples
document.addEventListener("DOMContentLoaded", function () {
  // Inicie o EmailJS com seu User ID
  emailjs.init("WWfcMwdLgkTVrn3Rp");

  // Função que lida com o envio do formulário
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const submitBtn = document.getElementById("submit-btn");
      const loading = document.getElementById("loading");

      // Validação básica
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Mostrar loading
      submitBtn.disabled = true;
      submitBtn.value = "Enviando...";
      if (loading) loading.style.display = "block";

      // Aguardar um pouco para evitar rate limiting
      setTimeout(() => {
        // Enviar usando sendForm diretamente
        emailjs
          .sendForm("service_ymv8p1n", "template_dj9qhxj", contactForm)
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              alert(
                "Mensagem enviada com sucesso! Entrarei em contato em breve."
              );
              contactForm.reset();
            },
            function (error) {
              console.log("FAILED...", error);

              if (error.status === 418) {
                alert(
                  "Servidor temporariamente indisponível. Aguarde 5 minutos e tente novamente."
                );
              } else if (error.status === 429) {
                alert(
                  "Muitas tentativas. Aguarde alguns minutos e tente novamente."
                );
              } else {
                alert(
                  `Erro ${error.status}: ${
                    error.text || "Tente novamente em alguns minutos."
                  }`
                );
              }
            }
          )
          .finally(function () {
            submitBtn.disabled = false;
            submitBtn.value = "Enviar Mensagem";
            if (loading) loading.style.display = "none";
          });
      }, 1000); // Aguardar 1 segundo antes de enviar
    });
  }

  // Funcionalidade dos botões "Contate-me"
  const contactButtons = document.querySelectorAll(".button-1");
  contactButtons.forEach((button) => {
    if (button.textContent.trim() === "Contate-me") {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "Contacte.html";
      });
    }
  });
});
