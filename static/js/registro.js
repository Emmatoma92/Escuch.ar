function validForm() {
    var i = 0
    var register = document.getElementById('register');
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var contraseña = document.getElementById('contraseña');
    var gustos = document.getElementById('genprefer');
    var registrar = document.getElementById('registrar');

    if (nombre.value == '') {
        var alerta = ' Nombre';
        i += 1;
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

    if (gustos.value == '') {
        if (i > 0) {
            alerta += ', Preferencias'
        } else {
            var alerta = ' Preferencias';
            i += 1;
        }
    }

    if (i > 0) {
        alert(`Falta ingresar:` + alerta);
        return
    }

    // nombre.remove();
    // apellido.remove();
    // email.remove();
    // contraseña.remove();
    // registrar.remove();

    register.remove();
    
    var content = document.getElementById('content');
    var final = document.createElement('div');
    final.innerHTML = 'Se registro correctamente';
    final.id = 'msgFinal';
    final.style.color = '#ffffff';
    final.style.fontSize = '4em';
    content.appendChild(final);
}