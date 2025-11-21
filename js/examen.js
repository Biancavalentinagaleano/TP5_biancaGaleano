// Inicializar EmailJS
emailjs.init("bdvLc3RftTwXuASw5");

// Capturar envío del formulario
document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener las respuestas del examen
    const p1 = document.querySelector('input[name="p1"]:checked')?.value || "Sin respuesta";
    const p2 = document.querySelector('input[name="p2"]:checked')?.value || "Sin respuesta";
    const p3 = document.getElementById('message').value;
    const p4 = document.querySelector('input[name="p4"]:checked')?.value || "Sin respuesta";
    const p5 = document.querySelector('input[name="p5"]:checked')?.value || "Sin respuesta";

    // Enviar con EmailJS
    emailjs.send("service_ax91m5y","template_5e16qlp", {
        p1,
        p2,
        p3,
        p4,
        p5
    })
    .then(() => {
        document.getElementById('status-message').innerText = "Formulario enviado correctamente.";
        document.getElementById('examForm').reset();
    })
    .catch((error) => {
        console.error("Error:", error);
        document.getElementById('status-message').innerText = "Error al enviar.";
    });
});


