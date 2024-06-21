const textArea = document.querySelector(".textarea");
const totalCharEl = document.querySelector(".total-character");
const remainCharEl = document.querySelector(".remaining-character");


textArea.addEventListener("keyup", () =>
{
    updateChar();
});


const updateChar = () =>
{
    let textLen = textArea.value.length;
    totalCharEl.innerHTML = textLen;
    remainCharEl.innerHTML = textArea.getAttribute("maxLength") - textLen;
}