// index-script.js
// Vanta.js hero background + rotating slogans

document.addEventListener("DOMContentLoaded", () => {
  // VANTA background
  if (typeof VANTA !== "undefined" && VANTA.WAVES) {
  // Makes sure vanta.js library loads and waves effect is available
    try {
      window._vantaEffect = VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e90ff,
        shininess: 20.00,
        waveHeight: 10.0,
        waveSpeed: 0.6
      });
    } catch (e) {
      console.warn("Vanta init failed:", e);
    }
  }

  // Slogans for index, page (yes, I asked ChatGPT to make me some cool slogans)
     const slogans = [
        "Always learning, always improving",
        "Service-minded, solution-driven",
        "A fresh graduate, ready to build the future",
        "From customer care to code — I bridge the gap"
    ];

    // Making sure the slogans changes, got some help from GPT for this :)
    const sloganEl = document.getElementById("slogan");
    let idx = 0;
    // ensure a smooth initial opacity transition
    sloganEl.style.opacity = 1;
    sloganEl.textContent = slogans[idx];

    // rotate every 10 seconds (10000 ms)
    setInterval(() => {
        // fade out
        sloganEl.style.opacity = 0;
        // after fade out (800ms), change text and fade in
        setTimeout(() => {
        idx = (idx + 1) % slogans.length;
        sloganEl.textContent = slogans[idx];
        sloganEl.style.opacity = 1;
        }, 800);
    }, 10000);
    });


