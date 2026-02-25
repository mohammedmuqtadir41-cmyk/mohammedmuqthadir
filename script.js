// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector(".menu-toggle");
const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

// ===== CLOSE MENU WHEN LINK CLICKED =====
document.querySelectorAll(".nav-right a").forEach(link => {
  link.addEventListener("click", () => {
    navRight.classList.remove("active");
  });
});

// ===== NAVBAR SHADOW ON SCROLL =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.boxShadow = window.scrollY > 50 
    ? "0 4px 15px rgba(0,0,0,0.3)" 
    : "none";
});
