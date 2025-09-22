// ===== ABOUT PAGE SCRIPT =====

// Vanta.js for hero, VANTA.NET
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00ff00,
  backgroundColor: 0x000000,
  points: 12.00,
  maxDistance: 25.00,
  spacing: 20.00
});

// Dropdown buttons
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    const content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.padding = "0 1.5rem";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "1rem 1.5rem";
    }
  });
});
