// Slideshow functionality
let slideIndex = 1;
let slideInterval;

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlideshow();
});

// Start automatic slideshow
function startSlideshow() {
    stopSlideshow(); // Clear any existing intervals
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Stop the automatic slideshow
function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
    startSlideshow(); // Restart the timer whenever manually changed
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    startSlideshow(); // Restart the timer whenever manually changed
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("app-slides");
    let dots = document.getElementsByClassName("dot");
    
    // Handle index out of bounds
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Show the current slide and activate corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
}

// Event listeners for slideshow controls
document.addEventListener('DOMContentLoaded', function() {
    // Pause slideshow when user hovers over it
    const slideshowContainer = document.querySelector('.app-slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopSlideshow);
        slideshowContainer.addEventListener('mouseleave', startSlideshow);
    }
});
