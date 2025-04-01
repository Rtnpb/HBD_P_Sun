document.getElementById('birthday-message').addEventListener('click', function() {
    // ซ่อนหน้าแรก
    document.getElementById('home-page').style.display = 'none';
    
    // แสดงหน้า slideshow
    document.getElementById('slideshow-page').style.display = 'block';
    
    let currentImageIndex = 0;
    const images = [
        'pSun1.jpg', 'pSun2.jpg', '/images/pSun3.jpg', '/images/pSun4.jpg', '/images/pSun5.jpg', '/images/pSun6.jpg',
        '/images/pSun7.jpg', '/images/pSun8.jpg', '/images/pSun9.jpg', '/images/pSun10.jpg', '/images/pSun11.jpg', '/images/pSun12.jpg', 
        '/images/pSun14.jpg', '/images/pSun15.jpg', '/images/pSun26.jpg', '/images/pSun18.jpg', '/images/pSun20.jpg', '/images/pSun21.jpg', '/images/pSun22.jpg',
        '/images/pSun23.jpg', '/images/pSun24.jpg', '/images/pSun25.jpg', '/images/pSun17.jpg', '/images/pSun39.jpg',
        '/images/pSun27.jpg', '/images/pSun28.jpg', '/images/pSun29.jpg', '/images/pSun30.jpg', '/images/pSun40.jpg',
        '/images/pSun31.jpg', '/images/pSun32.jpg', '/images/pSun33.jpg', '/images/pSun34.jpg',
        '/images/pSun35.jpg', '/images/pSun36.jpg', '/images/pSun37.jpg', '/images/pSun38.jpg'
    ];

    // แสดงรูปแรก
    document.getElementById('slideshow-image').src = images[currentImageIndex];

    // ฟังก์ชันเลื่อนภาพทุกๆ 1วิ
    const intervalId = setInterval(function() {
        currentImageIndex++;
        if (currentImageIndex < images.length) {
            document.getElementById('slideshow-image').src = images[currentImageIndex];
        } else {
            clearInterval(intervalId); // หยุดการเลื่อนภาพเมื่อครบทุกรูป
            showFinalMessage();
        }
    }, 2500);

    function showFinalMessage() {
        setTimeout(function() {
            // ซ่อนหน้า slideshow
            document.getElementById('slideshow-page').style.display = 'none';
            
            // แสดงข้อความสุดท้าย
            document.getElementById('final-message').style.display = 'block';
            
            // แสดงข้อความทีละบรรทัด
            let currentMessageIndex = 0;
            const messages = document.querySelectorAll('#final-message h2, #final-message h3, #final-message p');
            
            function showNextMessage() {
                if (currentMessageIndex < messages.length) {
                    const message = messages[currentMessageIndex];
                    message.style.display = 'block';
                    setTimeout(() => {
                        message.style.opacity = 1;
                    }, 50); // ดีเลย์เล็กน้อยเพื่อให้การแสดงแอนิเมชันทำงาน
            
                    currentMessageIndex++;
                }
            }

            // แสดงข้อความทีละบรรทัด
            const messageInterval = setInterval(function() {
                showNextMessage();
                if (currentMessageIndex === messages.length) {
                    clearInterval(messageInterval);
                }
            }, 2000); // แสดงข้อความทุกๆ 2 วินาที

            // การคลิกที่ข้อความจะทำให้ข้อความหายไป
            messages.forEach(function(message) {
                message.addEventListener('click', function() {
                    message.style.opacity = 0;
                    setTimeout(() => {
                        message.style.display = 'none';
                    }, 500); // ซ่อนหลังจากแอนิเมชันหมด
                });
            });
        }, 500); 
    }

    // เมื่อคลิกที่หน้าจอในหน้า final จะกลับไปที่หน้าแรก
    document.getElementById('final-message').addEventListener('click', function() {
        location.reload();
    });
});

window.addEventListener('load', function() {
    // เริ่มเพลงเมื่อโหลดหน้าเว็บ
    const music = document.getElementById('background-music');
    music.play();
});

document.getElementById('final-message').addEventListener('click', function() {
    // รีโหลดหน้าเว็บและเริ่มเพลงใหม่
    const music = document.getElementById('background-music');
    music.currentTime = 0;  // รีเซ็ตเพลงให้เริ่มต้นใหม่
    music.play();  // เริ่มเพลงใหม่
    location.reload();
});
