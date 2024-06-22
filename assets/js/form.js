const submitButton = document.getElementById("submitbutton"); // Gets reference to submit button
const username = document.getElementById("username"); // Gets reference to username element in form
const title = document.getElementById("title"); // Gets reference to title element in form
const content = document.getElementById("content"); // Gets reference to contentname element in form

let posts = [];

function submitForm(event) { // Function to handle form submission

    event.preventDefault(); // prevent page reload 

    if(username.value.length == 0) { // Checks that username is inputted, prompts user to try again if not
        alert("Please enter an username and try again!");
    }
    else if(title.value.length == 0) { // Checks that post title is inputted, prompts user to try again if not
        alert("Please enter a title for your post and try again!");
    }
    else if(content.value.length ==0) { // Checks that content is inputted, prompts user to try again if not
        alert("Brevity is the soul of wit, but your post needs to have some content!");
    }
    else {

        newPost = { // Creates a post object with the values from the form
            postUsername:username.value,
            postTitle:title.value,
            postContent:content.value
        };

        posts.push(newPost); // Adds post object to array
        storePosts(); // Calls function to store posts array in local storage

        window.location.href = '../../blog.html'; // Redirects page to blog post page

    }
    

}

function storePosts(){ // Updates array of posts in local storage
    localStorage.setItem('posts', JSON.stringify(posts));
}

function init(){ // A function to call when page is first loaded

    const storedPosts = JSON.parse(localStorage.getItem('posts')); // Retrieves array of posts from storage
    if(storedPosts!==null) { // Checks if null; if not, assigns local array to stored array value
        posts = storedPosts;
    }

}

init();

submitButton.addEventListener('click', submitForm); // Adds event listener to form submit button