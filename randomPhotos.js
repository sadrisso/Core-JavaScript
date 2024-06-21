const btnEl = document.querySelector(".btn");
const imgContainerEl = document.querySelector(".image-container");

btnEl.addEventListener("click", () =>
{
    imgNum = 3;
    addNewImg();
});


function addNewImg ()
{
    for (let i = 0; i < imgNum; i++)
    {
        let newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300/300?random=${Math.random() * 2000}`;
        imgContainerEl.appendChild(newImgEl);
    }
}