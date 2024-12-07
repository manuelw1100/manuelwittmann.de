// plugins/brevoBooking.js
export default defineNuxtPlugin(() => {
  let isLoaded = false; // Flag to check if the script is already loaded

  function loadBrevoResources() {
    return new Promise((resolve) => {
      if (isLoaded) {
        resolve();
        return;
      }

      // CSS für das Popup laden
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://meetings.brevo.com/assets/styles/popup.css";
      document.head.appendChild(link);

      // Skript für das Popup laden
      const script = document.createElement("script");
      script.src = "https://meetings.brevo.com/assets/libs/popup.min.js";
      script.type = "text/javascript";
      script.onload = () => {
        isLoaded = true;
        resolve();
      };
      document.body.appendChild(script);
    });
  }

  function disableScroll() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  return {
    provide: {
      openBrevoBooking: async (url) => {
        await loadBrevoResources(); // Load resources if not already loaded

        if (typeof BrevoBookingPage !== "undefined") {
          disableScroll();

          BrevoBookingPage.initStaticButton({
            url,
          });
          // Überwache, ob das Popup geschlossen wurde
          const observer = new MutationObserver(() => {
            const popupExists = document.querySelector(".brevo-overlay");
            if (!popupExists) {
              enableScroll();
              observer.disconnect();
            }
          });

          observer.observe(document.body, { childList: true }); // Beobachtet Änderungen an body
        }
      },
    },
  };
});
