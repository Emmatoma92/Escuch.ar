function validForm() {
    var i = 0
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var contraseña = document.getElementById('contraseña');

    if (nombre.value == '') {
        var alerta = ' Nombre';
        i += 1;
    }

    if (apellido.value == '') {
        if (i > 0) {
            alerta += ', Apellido'
        } else {
            var alerta = ' Apellido';
            i += 1;
        }
    }

    if (email.value == '') {
        if (i > 0) {
            alerta += ', Email'
        } else {
            var alerta = ' Email';
            i += 1;
        }
    }

    if (contraseña.value == '') {
        if (i > 0) {
            alerta += ', Contraseña'
        } else {
            var alerta = ' Contraseña';
            i += 1;
        }
    }

    if (i > 0) {
        alert(`Falta ingresar:` + alerta);
    }
}