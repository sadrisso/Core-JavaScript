
const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (e) =>
{
    const posX = e.offsetX;
    const posY = e.offsetY;
    const spanElement = document.createElement("span");
    spanElement.style.left = posX + "px";
    spanElement.style.top = posY + "px";
    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
})


// const bodyEl = document.querySelector("body");

// bodyEl.addEventListener("mousemove", (event) => {
//   const xPos = event.offsetX;
//   const yPos = event.offsetY;
//   const spanEl = document.createElement("span");
//   spanEl.style.left = xPos + "px";
//   spanEl.style.top = yPos + "px";
//   const size = Math.random() * 100;
//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";
//   bodyEl.appendChild(spanEl);
//   setTimeout(() => {
//     spanEl.remove();
//   }, 3000);
// });