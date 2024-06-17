
const container = document.querySelector(".container");
const careers = ["YouTuber", "Web Developer", "Photographer", "Instructor"]
let careersIdx = 0;
let charIdx = 0;



function update_text ()
{
    charIdx++;

    container.innerHTML = `<h1>I am a ${careers[careersIdx].slice(0, charIdx)}</h1>`;

    setTimeout(update_text, 200)

    if (charIdx === careers[careersIdx].length) {
        careersIdx++;
        charIdx = 0;
    }
}

update_text();