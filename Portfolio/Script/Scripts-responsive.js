// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  // Inicie o EmailJS com seu User ID
  emailjs.init("WWfcMwdLgkTVrn3Rp");

  // Função que lida com o envio do formulário
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio tradicional do formulário

      const submitBtn = document.getElementById("submit-btn");
      const loading = document.getElementById("loading");

      // Validação básica
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert(
          "Por favor, preencha todos os campos obrigatórios (Nome, Email e Mensagem)."
        );
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
      }

      // Mostrar loading e desabilitar botão
      submitBtn.disabled = true;
      submitBtn.value = "Enviando...";
      if (loading) loading.style.display = "block";

      console.log("Enviando formulário...");
      console.log("Service ID: service_ymv8p1n");
      console.log("Template ID: template_dj9qhxj");

      // Aguardar um momento para evitar rate limiting
      setTimeout(() => {
        // Enviar usando sendForm (método mais confiável)
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

              let errorMessage = "Erro ao enviar a mensagem. ";

              if (error.status === 418) {
                errorMessage =
                  "Servidor temporariamente indisponível. Aguarde alguns minutos e tente novamente.";
              } else if (error.status === 429) {
                errorMessage =
                  "Muitas tentativas. Aguarde alguns minutos e tente novamente.";
              } else if (error.status === 400) {
                errorMessage =
                  "Problema na configuração. Verifique se todos os campos estão preenchidos.";
              } else if (error.status === 401) {
                errorMessage =
                  "Erro de autorização. Entre em contato pelo email: caiodiniz200204@gmail.com";
              } else {
                errorMessage = `Erro ${
                  error.status || "desconhecido"
                }. Entre em contato diretamente: caiodiniz200204@gmail.com`;
              }

              alert(errorMessage);
            }
          )
          .finally(function () {
            // Restaurar estado do botão
            submitBtn.disabled = false;
            submitBtn.value = "Enviar Mensagem";
            if (loading) loading.style.display = "none";
          });
      }, 1500); // Aguardar 1.5 segundos antes de enviar
    });
  }

  // Adicionar funcionalidade aos botões "Contate-me" em outras páginas
  const contactButtons = document.querySelectorAll(".button-1");
  contactButtons.forEach((button) => {
    if (button.textContent.trim() === "Contate-me") {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        // Ajustar o caminho baseado na página atual
        const currentPath = window.location.pathname;
        if (currentPath.includes("/Pages/")) {
          window.location.href = "Contacte.html";
        } else {
          window.location.href = "Pages/Contacte.html";
        }
      });
    }
  });
});

// Função para toggle do menu mobile
function toggleMenu() {
  const navBar = document.querySelector(".nav-bar");
  const menuToggle = document.querySelector(".menu-toggle");

  if (navBar) {
    navBar.classList.toggle("active");
  }
  if (menuToggle) {
    menuToggle.classList.toggle("active");
  }
}

// Fechar menu ao clicar em um link (mobile)
document.addEventListener("click", function (e) {
  if (e.target.matches(".nav-bar a")) {
    const navBar = document.querySelector(".nav-bar");
    const menuToggle = document.querySelector(".menu-toggle");

    if (navBar && navBar.classList.contains("active")) {
      navBar.classList.remove("active");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
    }
  }
});
