
const postsUrl = "https://www.edle.tech/wp-json/wp/v2/posts?pr-page";

const postContainer = document.querySelector(".posts");
const imageContainer = document.querySelector(".images");

async function getPosts(url) {
   try {
      const response = await fetch(url);
      const getWPPosts = await response.json();


console.log(getWPPosts);

getWPPosts.forEach(function(onePost){
   console.log(onePost);
   postContainer.innerHTML +=`
   <div class="posts">
   <h1>${onePost.slug}</h1>
   <a href="blogpostlist.html?id= ${onePost.content}">
    <div>
      <img class="images" width="500" height="500" style="background-image:url('${onePost.embeddable}[0].thumbnail}')">
    </div>
   </div>`
  });
  }

  catch (error) {
   console.log(error);
   postContainer.innerHTML = message("error", error);
  }
}
   getPosts(postsUrl); 

  
