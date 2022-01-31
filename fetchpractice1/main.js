let arrayOfPosts;

const allPosts = document.getElementById('all-posts')
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getPosts()

}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfPosts)
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
    allPosts.innerHTML = ``
    arrayOfPosts.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}

const fivePost = () => {
    allPosts.innerHTML = ``
    for(let i = 0; i <= 5;i++){
        let li = document.createElement('li')
        let text = document.createElement('p')
        console.log(arrayOfPosts)
        text.innerHTML = `
        
            <h3>${arrayOfPosts[i].title}</h3>
            <div>${arrayOfPosts[i].body}</div>
        `
        li.appendChild(text)
        allPosts.append(li)
    }
}

/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/

let arrayOfUser;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => arrayOfUser = users)


const getUser = () =>{
    allPosts.innerHTML = ``
    arrayOfUser.map((user) => {
        console.log(user)
        let li = document.createElement('li')
        let text = document.createElement('p')
        text.innerHTML = `
        
            <h3>${user.name}</h3>
            <div>${user.username}</div>
        `
        li.appendChild(text)
        allPosts.append(li)
    })
    
}
let arrayofComments;

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(comments => arrayofComments = comments)

const getComments = () =>{
    allPosts.innerHTML = ``
    arrayofComments.map((comments) => {
        let li = document.createElement('li')
        let text = document.createElement('section')
        text.innerHTML =`
            <h3> ${comments.name}</h3>
            <p> ${comments.body} </p>
        `
        li.appendChild(text)
        allPosts.append(li)
    })
} 