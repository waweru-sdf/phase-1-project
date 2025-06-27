function renderOnepost(post){
    let postcard= document.createElement('div');
    postcard.className= 'post-card';
    postcard.innerHTML=`
    <img src="${post.imageUrl}"/>
    <div class="content">
     <h2>${post.country}</p>
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
