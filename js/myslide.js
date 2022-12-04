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
