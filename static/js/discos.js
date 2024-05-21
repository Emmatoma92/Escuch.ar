class disco {
    constructor(nombre, interprete, year, temas, tapa, video) {
        this.nombre = nombre;
        this.interprete = interprete;
        this.year = year;
        this.temas = temas;
        this.tapa = tapa;
        this.video = video;
    }
}

const unbaion = new disco('Un baión para el ojo idiota', 'Los Redonditos de Ricota', '1988',
    ['Masacre en el puticlub', 'Noticias de ayer', 'Aquella solitaria vaca cubana', 'Todo preso es político',
        'Vencedores vencidos', 'Vamos las bandas', 'Ella debe estar tan linda', 'Todo un palo'],
    './discos/un-baion/tapa-un-baion.jpg', '36OMQCFkJKk'
);

const lagrasa = new disco('La Grasa de las Capitales', 'Serú Girán', '1979',
    ['La Grasa de las Capitales', 'San Francisco y el Lobo', 'Perro Andaluz', 'Frecuencia Modulada',
        'Paranoia y Soledad', 'Noche de Perros', 'Viernes 3AM', 'Los Sobrevivientes', 'Canción de Hollywood'],
    './discos/la-grasa/tapa-la-grasa.jpg', '2ODGjoxA-js'
);

const revolver = new disco('Revolver', 'The Beatles', '1966',
    ['Taxman', 'Eleanor Rigby', "I'm Only Sleeping", 'Love You To', 'Here, There and Everywhere', 'Yellow Submarine',
        'She Said She Said', 'Good Day Sunshine', 'And Your Bird Can Sing', 'For No One', 'Doctor Robert',
        'I Want to Tell You', 'Got to Get You into My Life', 'Tomorrow Never Knows'],
    './discos/revolver/tapa-revolver.jpg', 'b6z6YuyIcew'
);

const abnormal = new disco('The New Abnormal', 'The Strokes', '2022',
    ['The Adults Are Talking', 'Selfless', 'Brooklyn Bridge to Chorus', 'Bad Decisions', 'Eternal Summer', 'At The Door'
        , 'Why Are Sundays So Depressing?', 'Not the Same Anymore', 'Ode To The Mets'],
    './discos/the-new-abnormal/tapa-the-new-abnormal.jpeg', 'jhfDq06ghfU'
);

const nirvunplug = new disco('MTV Unplugged', 'Nirvana', '1994',
    ['About a Girl', 'Come as You Are', "Jesus Doesn't Want Me for a Sunbeam", 'The Man Who Sold the World',
        'Pennyroyal Tea', 'Dumb', 'Polly', 'On A Plain', 'Something In The Way', 'Plateau', 'Oh Me',
        'Lake of Fire', 'All Apologies', 'Where Did You Sleep Last Night'],
    './discos/nirvana-unplugged/nirvana-unplug.webp', 'IAp6bQfTQ20'
);

const discovery = new disco('Discovery', 'Daft Punk', '2001',
    ['One More Time', 'Aerodynamic', 'Digital Love', 'Harder, Better, Faster, Stronger', 'Crescendolls', 'Nightvision'
    , 'Superhéroes', 'High Life', 'Something About Us', 'Voyager', 'Veridis Quo', 'Short Circuit', 'Face to Face', 'Too Long'],
    './discos/discovery/discovery.png', 'mdw1JeDjWH8');

const travelling = new disco('Travelling without Moving', 'Jamiroquai', '1996',
    ["Virtual Insanity", "Cosmic Girl", "Use the Force", "Everyday", "Alright", "High Times", "Drifting Along", "Didjerama", 
    "Didjital Vibrations", "Travelling Without Moving", "You Are My Love", "Spend a Lifetime", "Do U Know Where U Are Coming From", "Funktion"],
    './discos/travelling/travellingwithoutmoving.png', 'e0nJXxBoESA');

const tiffany = new disco("Breakfast At Tiffany's", 'Henry Mancini', '1986',
    ["Moon River", "Something For Cat", "Sally's Tomato", "Mr. Yunioshi", "The Big Blow Out", "Hub Caps And Tail Lights", "Breakfast At Tiffany's", 
    "Didjerama", "Latin Golightly", "Holly", "Loose Caboose", "The Big Heist", "Moon River Cha Cha"],
    './discos/tiffany/breakfast-at-tiffanys.jpg', 'DMeG0pOVDTc');

