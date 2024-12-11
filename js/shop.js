window.onload = function () {
    alert("Welcome to Candle Shop! 🌟");
};

document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    try {
        const type = document.getElementById('candle-type').value;
        const quantity = document.getElementById('quantity').value;
        const delivery = document.getElementById('delivery').value;
        const coupon = document.getElementById('coupon').value;

        if (!type || !quantity || !delivery) {
            throw "All fields must be filled out!";
        }

        let discount = 0;
        const couponRegex = /[A-Za-z0-9]{5,10}/i;
        if (couponRegex.test(coupon)) {
            discount = 0.1; // Example discount for valid coupon code
        }

        const totalPrice = (parseInt(quantity) * 15.99 * (1 - discount)).toFixed(2); // Assuming price per candle is $15.99
        document.getElementById('order-summary').innerText = 
            `Order Summary: ${quantity} ${type} candles to be delivered on ${delivery}. Total Price: $${totalPrice}.`;
    } catch (error) {
        alert("Error: " + error);
    }
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

if (window.Worker) {
    const worker = new Worker('worker.js');
    worker.postMessage('Start processing data');
    worker.onmessage = function (e) {
        console.log('Worker says: ' + e.data);
    };
}

$('.buy-now').on('click', function () {
    $(this).fadeOut(500).fadeIn(500);
});
