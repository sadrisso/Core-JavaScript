const testimonials = [
    {
        name: "Cherise G",
        imgUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple products seamlessly blend cutting-edge technology with sleek design, enhancing my daily life with unparalleled performance and style. Their commitment to innovation continually sets the standard in the tech industry."
    },
    {
        name: "CheriY M",
        imgUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Switching to Apple has been a game-changer; their devices integrate effortlessly, making my workflow smoother and more efficient. The customer service is also outstanding, ensuring a hassle-free experience."
    },
    {
        name: "Cise H",
        imgUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's attention to detail and commitment to quality is evident in every product they release. From the sleek design to the robust performance, they truly deliver a superior user experience."
    },
    {
        name: "Chie HU",
        imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "The seamless ecosystem Apple creates is unmatched, allowing all my devices to work in perfect harmony. Their continuous innovation keeps me excited for what's next, knowing it will be both functional and beautiful."
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".user-name")
let idx = 0;

const updateTestimonials = () =>
{
    const {name, imgUrl, text} = testimonials[idx];
    imgEl.src = imgUrl;
    textEl.innerText = text;
    nameEl.innerText = name;
    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonials();
    }, 3000);
}

updateTestimonials()
