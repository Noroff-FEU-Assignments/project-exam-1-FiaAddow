const postUrl = "https://edle.tech/wp-json/wp/v2/posts?_";
const postContainer = document.querySelector(".onepost");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const postContent = params.get("content");


async function getPost(url){
    const newUrl = url + postContent

    const response = await fetch(newUrl);
    const postContent = await response.json();
console.log(onePost.content);
       postContainer.innerHTML += `
        <div class="onepost">
          <h1>${content.rendered}</h1>
        </div>
        `
        
        

}

getPost(postUrl);
