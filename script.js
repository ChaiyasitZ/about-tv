// ตัวอย่างการทำการเลื่อนหน้าอย่างนุ่มนวลเมื่อคลิกที่เมนูนำทาง
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});

// ตัวอย่างการเปิด/ปิดเนื้อหาในแต่ละ Section
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const header = section.querySelector('h2');
        const content = section.querySelectorAll('p, ul, img');

        header.addEventListener('click', function () {
            content.forEach(element => {
                if (element.style.display === 'none') {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    });
});

// ทำให้ Navbar ติดตามผู้ใช้เมื่อเลื่อนหน้า
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});

// การเลื่อนหน้าแบบ Smooth เมื่อคลิกที่เมนูนำทาง
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});

// ตัวอย่างการทำงานกับ Responsive Design
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // Toggle content visibility in each section
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const header = section.querySelector('h2');
        const content = section.querySelectorAll('p, ul, img');

        header.addEventListener('click', function () {
            content.forEach(element => {
                element.classList.toggle('hidden');
            });
        });
    });
});

let scrollTimeout;

// Make navbar fixed when scrolling
window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    }, 100);
});

// ตัวอย่างการจัดการรูปภาพใน JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // เลือกทุกรูปภาพในเอกสาร
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        // เพิ่มเหตุการณ์การคลิกให้กับรูปภาพ
        img.addEventListener('click', function () {
            // เปิดรูปภาพในหน้าต่างใหม่ (lightbox effect)
            const imgSrc = this.src;
            const imgAlt = this.alt;
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.cursor = 'pointer';

            const lightboxImg = document.createElement('img');
            lightboxImg.src = imgSrc;
            lightboxImg.alt = imgAlt;
            lightboxImg.style.maxWidth = '90%';
            lightboxImg.style.maxHeight = '90%';

            lightbox.appendChild(lightboxImg);
            document.body.appendChild(lightbox);

            // ปิด lightbox เมื่อคลิก
            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});
