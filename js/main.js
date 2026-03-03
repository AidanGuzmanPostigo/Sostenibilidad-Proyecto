const sideMenu = document.querySelector("#sideMenu");
const toggleBtn = document.querySelector(".open-menu");
const toggleIcon = document.querySelector("#toggleIcon"); 
const formRegistro = document.querySelector("#registro");
const formPatrocinio = document.querySelector("#patrocinio");
    toggleBtn.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
        toggleBtn.classList.toggle("active");
        if (sideMenu.classList.contains("active")) {
            toggleIcon.textContent = "X";
        } else {
            toggleIcon.textContent = "☰";
        }
    });
    formRegistro.addEventListener("submit",function (event){
        event.preventDefault();
        if (verificarFormulario()){
        }
    });
    formPatrocinio.addEventListener("submit",function (event){
        event.preventDefault();
        if (verificarFormulario()){
        }
    });
    function verificarFormulario(){
        
    }