const postUrl = "https://edle.tech/wp-json/wp/v2/posts/";
const postContainer = document.querySelector(".one-post");


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const postContent = params.get("id");

async function getPost(url){
    const newUrl = url + postContent
console.log(newUrl)
    const response = await fetch(newUrl);
    const onePost = await response.json();
console.log(onePost);
       postContainer.innerHTML += `
        ${onePost.content.rendered}
       
        `
        
        

}

getPost(postUrl);
