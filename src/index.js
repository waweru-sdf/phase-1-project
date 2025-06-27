function renderOnePost(post){
    let postcard = document.createElement('div');
    postcard.className = 'post-card';
    postcard.innerHTML = `
        <img src="${post.imageUrl}"/>
        <div class="content">
            <h2>${post.country}</h2>
            <p>${post.description}</p>
        </div>
    `;
    document.getElementById('post-list').appendChild(postcard);
}

function getAllPosts(){
    fetch('http://localhost:3000/post')
        .then(res => res.json())
        .then(postsData => postsData.forEach(renderOnePost));
}

document.addEventListener("DOMContentLoaded", function(){
    getAllPosts();
    getAllFavorites(); // move both here
});

document.getElementById('form-post').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const newPost = {
        country: document.getElementById('visited-country').value,
        imageUrl: document.getElementById('image-url').value,
        description: document.getElementById('description').value
    };

    fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(addedPost => renderOnePost(addedPost));
});

function renderOneFavorite(favorite){
    let favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card';
    favoriteCard.innerHTML = `
        <div id="favorite-content">
            <h3>${favorite.country}</h3>
            <p>${favorite.whatILove}</p>
        </div>
    `;
    document.getElementById('favorites-list').appendChild(favoriteCard);
}

function getAllFavorites(){
    fetch('http://localhost:3000/favorite')
        .then(res => res.json())
        .then(favoritesData => favoritesData.forEach(renderOneFavorite));
}
