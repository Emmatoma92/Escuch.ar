function validForm() {
    var i = 0
    var register = document.getElementById('register');
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var contraseña = document.getElementById('contraseña');
    var gustos = document.getElementById('genprefer');

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
    
    post = {'nombre': nombre, 
            'email': email, 
            'contraseña': contraseña, 
            'genprefer': gustos}

    register.style.display = "none";

    var content = document.getElementById('content');
    var final = document.createElement('div');
    final.innerHTML = 'Se registro correctamente';
    final.id = 'msgFinal';
    content.appendChild(final);

    $.post( "/registro-exitoso", {
        javascript_data: JSON.stringify(post) 
    });

};

const defaultFile = "./static/img/avatar.png"
const file = document.getElementById('avatar');
const img = document.getElementById('imgAvatar');

file.addEventListener('change', e => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    } else {
        img.src = defaultFile;
    }
});