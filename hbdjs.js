document.getElementById('birthday-message').addEventListener('click', function() {
    // ซ่อนหน้าแรก
    document.getElementById('home-page').style.display = 'none';
    
    // แสดงหน้า slideshow
    document.getElementById('slideshow-page').style.display = 'block';
    
    let currentImageIndex = 0;
    const images = [
        'pSun1.jpg', 'pSun2.jpg', 'pSun3.jpg', 'pSun4.jpg', 'pSun5.jpg', 'pSun6.jpg',
        'pSun7.jpg', 'pSun8.jpg', 'pSun9.jpg', 'pSun10.jpg', 'pSun11.jpg', 'pSun12.jpg', 
        'pSun14.jpg', 'pSun15.jpg', 'pSun26.jpg', 'pSun18.jpg', 'pSun20.jpg', 'pSun21.jpg', 'pSun22.jpg',
        'pSun23.jpg', 'pSun24.jpg', 'pSun25.jpg', 'pSun17.jpg', 'pSun39.jpg',
        'pSun27.jpg', 'pSun28.jpg', 'pSun29.jpg', 'pSun30.jpg', 'pSun40.jpg',
        'pSun31.jpg', 'pSun32.jpg', 'pSun33.jpg', 'pSun34.jpg',
        'pSun35.jpg', 'pSun36.jpg', 'pSun37.jpg', 'pSun38.jpg'
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
