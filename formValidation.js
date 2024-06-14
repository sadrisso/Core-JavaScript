let nameError = document.querySelector("#name-error");
let emailError = document.querySelector("#email-error");
let phoneError = document.querySelector("#phone-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");


const validateName = () =>
{
    let name = document.querySelector("#contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/))
        nameError.innerHTML = "write full name";
        return false;
}