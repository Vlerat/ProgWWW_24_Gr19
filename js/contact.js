window.onload = function () {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#fbc2eb');
    gradient.addColorStop(1, '#a6c1ee');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#133';
    ctx.fillText('🌷', 85, 35);
};

const draggableBox = document.getElementById("draggable-box");
let offsetX, offsetY;

draggableBox.addEventListener("mousedown", (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", onMouseMove);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
});

function onMouseMove(e) {
    draggableBox.style.position = "absolute";
    draggableBox.style.left = e.pageX - offsetX + "px";
    draggableBox.style.top = e.pageY - offsetY + "px";
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    return true;
}

const numbersArray = [1, 5, 10, 15, 20];
console.log("Max value:", Math.max(...numbersArray));
console.log("NaN check:", isNaN("hello"));
console.log("Exponent form of 12345:", (12345).toExponential(2));
console.log("Array as string:", numbersArray.toString());
