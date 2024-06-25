const magnifireEl = document.querySelector(".magnifire");
const searchBarContainerEl = document.querySelector(".search-bar-container");


magnifireEl.addEventListener("click", () =>
{
    searchBarContainerEl.classList.toggle("active");
})