// const inputEl = document.querySelector(".input");
// const bodyEl = document.querySelector("body");

// inputEl.checked = JSON.parse(localStorage.getItem("mode"));
// update_body();

// const update_body = () =>
// {
//     if (inputEl.checked) {
//         bodyEl.style.backgroundColor = "black";
//     } else {
//         bodyEl.style.backgroundColor = "white";
//     }
// }


// inputEl.addEventListener("input", () =>
// {
//     update_body();
//     update_local_storage();
// });


// const update_local_storage = () =>
//     {
//         localStorage.setItem("mode", JSON.stringify(inputEl.checked));
//     }


const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}