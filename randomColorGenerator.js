const containerEl = document.querySelector(".container")

for (let i = 0; i < 30; i++)
{
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}


const randomColor = () =>
{
    const chars = "0123456789abcdef";
    const colorCodeLen = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLen; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber + 1);
        console.log(colorCode)
    }
}

randomColor();