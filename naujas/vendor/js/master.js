
 // Intro SPLASH izanga
 const splash = document.querySelector('.splash') 
 document.addEventListener('DOMContentLoaded', (e)=> {
     setTimeout(() => {
         splash.classList.add('neberodyti');
     }, 10000);
 })     

 // SPLASH texto efektas
 var izanga = {};
 izanga.opacityIn = [0,1];
 izanga.scaleIn = [0.2, 1];
 izanga.scaleOut = 3;
 izanga.durationIn = 1000;
 izanga.durationOut = 600;
 izanga.delay = 100;

anime.timeline({loop: true})
 .add({
   targets: '.izanga .skaiciai-1',
   opacity: izanga.opacityIn,
   scale: izanga.scaleIn,
   duration: izanga.durationIn
 }).add({
   targets: '.izanga .skaiciai-1',
   opacity: 0,
   scale: izanga.scaleOut,
   duration: izanga.durationOut,
   easing: "easeInExpo",
   delay: izanga.delay
 }).add({
   targets: '.izanga .skaiciai-2',
   opacity: izanga.opacityIn,
   scale: izanga.scaleIn,
   duration: izanga.durationIn
 }).add({
   targets: '.izanga .skaiciai-2',
   opacity: 0,
   scale: izanga.scaleOut,
   duration: izanga.durationOut,
   easing: "easeInExpo",
   delay: izanga.delay
 }).add({
   targets: '.izanga .skaiciai-3',
   opacity: izanga.opacityIn,
   scale: izanga.scaleIn,
   duration: izanga.durationIn
 }).add({
   targets: '.izanga .skaiciai-3',
   opacity: 0,
   scale: izanga.scaleOut,
   duration: izanga.durationOut,
   easing: "easeInExpo",
   delay: izanga.delay
 }).add({
   targets: '.izanga',
   opacity: 0,
   duration: 2000,
   delay: 500
 });        
        // slideris bruksniui po Headerio (tapk cempionu)
var minheight = 20;
var maxheight = 100;
var time = 1000;
var timer = null;
var toggled = false;

window.onload = function() {
    var controller = document.getElementById('aprasymas');
    var slider = document.getElementById('aprasymas');
    slider.style.height = minheight + 'px'; 
    controller.onmouseover = function() {  
        clearInterval(timer);
        var instanceheight = parseInt(slider.style.height);
        var init = (new Date()).getTime(); 
        var height = (toggled = !toggled) ? maxheight: minheight; 

        var disp = height - parseInt(slider.style.height);
        timer = setInterval(function() {
            var instance = (new Date()).getTime() - init; 
            if(instance <= time ) { 
                var pos = instanceheight + Math.floor(disp * instance / time);
                slider.style.height =  pos + 'px';
            }else {
                slider.style.height = height + 'px';
                clearInterval(timer);
            }
        });
    };
};

        // fade in slideris
var faders = document.querySelectorAll('.fade-in');
var appearOptions = {
    threshold : 1,
    rootMargin: "0px 0px -30px 0px"
};

var appearOnScroll = new IntersectionObserver(function
    (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions );

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

//  "Atsisiusti" teksto efektas
    
var textWrapper = document.querySelector('.textEfektas .raides');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='rade'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.textEfektas .raides',
    rotateY: [-90, 0],
    duration: 1700,
    delay: (el, i) => 1700 * i
  }).add({
    targets: '.textEfektas',
    opacity: 0,
    duration: 1700,
    easing: "easeOutExpo",
    delay: 2000
  });

//   Text efektas su "TAPK CEMPIONU" pavadinimu
  anime.timeline({loop: true})
  .add({
    targets: '#aprasymas ',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 2000,
    delay: (el, i) => 2000 * i
  }).add({
    targets: '#aprasymas',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 3000
  });
