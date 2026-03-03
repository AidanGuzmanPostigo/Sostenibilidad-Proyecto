const sideMenu = document.querySelector("#sideMenu");
const toggleBtn = document.querySelector(".open-menu");
const toggleIcon = document.querySelector("#toggleIcon"); 
const formRegistro = document.querySelector("#formRegistro");
const formPatrocinio = document.querySelector("#formPatrocinio");
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
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const contrasenna = document.querySelector("#contrasenna");
    if (!validarNombre(nombre)){
        return;
    } else if (!validarEmail(email)){
        return;
    } else if (!validarContrasenna(contrasenna)){
        return;
    }
    alert("Registro completado correctamente.");
    formRegistro.reset();
});
formPatrocinio.addEventListener("submit",function (event){
    event.preventDefault();
    const nombreEmpresa = document.querySelector("#nombreEmpresa");
    const emailEmpresa = document.querySelector("#emailEmpresa");
    const mensajeEmpresa = document.querySelector("#mensajeEmpresa");
    if (!validarNombre(nombreEmpresa)){
        return;
    } else if (!validarEmail(emailEmpresa)){
        return;
    } else if (!validarMensaje(mensajeEmpresa)){
        return;
    }
    alert("Mensaje enviado correctamente, nos pondremos en contacto lo antes posible con usted.");
    formPatrocinio.reset();
});
function validarEmail(email){
    if (email.value.includes("@")==false || email.value.includes(".")==false){
        alert("El email debe contener un @ y un . cumpliendose que estén en ese orden.");
        return false;
    } else if (email.value.indexOf("@") > email.value.lastIndexOf(".")){
        alert("Debe haber un . después del @.");
        return false;
    }
    return true;
}
function validarContrasenna(contrasenna){
    if (contrasenna.value.trim().length < 6){
        alert("La contraseña debe contener al menos 6 caracteres.");
        return false;
    }
    return true;
}
function validarNombre(nombre){
    if (nombre.value.trim().length < 2){
        alert("El nombre debe tener al menos 2 caracteres.");
        return false;
    }
    return true;
}
function validarMensaje(mensaje){
    if (mensaje.value.trim().length < 5){
        alert("El mensaje debe ser de al menos 5 caracteres.");
        return false;
    }
    return true;
}