const navBar = document.querySelector("");

window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });