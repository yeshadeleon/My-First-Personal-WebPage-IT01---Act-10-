const text = "Loading.. Please Wait ꒰⁠⑅⁠ᵕ⁠༚⁠ᵕ⁠꒱⁠˖⁠♡";
let i = 0;
const speed = 80;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener("load", function() {
    typeWriter();
    
    setTimeout(function() {
        const loader = document.getElementById("loader");
                       loader.classList.add("fade");
                       
    setTimeout(() => loader.remove(), 600);
    }, 3000);
});