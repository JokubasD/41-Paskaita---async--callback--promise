'use strict';
console.log('callback.js');

function getPost1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('post1');
            // cia as noriu kviesti post2
            resolve(1)
          }, 3000);
    }) 
}
function getPost2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('post2');
            resolve(2)
          }, 2000);
    })
  
}
function getPost3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('post3');
            resolve(3)
          }, 1800);
    })
  
}

// getPost1(getPost2);
// getPost2();
// getPost3();
// getPost1()
//     .then(() => getPost2())
//     .then(() => getPost3())
//     .catch((err) => console.warn('Error somewhere in getPost()', err))

Promise.all([getPost1(), getPost2(), getPost3()]).then((values) => {
    console.log(values)
}).catch(console.warn('Error somewhere in getPost()'))