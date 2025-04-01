
document.getElementById('birthday-message').addEventListener('click', function() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('slideshow-page').style.display = 'block';

    let currentImageIndex = 0;
    const images = [
        'images/pSun1.jpg', 'images/pSun2.jpg', 'images/pSun3.jpg', 'images/pSun4.jpg',
        'images/pSun5.jpg', 'images/pSun6.jpg', 'images/pSun7.jpg', 'images/pSun8.jpg',
        'images/pSun9.jpg', 'images/pSun10.jpg', 'images/pSun11.jpg', 'images/pSun12.jpg',
        'images/pSun14.jpg', 'images/pSun15.jpg', 'images/pSun26.jpg', 'images/pSun18.jpg',
        'images/pSun20.jpg', 'images/pSun21.jpg', 'images/pSun22.jpg', 'images/pSun23.jpg',
        'images/pSun24.jpg', 'images/pSun25.jpg', 'images/pSun17.jpg', 'images/pSun39.jpg',
        'images/pSun27.jpg', 'images/pSun28.jpg', 'images/pSun29.jpg', 'images/pSun30.jpg',
        'images/pSun40.jpg', 'images/pSun31.jpg', 'images/pSun32.jpg', 'images/pSun33.jpg',
        'images/pSun34.jpg', 'images/pSun35.jpg', 'images/pSun36.jpg', 'images/pSun37.jpg', 'images/pSun38.jpg'
    ];

    document.getElementById('slideshow-image').src = images[currentImageIndex];

    const intervalId = setInterval(function() {
        currentImageIndex++;
        if (currentImageIndex < images.length) {
            document.getElementById('slideshow-image').src = images[currentImageIndex];
        } else {
            clearInterval(intervalId);
            showFinalMessage();
        }
    }, 2500);
});

function showFinalMessage() {
    setTimeout(function() {
        document.getElementById('slideshow-page').style.display = 'none';
        document.getElementById('final-message').style.display = 'block';

        let currentMessageIndex = 0;
        const messages = document.querySelectorAll('#final-message h2, #final-message h3, #final-message p');

        messages.forEach(msg => {
            msg.style.display = 'none';
            msg.style.opacity = 0;
        });

        function showNextMessage() {
            if (currentMessageIndex < messages.length) {
                const message = messages[currentMessageIndex];
                message.style.display = 'block';
                setTimeout(() => {
                    message.style.opacity = 1;
                }, 50);
                currentMessageIndex++;
            }
        }

        const messageInterval = setInterval(function() {
            showNextMessage();
            if (currentMessageIndex === messages.length) {
                clearInterval(messageInterval);
            }
        }, 5000);

        messages.forEach(function(message) {
            message.addEventListener('click', function() {
                message.style.opacity = 0;
                setTimeout(() => {
                    message.style.display = 'none';
                }, 500);
            });
        });
    }, 1000);
}
