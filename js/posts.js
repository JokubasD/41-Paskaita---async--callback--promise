'use strict';
console.log('posts.js');

const posts = [

    { title: 'Post One', body: 'This is post One body' },
  
    { title: 'Post Two', body: 'This is post Two body' },
  
  ];

const postsListEl = document.getElementById('posts');

function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.forEach((pObj) => {
                const liEl = document.createElement('li');
                liEl.textContent = `${pObj.title} - ${pObj.body}`
                postsListEl.append(liEl)
            })
        }, 1000)
        resolve()
    })
    
}

function createPost(postObj) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            posts.push(postObj)
        }, 2000) 
        resolve()
    })
    
}

// createPost({ title: 'Post Three', body: 'This is post Three body' })
//     .then(() => getPosts())
//     .catch((err) => console.log('there is an error somewhere', err))

const url2 = 'https://jsonplaceholder.typicode.com/posts'
fetch(url2)
    .then((response) => response.json())
    .then((data) => {
        const postArr = data.filter((value, index) => index < 10)
        console.log('postArr ===', postArr);
        generateUserList(postArr)
    })
    .catch((err) => console.log('there is an error somewhere', err))

function generateUserList(arr) {
    arr.forEach((postObj) => {
        const el = document.createElement('div');
        el.className = 'card'
        const titleEl = document.createElement('h2');
        titleEl.textContent = postObj.title
        const pEl = document.createElement('p');
        pEl.textContent = postObj.body
        el.append(titleEl)
        el.append(pEl)
        document.body.append(el)
    })
}