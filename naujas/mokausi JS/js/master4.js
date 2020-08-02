var elements = document.getElementsByClassName('hot');

if (elements.length > 2) {
    var el = elements[2];
    el.className = 'cool'
}

var elements = document.getElementsByTagName('li');
if (elements.length > 0) {
    var el = elements[0];
    el.className = 'cool';
}

var el = document.querySelector('li.hot');
el.Classname = 'cool';

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';

var hotItems = document.querySelectorAll('li.hot');
if (hotItems.length > 0) {
    for ( var i=0; i<hotItems.length; i++) {
        hotItems[i].className = 'cool';
    }
}
console.log(hotItems);

// Select the starting point and find its sibblings
var startItem = document.getElementById('du');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the value of sibblings class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';

// Select the starting point and find its children
var startItem = document.getElementById('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;
// Cahnge the values of the children class attributes
firstItem.setAtrribute('class','complete');
lastItem.setAtrribute('class', 'cool');

