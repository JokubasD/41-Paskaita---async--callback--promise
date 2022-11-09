'use strict';
console.log('promise.js');

//promise anatomy

function pr1 () {
    return new Promise((resolve, reject) => {
        let noError = true;
        noError ? resolve('OK') : reject('BAD BAD THING HAPPENED')
    })
}

console.log('pr1() ===', pr1());
pr1()
    .then((ats) => {
        console.log(ats)
        return ats.toLowerCase()
    })
    .then((antrasThen) => console.log('antrasThen ===', antrasThen))
    .catch((err) => console.warn(err))