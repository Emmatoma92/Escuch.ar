document.addEventListener("DOMContentLoaded", function() {
    var panel = document.querySelector("#radio-panel");
    var panelBoton = document.querySelector("#boton-radio-panel");
    var imagenPanel = document.querySelector("#imagen-de-genero");
    var reproductorRadio = document.querySelector("#radio");
    var selectGenero = document.querySelector(".seleccionar-emisora");
  
    var generoURLs = {
        "Rock": "http://nashe1.hostingradio.ru/rock-128.mp3",
        "Pop": "https://playerservices.streamtheworld.com/api/livestream-redirect/Los40.mp3",
        "80'": "https://samcloud.spacial.com/api/listen?sid=111415&rid=194939&f=mp3,any&br=128000,any&m=sc",
        "Electronica": "http://stream2.friskyradio.com/frisky_mp3_hi",
        "R&B": "http://hydra.cdnstream.com/1536_128",
        "Metal": "http://mp3channels.webradio.rockantenne.de/heavy-metal",
        "Hip Hop - Rap": "http://topradio-de-hz-fal-stream03-cluster01.radiohost.de/kissfm-hiphop_aac-64?",
        "Musica Orquestal": "http://ice-the.musicradio.com/ClassicFMMP3",
        "Funk - Soul": "http://jazz-wr06.ice.infomaniak.ch/jazz-wr06-128.mp3",
        "Jazz": "http://stream.srg-ssr.ch/m/rsj/mp3_128"
    };
  
    // Función para ajustar la posición vertical del panel
    function adjustPanelVerticalPosition() {
        var windowHeight = window.innerHeight;
        var panelHeight = panel.offsetHeight;
        panel.style.top = (windowHeight - panelHeight) / 1.3 + "px";
    }
  
    // Función para actualizar el texto del botón que despliega el panel
    function updateButtonText() {
        panelBoton.textContent = (panel.style.left === "1vw") ? "<" : ">";
    }
  
    // Detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", function() {
        var isMediumScreen = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        var isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
  
        if (isMediumScreen) {
            if (panel.style.left === "-55vw" || panel.style.left === "-20vw") {
                panel.style.left = "-35vw";
            }
        } else if (isLargeScreen) {
            if (panel.style.left === "-55vw" || panel.style.left === "-35vw") {
                panel.style.left = "-20vw";
            }
        } else {
            if (panel.style.left === "-35vw" || panel.style.left === "-20vw") {
                panel.style.left = "-55vw";
            }
        }
  
        // Ajustar la posición vertical del panel
        adjustPanelVerticalPosition();
  
        // Actualizar el texto del botón
        updateButtonText();
    });
  
    // Función para ocultar y abrir el panel
    function togglePanel() {
        var isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
        var isMediumScreen = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
  
        if (isSmallScreen) {
            panel.style.left = (panel.style.left === "-55vw") ? "1vw" : "-55vw";
        } else if (isMediumScreen) {
            panel.style.left = (panel.style.left === "-35vw") ? "1vw" : "-35vw";
        } else {
            panel.style.left = (panel.style.left === "-20vw") ? "1vw" : "-20vw";
        }
  
        // Actualizar el texto del botón
        updateButtonText();
    }
  
    panelBoton.addEventListener("click", togglePanel);
  
    // Ajustar la posición vertical del panel al cargar la página
    adjustPanelVerticalPosition();
    window.dispatchEvent(new Event('resize'));
  
    // Asegurarse de que el botón tenga el texto correcto al cargar la página
    updateButtonText();
  
    // Función para guardar el estado en LocalStorage
    function saveState() {
        var generoSeleccionado = selectGenero.value;
        var imagenRuta = "./radio/images/" + generoSeleccionado + ".jpg";
        var radioURL = generoURLs[generoSeleccionado];
        var isPlaying = !reproductorRadio.paused;
        
        localStorage.setItem('generoSeleccionado', generoSeleccionado);
        localStorage.setItem('imagenRuta', imagenRuta);
        localStorage.setItem('radioURL', radioURL);
        localStorage.setItem('isPlaying', isPlaying);
    }
  
    // Función para cargar el estado desde LocalStorage
    function loadState() {
        var generoSeleccionado = localStorage.getItem('generoSeleccionado');
        var imagenRuta = localStorage.getItem('imagenRuta');
        var radioURL = localStorage.getItem('radioURL');
        var isPlaying = localStorage.getItem('isPlaying') === 'true';
  
        if (generoSeleccionado) {
            selectGenero.value = generoSeleccionado;
            imagenPanel.src = imagenRuta;
            reproductorRadio.src = radioURL;
        }
  
        if (isPlaying) {
            reproductorRadio.play();
        } else {
            reproductorRadio.pause();
        }
    }
  
    // Enlazar evento de cambio de selección de género
    selectGenero.addEventListener("change", function() {
        var generoSeleccionado = selectGenero.value;
        var imagenRuta = "./radio/images/" + generoSeleccionado + ".jpg"; // Ruta de la imagen
        var radioURL = generoURLs[generoSeleccionado]; // Asignar la URL de la radio según el género seleccionado
  
        var wasPlaying = !reproductorRadio.paused;
        reproductorRadio.pause(); // Pausar antes de cambiar la URL
  
        imagenPanel.src = imagenRuta; // Cambiar la imagen del panel
        reproductorRadio.src = radioURL; // Cambiar la URL de la radio
  
        if (wasPlaying) {
            reproductorRadio.play(); // Reanudar si estaba reproduciendo
        }
        
        saveState(); // Guardar el estado cada vez que se cambia de género
    });
  
    // Enlazar evento de reproducción y pausa
    reproductorRadio.addEventListener('play', saveState);
    reproductorRadio.addEventListener('pause', saveState);
  
    // Ajustar el volumen inicial de la radio
    reproductorRadio.volume = 0.30;
  
    // Cargar el estado guardado al cargar la página
    loadState();
});