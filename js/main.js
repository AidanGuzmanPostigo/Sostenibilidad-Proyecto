const sideMenu = document.querySelector("#sideMenu");
const toggleBtn = document.querySelector(".open-menu");
const toggleIcon = document.querySelector("#toggleIcon"); 
    toggleBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
        toggleBtn.classList.toggle("active");
        if (sideMenu.classList.contains("active")) {
            toggleIcon.textContent = "X";
        } else {
            toggleIcon.textContent = "☰";
        }
    });