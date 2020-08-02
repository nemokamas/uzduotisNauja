var pass = 50; // pass mark
var score = 90; // required number to score

// paziureti ar vartotojas praejo etapa
var hasPassed = score >= pass;

var el = document.getElementById('Pass');
el.textContent = 'Ar praejai : ' + hasPassed;

/* tikrinu ar tai yra auksciausias balas (naujas rekordas) */

var score1 = 90; // pirmo roundo rezultatas
var score2 = 95; // antro roundo rezultatas
var highScore1 = 75; // pirmo roundo geriausias rezultatas
var highScore2 = 97; // antro roundo geriausias rezultatas

// paziurim ar highscore didesnis negu dabartinis highscore
var palyginimas = (score1 + score2) > (highScore1 + highScore2);

// atsakymas
var el = document.getElementById('tikrinuu');
el.textContent = 'Naujas rekordas : ' + palyginimas;

var rez1 = 8; // round 1
var rez2 = 8; // round 2
var pass1 = 6; // round 1 minimalus balu skaicius, kad islaikyti
var pass2 = 6; // round 2 minimalus balu skaicius, kad islaikyti

var arIslaikyta = (rez1 >= pass1) && (rez2 >= pass2);
// sukuriam zinute
var zinute = 'Abu roundai islaikyti: ' + " " + arIslaikyta;
// parasom zinute i html
var el = document.getElementById('atsakymas1');
el.textContent = zinute;

var rezas1 = 9;
var rezas2 = 7;
var reikia1 = 5;
var reikia2 = 5;

var minPass = ((rezas1 >= reikia1)) || (rezas2 >= reikia2);
var naujaZinute = 'paziurim : ' + !minPass; // tas sauktukas yra logical NOT, tai reiskia, kad jeigu TRUE , tai sugrazina FALSE
var el = document.getElementById('paziurim');
el.textContent = naujaZinute;

var rezas = 75;
var msg;

if (score >= 50) { // jeigu rezultatas yra 50 arba daugiau
msg = 'Sveikinu ';
msg += ' Susitiksime kitame etape';
}
var el = document.getElementById('laimetojas');
el.textContent = msg;

var score = 75;
var msg = "";
function congralutions() {
    msg += 'Congralutions ';
}
if (score >= 50) {
    congralutions();
    msg += 'Susimatysim';
} 
var el = document.getElementById('answer');
el.innerHTML = msg; 

/* IF ELSE */

var reikalingi = 40;
var balai = 39;
var msg;

if (balai >= reikalingi) {
    msg = "Sveikinu, tu islaikei egzamina";
} else {
    msg = "Sorry, kita karta";
}
var el = document.getElementById('egzas');
el.textContent = msg;

/* SWITCH */

var msg; // zinute
var level = 2; // lygis nurodo kelintam lygyje esu, o tada case 2 paraso

// prilyginu zinute lygiui
switch (level) {
    case 1:
        msg = 'Sekmes pirmajame etape';
        break;
    case 2:
        msg = 'Antras is triju, nesustok';
        break;
    case 3:
        msg = 'Paskutinis, jau beveik!';
    default :
        msg = 'Sekmes';
        break;
}
var el = document.getElementById('switchas');
el.textContent = msg;

var rezultatai = [17, 28, 97]; // array of scores
var arrayLength = rezultatai.length; // items in array
var roundNumber = 0; // current round
var msg = ''; // message
var i; // counter

// Loop through the items in the array
for (i = 0; i < arrayLength; i++) {
    // Arrays are zero based (so 0 is round 1)
    // Add 1 to the current round
    roundNumber = (i + 1);
    // Write the current round to message
    msg += 'Round' + roundNumber + ': ';
    // Get the score from the scores array
    msg += rezultatai[i] + '<br />';
}
document.getElementById('loopas').innerHTML = msg;


var masinos = [13, 7, 20];
var modeliai = masinos.length;
var msg = '';
var i;

for (i = 0; i < modeliai; i++) {
    msg += 'Modeliai : ' + masinos;
}
document.getElementById('modeliai').innerHTML = msg;


    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
      text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;

    // for (var i = 0; i < 5; i++) { // taip atrodo FOR LOOP, zodziu i < 5, tai isveda : 0,1,2,3,4
    //     document.write(i);
    // }

    /* WHILE LOOPS */

    var i = 0 // set counter to 1
    var msg = ''; // message

    // store 5 items table in a variable 
    while (i < 10) {
        msg += i + ' x 5 = ' + (i * 5) + '<br />';
        i++;
    }
    document.getElementById('while').innerHTML = msg;

    var i = 1;
    var msg = '';

    while ( i < 20) {
    msg += i + ' + 5 = ' + (i + 5) + '<br>';
    i++;
    }
    document.getElementById('while2').innerHTML = msg;

    /* DO WHILE */

    var i = 1;
    var sms = '';

    do {
        sms += i + ' x 5 = ' + (i * 5) + '<br>';
        i++
    } while (i < 1);

    document.getElementById('ats').innerHTML = sms;


    var lentele = 3;
    var operatorius = 'papildoma';
    var i = 1;
    var msg = '';

    if ( operatorius === 'papildoma') {
        while ( i < 11) {
            msg += i + ' + ' + lentele + ' = ' + (i + lentele) + '<br />';
            i++;
        }
    } else {
        while ( i < 11) {
            msg += i + ' x ' + lentele + ' = ' + (i * lentele ) + '<br />';
            i++;
        }
    }
    var el = document.getElementById('kazkasBus');
    el.innerHTML= msg;

 