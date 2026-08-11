/* =========================================
   NEXUS FEST
   JAVASCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MENÚ MÓVIL
  ========================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navMenu.classList.toggle("active");

      menuToggle.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );

    });


    /* Cerrar menú al seleccionar una opción */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menú"
        );

      });

    });

  }


  /* =========================================
     CUENTA REGRESIVA
  ========================================= */

  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");


  /*
    Fecha del evento:
    04 de octubre de 2026
    Zona horaria de Frontera, Tabasco (UTC-6)
  */

  const eventDate = new Date(
    "2026-10-04T00:00:00-06:00"
  ).getTime();


  function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;


    /* =========================================
       SI LA FECHA YA LLEGÓ
    ========================================= */

    if (distance <= 0) {

      if (daysElement) {
        daysElement.textContent = "00";
      }

      if (hoursElement) {
        hoursElement.textContent = "00";
      }

      if (minutesElement) {
        minutesElement.textContent = "00";
      }

      if (secondsElement) {
        secondsElement.textContent = "00";
      }

      return;
    }


    /* =========================================
       CÁLCULO DEL TIEMPO
    ========================================= */

    const days = Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
      (distance %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );


    const minutes = Math.floor(
      (distance %
        (1000 * 60 * 60)) /
      (1000 * 60)
    );


    const seconds = Math.floor(
      (distance %
        (1000 * 60)) /
      1000
    );


    /* =========================================
       MOSTRAR RESULTADOS
    ========================================= */

    if (daysElement) {

      daysElement.textContent =
        String(days).padStart(2, "0");

    }


    if (hoursElement) {

      hoursElement.textContent =
        String(hours).padStart(2, "0");

    }


    if (minutesElement) {

      minutesElement.textContent =
        String(minutes).padStart(2, "0");

    }


    if (secondsElement) {

      secondsElement.textContent =
        String(seconds).padStart(2, "0");

    }

  }


  /* =========================================
     EJECUTAR CUENTA REGRESIVA
  ========================================= */

  updateCountdown();


  /* Actualizar cada segundo */

  setInterval(
    updateCountdown,
    1000
  );


  /* =========================================
     AÑO AUTOMÁTICO DEL FOOTER
  ========================================= */

  const currentYear =
    new Date().getFullYear();


  const footerYear =
    document.querySelector(".footer small");


  if (footerYear) {

    footerYear.textContent =
      `© ${currentYear} NEXUS FEST. Todos los derechos reservados.`;

  }

});