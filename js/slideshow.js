// Slideshow functionality
let slideIndex = 1;
let slideInterval;

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', function() {
    setupSlides(slideIndex);
    startSlideshow();
    
    // Add event listeners for slideshow controls
    document.querySelector('.app-slideshow-container').addEventListener('mouseenter', stopSlideshow);
    document.querySelector('.app-slideshow-container').addEventListener('mouseleave', startSlideshow);
});

// Start automatic slideshow
function startSlideshow() {
    stopSlideshow();
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 4000); // Change slide every 4 seconds
}

// Stop the automatic slideshow
function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

// Next/previous controls
function changeSlide(n) {
    setupSlides(slideIndex += n);
    startSlideshow();
}

// Thumbnail image controls
function currentSlide(n) {
    setupSlides(slideIndex = n);
    startSlideshow();
}

function setupSlides(n) {
    const slides = document.getElementsByClassName("app-slides");
    const dots = document.getElementsByClassName("dot");
    
    // Handle index out of bounds
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Reset all slides (remove all positioning classes)
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active', 'left', 'right');
        slides[i].style.display = "block"; // Make sure all slides are displayed
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Calculate previous and next slide indices
    let prevIndex = slideIndex - 2;
    if (prevIndex < 0) prevIndex = slides.length - 1;
    
    let nextIndex = slideIndex % slides.length;
    
    // Set current slide as active (center)
    slides[slideIndex - 1].classList.add('active');
    
    // Set previous slide to left
    slides[prevIndex].classList.add('left');
    
    // Set next slide to right
    slides[nextIndex].classList.add('right');
    
    // Activate corresponding dot
    dots[slideIndex - 1].className += " active-dot";
}
