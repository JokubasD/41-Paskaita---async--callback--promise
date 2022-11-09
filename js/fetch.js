'use strict';
console.log('fetch.js');

// fetch('https://jsonplaceholder.typicode.com/posts/2')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     document.title = data.title
//   })
//   .catch((error) => console.log('there is an error somewhere', error)) 
const ulEl = document.getElementById('posts');

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then((response) => response.json())
  .then((dataInJSFormat) => {
    console.log(dataInJSFormat)
    dataInJSFormat.forEach((userObj) => {
        const el = document.createElement('li');
        el.textContent = `${userObj.username} (${userObj.phone})`
        ulEl.append(el)
    });
  })
  .catch((error) => console.log('there was an error: ', error))