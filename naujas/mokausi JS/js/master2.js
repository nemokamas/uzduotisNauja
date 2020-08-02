var brolis = new Object();
    brolis.pavarde = 'Mockus';
    brolis.metai = 25;
    brolis.tomas = 7;
    brolis.kiekMetu = function() {
        return brolis.metai - brolis.tomas;
    }
    console.log("Kiek broliui buvo metu, kai gime Tomas:" + " " + brolis.kiekMetu());
    
    
    // sudedam tu hotelius

    function Hotel(vardas, kambariai, uzsakyti) {
        this.vardas = vardas;
        this.kambariai = kambariai;
        this.uzsakyti = uzsakyti;
        this.kiekLiko = function() {
            return this.kambariai - this.uzsakyti;
        }
    } 
    var KaunasHotel = new Hotel('Kaunas', '380', '285');
    var VilniusHotel = new Hotel('Vilnius', '450', '395');

    var detales1 = KaunasHotel.vardas + ' kambariai ';
        detales1 += KaunasHotel.kiekLiko();
    var elHotel1 = document.getElementById('hotel1');
    elHotel1.textContent = detales1;
    
    var detales2 = VilniusHotel.vardas + ' kambariai ';
        detales2 += VilniusHotel.kiekLiko();
    var elHotel2 = document.getElementById('hotel2');
    elHotel2.textContent = detales2;  


    function Broliai(vardas, metai, gyvena) {
        this.vardas = vardas;
        this.metai = metai;
        this.gyvena = gyvena;
        this.mes = function () {
            return this.vardas ,  this.metai , this.gyvena;
        }
    }

    var NerimasBroliai = new Broliai('Nerimas', 'metai', 'Kaunas');
    var TomasBroliai = new Broliai('Tomas', 'metai', 'Kaunas');

    var braliukai1 = `${NerimasBroliai.vardas} 25 gyvena`;
        braliukai1 += NerimasBroliai.mes();
    var elBrolis = document.getElementById('brolis1');
    elBrolis = braliukai1;

    var braliukai2 = `${TomasBroliai.vardas} 7 gyvena`;
        braliukai2 += TomasBroliai.mes();
    var elBrolis2 = document.getElementById('brolis2');
    elBrolis2 = braliukai2;

    console.log(braliukai1 + braliukai2);

    // Pridedu ir atimu PROPERTIES //

    var viesbutis = {
        vardas : 'Amber',
        kambariai : 1245,
        uzimta : 767,
    };

    viesbutis.sale = true;
    viesbutis.baseinas = false;
    delete viesbutis.uzimta;

    var elVardas = document.getElementById('viesbutisVardas');
    elVardas.textContent = "Viesbucio pavadinimas:" + " " + viesbutis.vardas;

    var elBaseinas = document.getElementById('pool');
    elBaseinas.textContent = "Viesbucio baseinas:" + " " + viesbutis.baseinas;

    var elSale = document.getElementById('gym');
    elSale.textContent = "Viesbucio sporto sale:" + " " + viesbutis.sale;

    console.log(window.innerWidth); // parodo Width
    console.log(window.innerHeight); // porodo Height
    console.log(window.pageXOffset);
    console.log(window.screenX);
    console.log(window.location); // parodo visa informacija apie url adresa
    console.log(window.document);
    console.log(window.history); // parodo dabartinio window tag istorija
    console.log(window.history.length); // kiek itemu siame window tab istorijos
    console.log(window.screen); // parodo ismatavimus vaizdo
    // console.log(window.alert()); meta alert
    // console.log(window.open()); ismeta i new tab url koks irasytas (geras dalykas)
    // console.log(window.print()); cia jeigu nori atsispaudinti -> printina puslapi

    var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
    msg += '<p>height: ' + window.innerHeight + '</p>';
    msg += '<h3>history</h3><p>items: ' + window.history.length + '</p>';
    msg += '<h4>screen</h4><p>width: ' + window.screen.width + '</p>';
    msg += '<p>height: ' + window.screen.height + '</p>';
    var el = document.getElementById('info');
    el.innerHTML = msg;
    alert('Dabartinis puslapis' + window.location);

    console.log(document.title); // dokumento pavadinimas
    console.log(document.lastModified); // kada paskutini karta buvo modifikuotas
    console.log(document.URL); // parodo url adresa
    console.log(document.domain); // domeno pavadinimas
    
    var zinute = '<h1>Pavadinimas </h1><b>title: ' + document.title + '</b>';
    zinute += '<h3>Adresas</h3><b>' + document.URL + '</b>';
    zinute += '<h2>Pakeista </h2><b>Kada pakeista: ' + document.lastModified + '</b>';
    var el = document.getElementById('apacia');
    el.innerHTML = zinute;

    var saying = 'Home sweet home';
    console.log(saying);
    console.log(saying.length);
    console.log(saying.split(''));
    console.log(saying.replace('me','w'));

    var bandymas = '<h1>Ilgis</h1><b> ' + saying.length + '</b>';
    bandymas += '<h2>Isskirti</h2><b> ' + saying.split('') + '</b>';
    bandymas += '<h3>Pakeisti</h3><b> ' + saying.replace('me','w') + '</b>';
    var el = document.getElementById('darVienasBandymas');
    el.innerHTML = bandymas;

    // isNaN() patikrina ar value yra numeris
    // toFixed() suapvalina numeri (returns a string)
    // toPrecision() suapvalina bendra skaiciu vieta (returns a string)
    // toExponential() grazina string, atvaizda isplesto skaiciaus sumazinima

    var originalusSkaicius = 10.76854;

    var zinute ='<h2>Originalus</h2><b> ' + originalusSkaicius + '</b>';
    zinute += '<h3>Fixed</h3><b> ' + originalusSkaicius.toFixed(3) + '</b>';
    zinute += '<h4>Precision</h4> ' + originalusSkaicius.toPrecision(3) + '</b>';
    var el = document.getElementById('skaiciavimas');
    el.innerHTML = zinute;

    // Math.PI - Sugrazina pi 
    // Math. round - suapvalina skaiciu
    // Math.sqrt(n) istraukia sakni, pvz : Math.sqrt(9) isveda - 3
    // Math.ceil() suapvalina iki didziausio skaiciaus
    // Math.floor() suapvalina iki maziausio skaiciaus
    // Math.random() duoda lempini skaiciu nuo 0 iki 1

    var randomNum = Math.floor((Math.random() * 10) + 1);

    var el = document.getElementById('randomSkaicius');
    el.innerHTML = '<h2>Lempinis skaicius</h2><b> ' + randomNum + '</b>'; // gaunu skirtinga skaiciu kiekviena karta refreshinus

    var today = new Date();
    console.log(new Date()); // parodo mano PC laika

    var today = new Date();
    var year = today.getFullYear();

    var el = document.getElementById('naujas laikas');
    el.innerHTML = '<p>Copyright &copy; ' + year + '</p>'; // taip galima daryti COPYRIGHT, nes getFullYear parodo dabartinius metus.

    var siandien = new Date();
    var menesis = siandien.getMonth();

    var el = document.getElementById('menesis');
    el.innerHTML = '<h2>Menesis: ' + menesis + '</h2>';

    var dabar = new Date();
    var valandos = dabar.getHours();

    var el = document.getElementById('val');
    el.innerHTML = '<h1>Dabar valandu yra: ' + valandos + '<h1>';

    var laikas = new Date();
    var laikas2 = laikas.getHours();

    var el = document.getElementById('laikas');
    el.innerHTML = '<h1>Dabar valandu yra: ' + laikas2 + '<h1>';

    var sekundes = new Date();
    var mili = sekundes.getMilliseconds();

    var el = document.getElementById('sekundes');
    el.innerHTML = " " + '<h3> Kiek sekundziu ' + sekundes + '</h3>';
    
    var siandienva = new Date ();
    var metukai = siandienva.getFullYear();
    var est = new Date('Apr 16, 1996 16:12:50');
    var skirtumas = siandienva.getTime() - est.getTime(); // is dabartiniu metu (getFullYear) atimu nauja data (Apr 16, 1996...) ir gaunu SUAPVALINTUS 24 metus
    skirtumas = (skirtumas / 31556900000);

    var elMMsg = document.getElementById('tiesiog');
    elMMsg.textContent = Math.floor(skirtumas) + ' years of online travel advice';
    
    // baigiamasis skyrius

    var motel = {
        vardas : 'Motelis',
        kambariuRate : 350,
        nuolaida: 15,
        siulytiKaina : function() {
        var siulytiKaina = motel.kambariuRate * (( 100 - motel.nuolaida) / 100);
        return siulytiKaina;
        }
    }
console.log(Math.round (motel.siulytiKaina())); // gaunu 297 ir suapvalinu iki 298e.

// pajamos 5000
// algos 2350
// pelnas

var pelnas = {
    pajamos : 5000,
    algos : 2350,
    laisvi : function() {
        return pelnas.pajamos - pelnas.algos;
    }
}; console.log("Pelnas" + " " + pelnas.laisvi()); // noriu prisiminti funkciju sprendima tiesiog

// siandien baigiasi pasiulymas

var expiryMsg;  // Message displayed to users
var today;  // Today's date
var elEnds; // The element that shows the message about the offer ending

function offerExpires(today) {
    // declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br>' + date + ' ' + month + ' ' + year + ' ';
    return expiryMsg;
} 

today = new Date(); // put todays date in variable
elEnds = document.getElementById('offerEnds'); // get the offerEnds element
elEnds.innerHTML = offerExpires(today); // Add the expiry message

// finish the immediately invoked function expression




