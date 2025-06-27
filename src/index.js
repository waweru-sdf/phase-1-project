//Fetch code for my first object on my db.json "post"
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

//Fetch code for my second object on my db.json "favorite"
function renderOneFavorite(favorite){
    let favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card';
    favoriteCard.innerHTML = `
        <div id="favorite-content">
            <h3>${favorite.country}</h3>
            <p>${favorite.description}</p>
        </div>
    `;
    document.getElementById('favorites-list').appendChild(favoriteCard);
}

function getAllFavorites(){
    fetch('http://localhost:3000/favorite')
        .then(res => res.json())
        .then(favoritesData => favoritesData.forEach(renderOneFavorite));
}
//DOM content gets loaded first
document.addEventListener("DOMContentLoaded", function(){
    getAllPosts();
    getAllFavorites();
});


//post for my first form
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

//post for my second form
document.getElementById('favorites').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const newFavorite = {
        country: document.getElementById('favorite-country').value,
        description: document.getElementById('love').value
    };

    fetch('http://localhost:3000/favorite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFavorite)
    })
    .then(response => response.json())
    .then(addedFavorite => renderOneFavorite(addedFavorite));
});