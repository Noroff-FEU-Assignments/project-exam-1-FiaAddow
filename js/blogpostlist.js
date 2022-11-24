const baseUrl = "https://www.edle.tech/wp-json/wp/v2/posts";
const postContainer = document.querySelector(".posts");

async function getPosts(url){
    const response = await fetch(url);
    const postsFromWP = await response.json();

    console.log(postsFromWP);
}


   getPosts(baseUrl); 


   