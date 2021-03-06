const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    document.getElementById("warnings").innerHTML = "";
    if (nombre.value.length < 2) {
        warnings += "el nombre no es valido <br>";
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += "el email no es valido <br>";
        entrar = true;
    }
    if (edad.value <= 17) {
        warnings += "Eres menor de edad <br>";
        entrar = true;
    }
    if (password.value.length < 8) {
        warnings += "la contraseña no es valida <br>";
        entrar = true;
    }
    if (entrar) {
        document.getElementById("warnings").innerHTML = warnings;
    } else {
        document.getElementById("warnings").innerHTML =
            formularioEnviado() + "Formulario Enviado!";
    }
    function formularioEnviado() {
        Swal.fire("Nueva suscripcion realizada", $("#email").val(), "success");
        ("Formulario Enviado!");
        $("#form").empty();
        form.innerHTML =
            '<div class="col-lg-12 col-xs-12  paddingTB"><div class="boxmodCentro"><a href="../index.html"><button class="btn btn-warning" id="btnSuscrip">Suscribir a pratto</button></a></div></div>';
    }
});
//13:05
//https://www.youtube.com/watch?v=36S19D6kZkc&ab_channel=AlexCGDesign
