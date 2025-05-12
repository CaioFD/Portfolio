// Inicie o EmailJS com seu User ID
emailjs.init("service_cv222vu"); 

// Função que lida com o envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Pegue os valores dos campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Enviar os dados através do EmailJS
    emailjs.sendForm('service_cv222vu', 'template_w14qpgl', this)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        });
});
