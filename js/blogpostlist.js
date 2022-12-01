
const postsUrl = "https://edle.tech/wp-json/wp/v2/posts?_embed";

const postContainer = document.querySelector(".posts");
const imageContainer = document.querySelector(".images");

async function getPosts(url) {
      const response = await fetch(url);
      const getWPPosts = await response.json();


console.log(getWPPosts);

getWPPosts.forEach(function(onePost){
   console.log(onePost._embedded['wp:featuredmedia'][0].source_url);
   postContainer.innerHTML +=`
   <article class="post">
   <a href="blogpostspes.html?id=${onePost.id}">
      <img class="images" src="${onePost._embedded['wp:featuredmedia']['0'].source_url}">
      <h1>${onePost.title.rendered}</h1>
      <p>${onePost.excerpt.rendered}</p>
         <button>Read More</button>
      </a>
   </article>`
  });
  

//   catch (error) {
//    console.log(error);
//    postContainer.innerHTML = message("error", error);
//   }
}
   getPosts(postsUrl); 

  
