document.addEventListener('DOMContentLoaded', function() {
    console.log('Restaurant website loaded!');
    let slides = document.querySelectorAll('.slide');
    let index = 0;
    function showSlide() {
        slides.style.transform = `translateX( -${index * 100}%)`;
        index = (index + 1) % 4;
    }
    setInterval(showSlide, 3000);

});

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-item img");

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
    currentImageIndex = [...images].findIndex(img => img.src.includes(src.split('/').pop()));
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
s