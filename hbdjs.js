// โหลด YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var isYouTubeReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'llp7JjK3dLk',
        playerVars: {
            'autoplay': 0,  
            'loop': 1,
            'playlist': 'llp7JjK3dLk',
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'fs': 0,
            'rel': 0,
            'enablejsapi': 1
        },
        events: {
            'onReady': function(event) {
                event.target.setVolume(50);
                isYouTubeReady = true; 
            }
        }
    });
}

// ✅ ปุ่มเล่นเพลง
document.getElementById('play-music').addEventListener('click', function() {
    if (isYouTubeReady && player) {
        player.playVideo();
    } else {
        console.warn("YouTube API ยังโหลดไม่เสร็จ");
    }
});

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
        }, 2000);

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

// ✅ หยุดเพลงเมื่อรีโหลดกลับไปหน้าแรก
document.getElementById('final-message').addEventListener('click', function() {
    if (isYouTubeReady && player) {
        player.stopVideo();
    }
    location.reload();
});
