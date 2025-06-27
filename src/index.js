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
    fetch('https://phase-1-server.onrender.com/post')
        .then(res => res.json())
        .then(postsData => postsData.forEach(renderOnePost));
}

//Fetch code for my second object on my db.json "favorite"
function renderOneFavorite(favorite){
    let favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card';
    favoriteCard.innerHTML = `
        <div id="favorite-content">
            <h3 id="h3">${favorite.country}</h3>
            <p id="paragraph">${favorite.description}</p>
        </div>
    `;
    document.getElementById('favorites-list').appendChild(favoriteCard);
}

function getAllFavorites(){
    fetch('https://phase-1-server.onrender.com/favorite')
        .then(res => res.json())
        .then(favoritesData => favoritesData.forEach(renderOneFavorite));
}
// fetch for my third object in db.json "later"
function renderOnelater(later){
    let latercard = document.createElement('div');
    latercard.className = 'later-card';
    latercard.innerHTML = `
        <img src="${later.imageUrl}"/>
        <div class="later">
            <h4>${later.country}</h4>
        </div>
    `;
    document.getElementById('to-go-to-list').appendChild(latercard);
}

function getAlllaters(){
    fetch('https://phase-1-server.onrender.com/later')
        .then(res => res.json())
        .then(laterData => laterData.forEach(renderOnelater));
}
document.addEventListener("DOMContentLoaded", function(){
    getAllPosts();
    getAllFavorites();
    getAlllaters();

    // ✅ Submit for "post"
    document.getElementById('form-post').addEventListener('submit', function(e) {
        e.preventDefault(); 
        const newPost = {
            country: document.getElementById('visited-country').value,
            imageUrl: document.getElementById('image-url').value,
            description: document.getElementById('description').value
        };
        fetch('https://phase-1-server.onrender.com/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(addedPost => renderOnePost(addedPost));
    });

    // ✅ Submit for "favorite"
    document.getElementById('favorites').addEventListener('submit', function(e) {
        e.preventDefault(); 
        const newFavorite = {
            country: document.getElementById('favorite-country').value,
            description: document.getElementById('love').value
        };
        fetch('https://phase-1-server.onrender.com/favorite', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFavorite)
        })
        .then(response => response.json())
        .then(addedFavorite => renderOneFavorite(addedFavorite));
    });

    // ✅ Submit for "later"
    document.getElementById('to-go-to-form').addEventListener('submit', function(e) {
        e.preventDefault(); 
        const newLater = {
            country: document.getElementById('to-visit-country').value,
            imageUrl: document.getElementById('visit-image').value,
        };
        fetch('https://phase-1-server.onrender.com/later', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLater)
        })
        .then(response => response.json())
        .then(addedLater => renderOnelater(addedLater)); 
    });
});