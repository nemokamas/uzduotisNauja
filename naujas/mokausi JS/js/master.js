document.write("<h3>Sveiki</h3>");


/* cia darau valandas is knygos */
var today = new Date();              // sukuria nauja valandu objektyva
var hourNow = today.getHours();     // cia suranda kiek yra valandu
var greeting;

// sita lygtis suranda kiek yra valandu ir atitinkamai kiek valandu pasako tam tikra sveikinima, pvz "good evening", "good afternoon" arba tarkim "morning,boss", o jeigu nei vienas neatitinka = 'labukas' paraso
if (hourNow > 18) {
    greeting = 'Labas vakaras';
} else if (hourNow > 12) {
    greeting = 'Laba diena';
} else if (hourNow > 0) {
    greeting = 'morning,boss';
} else {
    greeting = 'Labukas';
}
document.write(greeting);





                                                                                                            /* darau mini parduotuvele */

var kaina; // kiek kainuoja
var telefonai; // kiek yra telefonu
var suma; // is viso suma

kaina = 15;
telefonai = 123;
suma = kaina * telefonai; // dauginu kaina su telefonu skaiciumi

var el = document.getElementById('isViso'); // var el tai kaip suprantu toks kuris atranda kita veiksma, o getelementbyID tai, kad pvz HTML div id="isViso" daryciau ir HTML divas surastu ji mano JS faile
el.textContent = '$' + suma; // tada padarom textContent, kad prie 'suma', kuria apskaiciuoja pridedam + '$' dolerio zenkla, kad gautusi suma kartu su doleriu zenklu, kaip parduotuvese


// mokinuosi variable pritaikyti stringams
var vardas;
var zinute;
vardas = 'Nerimas';
zinute = 'noriu ismokti JS';

var elName = document.getElementById('vardass'); // cia perduotu is vardas(Nerimas) i vardass -> HTML div id "vardass"
elName.textContent = vardas;
var elName = document.getElementById('uzrasas'); // cia perduotu is zinute i uzrasas -> HTML div id "uzrasas"
elName.textContent = zinute;


// mokinuosi variable pritaikyti stringams
var pavadinimas;
var zinute;
pavadinimas = 'Mano slaptoji formule';
zinute = '<a href="\ispardavimas.html\">25% nuolaida!</a>'; // kazkodel neveikia, nors darau pagal pavyzdi

var elName = document.getElementById('pav'); // cia perduotu is pavadinimas i pav -> HTML div id "pav"
elName.textContent = pavadinimas;
var elName = document.getElementById('notas'); // cia perduotu is zinute i notas -> HTML div id "notas"
elName.textContent = zinute;


/* kaip daromas boolean (true arba false) */

var inStock;  // kur yra preke
var shipping;    // atvezama ar ne
inStock = true;
shipping = false;

var elStock = document.getElementById('stock').innerHTML = Boolean( 1 > 0); // Sita eilute yra labai svarbi, nes jeigu parasai Boolean ir padarai, kad pvz yra daugiau prekiu uz nuli tada parodo, kad true, o jeigu maziau arba lygu parodo false
elStock.className = inStock;

var elShip = document.getElementById('shipping').innerHTML = Boolean( 0 > 0);; // vietoj atvezamas -> neuzilgo
elShip.className = shipping;


/* kaip galima trumpinti variables (kintamuosius) */

var kaina = 17;
var kiekis = 9;
var suma = kaina * kiekis;

/* kitas budas */

var kaina, kiekis, suma;
kaina = 17;
kiekis = 9;
suma = kaina * kiekis;

/* Dar vienas budas */

var kaina = 17, kiekis = 9;
var suma = kaina * kiekis;

/* budas kurio dar nelabai suprantu */
var kaina = 17, kiekis = 9;
var suma = kaina * kiekis;

/* var el = document.getElementById('bendra suma');
el.textContent = '$' + suma; */



                                                                /* ARRAY           kai darai lista, pvz white,black,red,blue [0] isves -> white (pirmaji), black [1] ir taip toliau. Zodziu ant vieno maziau */

var colors;
colors = ['white','black','custom'];

var el = document.getElementById('colors');
console.log(colors[0]);
// dar galima:

var colors = new Array('red','blue','custom');
var el = document.getElementById('colors');
console.log(colors[1]);


// Create Array
var colors = ['white','black','custom'];
// update the third item in the array
colors[2] = 'beige';                           // is 'custom' keiciam i 'beige'
// Get the element with an id of colors
var el = document.getElementById('colors');
// Replace with third item from the array
console.log(colors);

var nupirkti = ['duonos','pieno','druskos','mesos','gerimas','alus'];
var el = document.getElementById('nupirkti');
console.log(nupirkti);  // console log niekada nedeti kabuciu, nes kitaip reaguoja kaip i kintamaji (variable)

vardas = ' Nerimas';
greeting = 'Hi' + vardas; // rasom 'hi' tada + vardas(kintamasis vardas = Nerimas BE KABUCIU)
console.log(greeting);

