const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML=""

    // Nombre
    if(nombre.value.length < 3){
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }
    // Email
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true;
    }
    //Password
    if(pass.value.length < 8){
        warnings += `El password no es valido <br>`
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML= warnings;
    }else{
        parrafo.innerHTML= "Entregado";
    }
})