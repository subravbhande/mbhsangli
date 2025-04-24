<script>// Add smooth scrolling to all navigation links
document.querySelectorAll('.main-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image slider functionality
let currentSlide = 0;
const slides = [
    'hostel main building.jpg',
    'hostel-campus.jpg',
    'hostel-room.jpg'
];

function updateSlider() {
    document.querySelector('.50px').src = slides[currentSlide];
    currentSlide = (currentSlide + 1) % slides.length;
}

// Initialize slider interval
let sliderInterval = setInterval(updateSlider, 5000);

// Pause slider on hover
document.querySelector('.slider-width').addEventListener('mouseenter', () => {
    clearInterval(sliderInterval);
});

document.querySelector('.slider-width').addEventListener('mouseleave', () => {
    sliderInterval = setInterval(updateSlider, 5000);
});

// Dynamic date update for events
const eventDates = document.querySelectorAll('.event-date');
const currentDate = new Date();

eventDates.forEach(dateElement => {
    const eventDate = new Date(currentDate);
    // Add 10 days to current date for example events
    eventDate.setDate(currentDate.getDate() + 10);
    dateElement.textContent = eventDate.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long'
    });
});

const newsTicker = document.querySelector('.latest-news marquee');
if (newsTicker) {
    newsTicker.style.height = '150px'; // Set fixed height
    newsTicker.innerHTML = document.querySelector('.latest-news-ul').outerHTML;
}


const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'mobile-menu-toggle';
mobileMenuButton.innerHTML = '☰ Menu';
document.querySelector('.header-menu').prepend(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('active');
});

document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Military Boys Hostel. All Rights Reserved.`;


document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });
});

// Scroll to top button
const scrollTopButton = document.createElement('button');
scrollTopButton.className = 'scroll-top';
scrollTopButton.innerHTML = '↑';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    scrollTopButton.style.display = window.scrollY > 500 ? 'block' : 'none';
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});</script>