    window.onload = function () {
        alert("Welcome to Candle Shop! 🌟");
    };
    window.onload = function () {
        alert("Welcome to Candle Shop! 🌟");
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
    