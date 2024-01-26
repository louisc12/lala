var clickCount = 0;

function showLove () {
    clickCount++;
    document.getElementById('clickCounter').innerHTML = "Te quieros: " + clickCount + " " + " pero uno mas siempre yo";

    var loveMessage = document.getElementById('loveMessage');
    loveMessage.innerHTML = "¡Te quiero aún más cada día!";
    loveMessage.style.color = "#e44d26";  // Cambiar el color del mensaje
    loveMessage.style.fontWeight = "bold";  // Hacer el mensaje en negrita
    loveMessage.style.fontSize = "1.5em";  // Cambiar el tamaño del texto

    // Agregar animación para resaltar el cambio
    loveMessage.classList.add("highlight");

    // Restaurar el mensaje original después de 3 segundos
    setTimeout(function () {
        loveMessage.innerHTML = "Te quiero mucho.";
        loveMessage.style.color = "#555";
        loveMessage.style.fontWeight = "normal";
        loveMessage.style.fontSize = "1.2em";
        loveMessage.classList.remove("highlight");
    }, 3000);
}
