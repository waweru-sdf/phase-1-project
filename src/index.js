function renderOnepost(post){
    let postcard= document.createElement('div');
    postcard.className= 'post-card';
    postcard.innerHTML=`
    <img src="${post.imageUrl}"/>
    <div class="content">
     <h2>${post.country}</h3>
     <p>${post.description}</p>
    </div>
    `;
    document.getElementById('post-list').appendChild(postcard);
}
function getAllPosts(){
    fetch('http://localhost:3000/post')
    .then(res => res.json())
    .then(postsdata => postsdata.forEach(renderOnepost))
}

document.addEventListener("DOMContentLoaded", function(){
    getAllPosts();
})

document.getElementById('form-post').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  const newPost = {
    country: document.getElementById('visited-country').value,
    imageUrl: document.getElementById('image-url').value,
    description: document.getElementById('description').value
  };

  // POST to the server
  fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(response => response.json())
  .then(addedPost => {
    // now addedPost is just like the ones from your GET
    renderOnePost(addedPost);  // reuse your innerHTML function here!
  });
});

/*function renderOneFavorite(favorite){
    let favoritecard= document.createElement('div');
    favoritecard.className= 'favorite-card';
    favoritecard.innerHTML=`
    `

}