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
        'images/pSun34.jpg', 'images/pSun35.jpg', 'images/pSun36.jpg', 'images/pSun37.jpg', 
        'images/pSun38.jpg', 'images/pSun41.jpg', 'images/pSun42.jpg', 'images/pSun43.jpg', 
        'images/pSun44.jpg', 'images/pSun45.jpg', 'images/pSun46.jpg', 'images/pSun47.jpg', 
        'images/pSun48.jpg'
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
        
        // ล็อก messages เพื่อดีบัก
        console.log(messages);

        // ซ่อนข้อความทั้งหมดก่อน
        messages.forEach(msg => {
            msg.style.display = 'none';
            msg.style.opacity = '0'; // ตรวจสอบว่า opacity เป็น 0
        });

        function showNextMessage() {
            if (currentMessageIndex < messages.length) {
                // ซ่อนข้อความก่อนหน้าถ้ามี
                if (currentMessageIndex > 0) {
                    messages[currentMessageIndex - 1].style.display = 'none';
                    messages[currentMessageIndex - 1].style.opacity = '0';
                }
                // แสดงข้อความปัจจุบัน
                messages[currentMessageIndex].style.display = 'block';
                messages[currentMessageIndex].style.opacity = '1'; // ตั้งค่า opacity เป็น 1 เพื่อให้มองเห็น
                currentMessageIndex++;
            }
        }

        // แสดงข้อความแรก
        showNextMessage();

        // เพิ่มตัวจัดการเหตุการณ์คลิกเพื่อแสดงข้อความถัดไป
        document.getElementById('final-message').addEventListener('click', function() {
            console.log('คลิกที่ final-message'); // ดีบักเพื่อยืนยันว่าคลิกทำงาน
            if (currentMessageIndex < messages.length) {
                showNextMessage();
            }
        });
    }, 1000);
}