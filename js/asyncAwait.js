'use strict';
console.log('asyncAwait.js');

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

async function app() {
    try {
        await getPost1();
        await getPost2()
        getPost3()
    } catch(error) {
        console.log(error, 'pagavau klaida')
    }
    
}
app()
