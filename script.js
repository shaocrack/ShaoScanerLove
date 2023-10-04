document.addEventListener("DOMContentLoaded", function () {
    // Muestra el mensaje "Ponga su dedo" después de 2 segundos
    setTimeout(function () {
      document.getElementById("message").innerHTML = "Ponga su dedo";
      document.getElementById("message").classList.remove("hidden");
      // Agregar evento de mouseenter al escáner
      var scanner = document.querySelector(".scanner");
      scanner.addEventListener("mouseenter", function () {
        var countdownTimer;
        // Iniciar cuenta regresiva de 10 segundos cuando el mouse entra en el escáner
        var seconds = 10;
        countdownTimer = setInterval(function () {
          document.getElementById("message").innerHTML = "ESCANEANDO: " + seconds + "s";
          seconds--;
          if (seconds < 0) {
            clearInterval(countdownTimer);
            // Cuando termine la cuenta regresiva, cambia el mensaje y redirige
            document.getElementById("message").innerHTML = "LISTO C:";
            setTimeout(function () {
              window.location.href = "otra_pagina.html";
            }, 1000); // Redirige después de 1 segundo (para demostración)
          }
        }, 1000);
      });
    }, 4000);
  });
  