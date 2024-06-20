const submitButton = document.getElementById("submitbutton");
const username = document.getElementById("username");
const title = document.getElementById("title");
const content = document.getElementById("content");

const posts = [];

function submitForm(event) {

    event.preventDefault();

    if(username.value.length == 0) {
        alert("Please enter an username and try again!");
    }
    else if(title.value.length == 0) {
        alert("Please enter a title for your post and try again!");
    }
    else if(content.value.length ==0) {
        alert("Brevity is the soul of wit, but your post needs to have some content!");
    }
    else {

        newPost = {
            postUsername:username.value,
            postTitle:title.value,
            postContent:content.value
        };

        posts.push(newPost);
        storePosts();

        window.location.href = '../blog.html';

    }
    

}

function storePosts(){
    localStorage.setItem('posts', JSON.stringify(posts));
}

function init(){

    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if(storedPosts!==null) {
        posts = storedPosts;
    }

}

init();

submitButton.addEventListener('click', submitForm);