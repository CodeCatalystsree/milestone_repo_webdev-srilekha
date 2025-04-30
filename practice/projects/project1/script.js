 // Animate input box on focus
 const searchInput = document.querySelector("input[type='text']");

 searchInput.addEventListener('focus', () => {
     searchInput.style.transition = "0.3s ease";
     searchInput.style.boxShadow = "0 0 10px rgba(226, 55, 68, 0.7)";
 });

 searchInput.addEventListener('blur', () => {
     searchInput.style.boxShadow = "none";
 });

 // Add fade-in effect to main section
 document.addEventListener("DOMContentLoaded", () => {
     const section = document.querySelector("main section");
     section.style.opacity = 0;
     section.style.transition = "opacity 1s ease-in";
     setTimeout(() => {
         section.style.opacity = 1;
     }, 100);
 });