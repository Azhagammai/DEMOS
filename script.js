// Typing animation
const roles = ["Problem Solving", "DatsAnalysis Enthusiast", "Full-Stack Developer"];
let index = 0;
let textIndex = 0;

function typeEffect() {
    let span = document.getElementById("typing");
    if (textIndex < roles[index].length) {
        span.innerHTML += roles[index][textIndex];
        textIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(() => {
            span.innerHTML = "";
            textIndex = 0;
            index = (index + 1) % roles.length;
            typeEffect();
        }, 2000);
    }
}

typeEffect();

// Dashboard slider
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const dashboardImages = document.querySelectorAll('.dashboard-image');
let currentIndex = 0;

function updateImageDisplay() {
    dashboardImages.forEach((image, index) => {
        image.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dashboardImages.length;
    updateImageDisplay();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dashboardImages.length) % dashboardImages.length;
    updateImageDisplay();
});

// Initial display
updateImageDisplay();
