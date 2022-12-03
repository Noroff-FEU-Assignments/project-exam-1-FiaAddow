const postsUrl = "https://edle.tech/wp-json/wp/v2/posts?_embed";

const postsContainer = document.getElementById("posts-container");
const post = document.querySelector(".post");
const prevButton = document.getElementById("arrow-prev");
const nextButton = document.getElementById("arrow-next");

nextButton.addEventListener("click", () => {
  const postWidth = post.clientWidth;
  postsContainer.scrollLeft += postWidth;
});

prevButton.addEventListener("click", () => {
  const postWidth = post.clientWidth;
  postsContainer.scrollLeft -= postWidth;
});

/*carusell*/

async function getPosts(url) {
  const response = await fetch(url);
  const getWPPosts = await response.json();




getWPPosts.forEach(function(onePost){
console.log(onePost._embedded['wp:featuredmedia'][0].source_url);
postsContainer.innerHTML +=`
<li class="post">
    <img src="${onePost._embedded['wp:featuredmedia'][0].source_url}">
    </li>`
});



}
getPosts(postsUrl); 


