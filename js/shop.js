window.onload = function () {
    alert("Welcome to Candle Shop! 🌟");
};

document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const type = document.getElementById('candle-type').value;
    const quantity = document.getElementById('quantity').value;
    const delivery = document.getElementById('delivery').value;
    document.getElementById('order-summary').innerText = 
        `Order Summary: ${quantity} ${type} candles to be delivered on ${delivery}.`;
});

const draggable = document.querySelector('.draggable');
draggable.addEventListener('dragstart', () => draggable.style.opacity = '0.5');
draggable.addEventListener('dragend', () => draggable.style.opacity = '1');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        document.getElementById('geolocation').innerText = 
            `Your location: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude}`;
    });
} else {
    document.getElementById('geolocation').innerText = "Geolocation is not supported by this browser.";
}
