const postList = document.getElementById('posts');

let posts = [];

function renderPosts(){
    postList.innerHTML = '';

    for(let i = 0; i<posts.length; i++){

        const post = posts[i];

        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const para = document.createElement('p');
        const h3 = document.createElement('h3');

        h2.textContent = post.postTitle;
        para.textContent = post.postContent;
        h3.textContent = "Authored by " + post.postUsername;

        postList.appendChild(li);
        li.appendChild(h2);
        li.appendChild(para);
        li.appendChild(h3);

    }

}

function init() {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));

    if(storedPosts!==null) {
        posts = storedPosts;
    }

    renderPosts();
}

init();