var daugyba = 3 * 2;
var dalyba = 5 / daugyba;
console.log(dalyba);  // var daugyboje sudauginame 3 * 2, tada kitame kintamajame dalyba, mes 5 /(daliname) is var daugybos (ten turime 3*2=6)

buy = 3 > 5;  // padaro is karto FALSE, nes 3 yra maziau uz 5. 
console.log(buy);


pirkti = (5 > 3) && (2 < 4);
console.log(pirkti); // KODEL TRUE TAI NET NEZINAU :D


/* darom su html dabar, kad geriau isiminciau */

var yra = (13 +1) * 5;    // tipo 70 yra
var atkeliauja = 0.5 * (13 + 1);    // atkeliauja tipo 7

var isviso = yra + atkeliauja; // is viso tipo 77

var elyra = document.getElementById('yra');
elyra.textContent = '$' +yra;
var elatkeliauja = document.getElementById('atkeliauja');
elatkeliauja.textContent = '$' + atkeliauja;
var elviso = document.getElementById('isviso');
elviso.textContent = '$' + isviso;  // is viso gaunu 77

                                    /* Darau Stringus */

var pirmasVardas = 'Nerimas';
var vardoPavarde = ' Mockus';
var pilnasVardas = pirmasVardas + vardoPavarde;
console.log(pilnasVardas); // varda + pavarde sudedu ir gaunu kintamaji pilnasVardas

var kaina1 = '7';
var kaina2 = '9';
var suma = kaina1 + kaina2;
console.log(suma); // kadangi darom stringuose (''), tai gauname ne sudeti o 7 susideda su 9 i viena skaiciu = 79

var numeris = 231;
var adresas = 'Kalnieciu';
var prideti = numeris + adresas;

var elprideti = document.getElementById('prideti');
elprideti.textContent = prideti;

var score = 'seven';
var score2 = 'nine';
var total = score * score2;
console.log(total); // gaunu NAN, nes bandau dauginti NE SKAICIU. seven * nine = NAN.


// bandau daryti pasisveikinima sudedamas STRINGUS
var pasisveikinimas = 'Labukas';
var vardas = ' Nerimas';

var pasisveikinoZinute = pasisveikinimas + vardas;

var el = document.getElementById('pasisveikinimas');
el.textContent = pasisveikinoZinute;

                                            /* FUNCTIONS */

// var msg = 'Uzsiprenumeruok ir gauk net 10% nuolaida!';
// function updateMessage () {
//     var el = document.getElementById('msg');
//     el.textContent = msg;
// }                                         NELABAI SUPRANTU KODEL NEVEIKIA, GAL TAI TIK PAVYZDYS
// updateMessage();

// function sayHello() {
//     document.getElementById('labas');
// }
// console.log(sayHello);

function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var wallOne = calculateArea(3, 5 );
var wallTwo = calculateArea(8, 5);

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];

console.log(areaOne); // kazkaip idomiai, nes console.log isveda abu, o jeigu darai, kad tiesiai i html eitu tada tik 18, o 6 neisveda. Turbut reikia kurti atskiras funkcijas
el.textContent = areaOne
console.log(volumeOne);
el.textContent = volumeOne

// jeigu nori iskviesti named function, tai funkcijai butinai reikia duoti varda pvz:
function area(plotis, aukstis) {
    return plotis * aukstis;
}
var size = area(1920, 1080);
console.log(size);
el.textContent = size

// function expression

var area = function(plotis, aukstis) {
    return plotis * aukstis;
}
var size = area(5, 8);
console.log(size);

var zeme = (function() { // sita funkcija yra kaip apsauganti, jeigu kartojasi daug tokiu paciu funkciju pries function dedu ( = (function ir po uzbaigimo dedu ());
var plotis = 3;
var aukstis = 2
return plotis * aukstis;
}());
console.log(zeme);

// sprendiu funkciju uzdavinius is mokyklos
function printKaina(x) {
console.log(15.99) + "kaina: " + x;
}
printKaina(15.99);


function printKaina(x) {
    console.log("kaina: " + x);
}
printKaina(999);

function printKaina(x) {
    console.log("kaina: " + x);
}
printKaina(13.49);

function printKaina(x) {
    console.log("kaina: " + x);
}
printKaina(103);

function sudeti(x, y, c, d, f) {
   var suna = x + y + c + d + f;
   console.log("gaunasi: " + suna);
}
sudeti(5, 6, 9, 10, 15);

function dalinti(x, y) {
    var suma = x /y;
    console.log("gaunu: " + suma)
}
dalinti(45, 5);

function getVardas() {
var name = "Maiklas";
return name;
}
console.log(getVardas() + " Dziumbrinis");

function getPajamos() {
    pinigai = 2000 - 600;
    console.log(pinigai);
}

