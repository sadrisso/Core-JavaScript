
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
const img = document.querySelector(".notes-container img")


const show_notes = () =>
{
    notesContainer.innerHTML = localStorage.getItem("notes");
}

show_notes();

const update_storage = () =>
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () =>
{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/trush.jpg";
    img.className = "img";
    notesContainer.appendChild(inputBox).appendChild(img);
});


notesContainer.addEventListener("click", (e) =>
{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        update_storage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((n) => {
            n.onkeyup = function() {
                update_storage();
            }
        });
    };
});
