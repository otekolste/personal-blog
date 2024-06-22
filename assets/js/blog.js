const postList = document.getElementById('posts'); // Gets element to unordered list element, which will store all of the post objects

let posts = [];

function renderPosts(){ // function to display every stored post on page
    postList.innerHTML = ''; // Sets initial posts to empty string (so we don't end up repeating posts)

    for(let i = 0; i<posts.length; i++){ // Iterates through 

        const post = posts[i]; // Takes current post

        const li = document.createElement('li'); // Creates a new list element, to hold the post
        const h2 = document.createElement('h2'); // Creates header 2, paragraph, and header 3 elements to display post information
        const para = document.createElement('p');
        const h3 = document.createElement('h3');

        h2.textContent = post.postTitle; // Sets text in each newly-created element to what is contained in the post object
        para.textContent = post.postContent;
        h3.textContent = "Authored by " + post.postUsername;

        postList.appendChild(li); // Appends list item as child of the unordered list of posts
        li.appendChild(h2); // Appends the header 2, paragraph, and header 3 (title, content, and author, respectively) as children of the list element
        li.appendChild(para);
        li.appendChild(h3);

    }

}

function init() { // Called when page is loaded
    const storedPosts = JSON.parse(localStorage.getItem('posts')); // Retrieves list of post objects from local storage

    if(storedPosts!==null) { // Checks if stored array is null; otherwise assigns  local array object to stored array
        posts = storedPosts;
    }

    renderPosts(); // Displays posts on page
}

init();