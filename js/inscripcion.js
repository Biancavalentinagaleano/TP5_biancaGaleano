emailjs.init("bdvLc3RftTwXuASw5");

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  emailjs.send("service_ax91m5y","template_lvqkfbv", {
    firstName,
    lastName,
    email,
    phone,
    message
  })
  .then(() => {
    document.getElementById('status-message').innerText = "Datos enviados con éxito.";
    document.getElementById('personalDataForm').reset();
  })
  .catch((error) => {
    console.error("Error:", error);
    document.getElementById('status-message').innerText = "Error al enviar.";
  });
});
