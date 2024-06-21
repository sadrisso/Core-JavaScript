const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");


const update_body = () =>
{
    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("click", () => {
    update_body();
});