function pazymiuVidurkis(x, y, c, d, e ,f) {  // siaip ne taip apskaiciavau lygti
    var pazymiai = (x + y + c + d + e + f) /5 ;
    console.log("Gaunu " + pazymiai);
}
pazymiuVidurkis(5, 7, 10, 9, 8, 10);

function getPelnas() {
    var bendras = 3000 - 1000;
    return bendras;
}
console.log(getPelnas());


                                        /* OBJEKTAI */


// var hotel = {                          // PROPERTIES
//     name : "viesbutis",
//     rooms : 50,
//     booked : 25,
//     gym : true,
//     roomTypes : ['dvyniai','dvigubas','prabangus'],
//     checkAvailability : function() {               // METHODS
//         return this.rooms - this.booked;
//     }
//     }; console.log(hotel.checkAvailability); // tipo taip turi buti, bet man tai neveikia

    // var hotel = {                          // PROPERTIES
    //     name : "viesbutis",
    //     rooms : 50,
    //     booked : 25,
    //     gym : true,
    //     roomTypes : ['dvyniai','dvigubas','prabangus']};
    //     var checkAvailability = hotel.rooms - hotel.booked;
    //      console.log(checkAvailability); // sitas veikia normaliai, susikuriu kintamaji

    // var hotel = {                          // PROPERTIES
    // name : 'Kaunas',
    // rooms : 50,
    // booked : 25,
    // checkAvailability : function() {               // METHODS
    // return this.rooms - this.booked;
    // }
    // }; 
    // var elname = document.getElementById('hotelName');
    // elname.textContent = hotel.name;

    // var elrooms = document.getElementById('rooms');
    // elrooms.textContent = hotel.checkAvailability();

    var hotel = {                          // PROPERTIES
        name : "viesbutis",
        rooms : 50,
        booked : 25,
        checkAvailability: function() {
            return this.rooms - this.booked;
        }
    }; 
    var elHotel = document.getElementById('Liaba');
    elHotel.textContent = "Liaba turi " + " " + hotel.checkAvailability() + " " + "druskos";

         
         var elName = document.getElementById('hotelName');
         elName.textContent = hotel.name + " " + hotel.rooms;
         var elRooms= document.getElementById('rooms');
         elRooms = hotel.checkAvailability;


         var hotelis = {
            vardas : "Kaunas",
            kambariai : 500,
            rezervuoti : 170,
         kiekLiko : function() {
            return this.kambariai - this.rezervuoti;
             }
         };
         var elViesbutis = document.getElementById('hotelis');
         elViesbutis.textContent = hotelis.vardas + " " + hotelis.kiekLiko(); // butinai uzdeti kvieciant funkcija kiekLiko() <- skliaustai
         var elKambariai = document.getElementById('likeKambariai');
         elKambariai = hotelis.kiekLiko;


         var shopas = {
             nike : 100,
             puma : 57,
             adidas: 111,
             isViso : function() {
                 return this.nike +  this.puma + this.adidas;
             }
         }
         var elPav = document.getElementById('Turim:');
         elPav.textContent = "Is viso turime: " + " " + shopas.isViso();


         /* OBJEKTO KURIMAS */

    var viesbutis = new Object();   // naujas objekto kurimas
    viesbutis.vardas = 'Kaunas Hotel';
    viesbutis.kambariai = 70;
    viesbutis.uzimti = 25;
    viesbutis.checkAvailability = function() {
        return this.kambariai - this.uzimti;
    };
    console.log(viesbutis.checkAvailability());


    var masinos = {
        bmw5 : 5400,
        bmw3 : 4700,
        bmw7 : 6900,
        visiBMW : function () {
            return this.bmw5 + this.bmw3 + this.bmw7;
        }
    }
    var elBemwai = document.getElementById('bmw');
    elBemwai.textContent = "Visu bmw kainos: " + " " +  masinos.visiBMW();

    var hostel = new Object();
        hostel.vardas = 'Tomas';
        hostel.saldainiai = 10;
        hostel.suvalgyti = 4;
        hostel.patikrinti = function() {
            return hostel.saldainiai - hostel.suvalgyti;
        }

        var elVardas = document.getElementById('Tomas');
        elVardas.textContent = hostel.vardas + " " + "turejo" + " " + hostel.patikrinti();

        var elLaisvi = document.getElementById('Laisva');
        elLaisvi.textContent = "Laisvu kambariu yra:" + " " + hostel.patikrinti();


        var banditas = new Object();
        banditas.vardas = 'skaicius';
        banditas.metai = 3;
        banditas.atvaziavo = 2;
        banditas.kiekMetu = function() {
            return banditas.metai * banditas.atvaziavo;
        }

        var elBanditas = document.getElementById('Suniukas');
        elBanditas.textContent = banditas.vardas + " " + banditas.kiekMetu();

        var Rima = {
            vardas : 'mama',
            turejo : 48,
            isleido : 70,
            liko : function() {
         return this.turejo - this.isleido;       
            }
        }; console.log(Rima.vardas + " " + Rima.liko()); 
        

    

