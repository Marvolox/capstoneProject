const navBar = document.querySelector("nav.bar");

window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });