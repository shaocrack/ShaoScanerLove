document.addEventListener("DOMContentLoaded", function () {
    // Muestra el mensaje "Ponga su dedo" después de 2 segundos
    setTimeout(function () {
      document.getElementById("message").innerHTML = "Ponga su dedo";
      document.getElementById("message").classList.remove("hidden");
      // Iniciar cuenta regresiva de 10 segundos para el escaneo
      countdown(10, function () {
        // Cuando termine la cuenta regresiva, cambia el mensaje y redirige
        document.getElementById("message").innerHTML = "LISTO C:";
        setTimeout(function () {
          window.location.href = "otra_pagina.html";
        }, 100); // Redirige después de 10 segundos
      });
    }, 2000);
  });
  
  function countdown(seconds, callback) {
    var display = document.getElementById("message");
    var interval = setInterval(function () {
      display.innerHTML = "ESCANEANDO: " + seconds + "s";
      seconds--;
      if (seconds < 0) {
        clearInterval(interval);
        if (typeof callback === "function") {
          callback();
        }
      }
    }, 1000);
  }
  