// Animación de bienvenida + solicitar nombre
window.addEventListener('DOMContentLoaded', () => {

  const userName = prompt("Bienvenido! Ingresa tu nombre y apellido:");

  if (userName && userName.trim() !== "") {
    document.getElementById("userNameDisplay").innerText = "Hola " + userName;
  } else {
    document.getElementById("userNameDisplay").innerText = "Hola invitado";
  }
});
