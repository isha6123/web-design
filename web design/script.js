document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".slide").length;

    function updateSlider() {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    window.nextSlide = function () {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    };

    window.prevSlide = function () {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    };
});


// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("mouseenter", () => {
            product.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
        });

        product.addEventListener("mouseleave", () => {
            product.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.1)";
        });
    });
});
document.querySelector(".view-all-btn").addEventListener("click", function () {
    window.location.href = "all-products.html"; // Change to your actual products page
});