const rustinpeace = new disco('Rust In Peace', 'Megadeth', '1990',
    ["Holy Wars...The Punishment Due", "Hangar 18", "Take No Prisoners", "Five Magics", "Poison Was The Cure", "Lucretia", 
    "Tornado Of Souls", "Dawn Patrol", "Rust In Peace...Polaris"],
    './discos/rust-in-peace/rust-in-peace.jpg', 'Ti_imhKBjXA');

const queengreatest = new disco('Greatest Hits', 'Queen', '1981',
    ["Bohemian Rhapsody", "Another One Bites The Dust", "Killer Queen", "Fat Bottomed Girls", "Bicycle Race", "You're My Best Friend", 
    "Don't Stop Me Now", "Save Me", "Crazy Little Thing Called Love", "Somebody To Love", "Now I'm Here", "Good Old Fashioned Lover Boy", 
    "Play The Game", "Flash", "Seven Seas Of Rhye", "We Will Rock You", "We Are The Champions"],
    './discos/queen-greatest-hits/queen-greatest-hits.jpg', 'Vzu5NFVxAV8');

const bossguitar = new disco('Boss Guitar', 'Wes Montgomery', '1963',
    ["Besame Mucho", "Dearly Beloved", "Days Of Wine And Roses", "The Trick Bag", "Canadian Sunset", "Fried Pies", 
    "The Breeze And I", "For Heaven's Sake"],
    './discos/boss-guitar/boss-guitar.jpg', 'A3Yzl08yyVw');

const nutcracker = new disco('The Nutcracker', 'Tchaikovsky', '1989',
    ["2 March", "4 Dance Scene", "5 Scene And The Grandfather Dance", "6 Scene", "7 Scene", "8 Scene", 
    "12 Divertissement", "Chocolate (Spanish Dance)", "Coffee (Arabian Dance)", "Tea (Chinese Dance)", "Trepak (Russian Dance)", 
    "Dance Of The Toy Flutes", "The Clown", "13 Waltz Of The Flowers", "14 Pas De Deux", "15 Closing Waltz And Grand Finale"],
    './discos/nutcracker/nutcracker.jpg', 'C4wBG8BWbYg');

const sza = new disco("Z", 'SZA', '2014',
    ["Ur", "Childs Play", "Julia", "Warm Winds", "Hi Jack", "Green Mile", "Babylon", "Sweet November", "Shattered Ring", "Omega"],
    './discos/sza-z/sza-z.jpg', 'N5BZu6GEXu8');

const toxicity = new disco('Toxicity', 'System of a Down', '2001',
    ["Prison Song", "Needles", "Deer Dance", "Jet Pilot", "X", "Chop Suey!", "Bounce", "Forest", "ATWA", 
    "Science", "Shimmy", "Toxicity", "Psycho", "Aerials"],
    './discos/toxicity/toxicity.jpg', 'nVohJKUiK6o');
    
function selectedDisc(selDisc) {

    document.getElementById('albumName').innerText = selDisc["nombre"];
    document.getElementById('descripcion').innerHTML = selDisc.year + ' - ' + selDisc.interprete;
    document.getElementById('tapadisco').src = selDisc.tapa;

    var songlist = document.getElementById('songlist');

    if (document.getElementById('lista-temas')) {
        document.getElementById('lista-temas').remove();
    }

    var listatemas = document.createElement('ol');
    listatemas.id = 'lista-temas';


    for (let i = 0; i < selDisc['temas'].length; i++) {
        var litema = document.createElement('li');
        litema.innerText = selDisc['temas'][i];
        listatemas.appendChild(litema);
    };

    songlist.appendChild(listatemas);

    var player = document.getElementById('player');

    if (document.getElementById('iplayer')) {
        document.getElementById('iplayer').remove();
    }

    var iplayer = document.createElement('iframe');
    iplayer.id = 'iplayer';
    iplayer.classList.add('iplayer');
    iplayer.width = '640';
    iplayer.height = "320";
    iplayer.src = 'https://www.youtube.com/embed/' + selDisc['video'];
    iplayer.allowfullscreen;
    iplayer.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iplayer.referrerpolicy = "strict-origin-when-cross-origin";

    player.appendChild(iplayer);

}

selectedDisc(unbaion)