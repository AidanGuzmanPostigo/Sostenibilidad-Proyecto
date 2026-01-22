const sideMenu = document.getElementById("sideMenu");
    const toggleBtn = document.querySelector(".open-menu");
    const toggleIcon = document.getElementById("toggleIcon"); 
    toggleBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
        toggleBtn.classList.toggle("active");
    });