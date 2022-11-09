'use strict';
console.log('main.js')



function crEl(tagName, givenClass, text, destination){
    const El = document.createElement(tagName);
    if (givenClass) El.className = givenClass;
    if (text) El.textContent = text;
    destination.append(El);
    return El;
}