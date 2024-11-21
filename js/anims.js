const fadeIns = document.querySelectorAll('.fade-in');

const handleScroll = () => {
    fadeIns.forEach((element) => {
        const rect = element.getBoundingClientRect();
        console.log()
        if (window.scrollY > 2850) {
            element.classList.add('visible');
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the effect on page load in case elements are already in view
handleScroll();

const slides = document.querySelectorAll('.slide-cus');
const stickySection = document.querySelector('.sticky-section');
const slideHeight = window.innerHeight; // Height for each slide trigger point
const fadeOutStart = 2200; // Start fading out
const fadeOutEnd = 2300; // Completely faded out by this position

window.addEventListener('scroll', () => {

    const scrollPos = window.scrollY;
    console.log(scrollPos)
    slides.forEach((slide, index) => {
        const triggerStart = slideHeight * index;
        const triggerEnd = triggerStart + slideHeight;

        if (scrollPos >= triggerStart && scrollPos < triggerEnd) {
            slide.classList.add('active');
            slide.classList.remove('exit');
        } else if (scrollPos >= triggerEnd) {
            slide.classList.remove('active');
            slide.classList.add('exit');
        } else {
            slide.classList.remove('active', 'exit');
        }

        if (scrollPos >= fadeOutStart && scrollPos <= fadeOutEnd) {
    const fadeProgress = (scrollPos - fadeOutStart) / (fadeOutEnd - fadeOutStart); // Value between 0 and 1
    stickySection.style.opacity = 1 - fadeProgress; // Gradually reduce opacity
    stickySection.style.transform = `translateY(-${fadeProgress * 50}px)`; // Move upwards smoothly
    stickySection.style.position = 'sticky';
  } else if (scrollPos > fadeOutEnd) {
   // Fully hidden
    stickySection.style.transform = `translateY(-100px)`; // Fixed at the final position
    stickySection.style.position = 'absolute';
    stickySection.style.top = `${fadeOutEnd}px`;
    stickySection.style.opacity = 1; // Locks position at the end
  } else {
    stickySection.style.opacity = 1; // Reset to fully visible
    stickySection.style.transform = 'translateY(0)';
    stickySection.style.position = 'sticky';
    stickySection.style.top = '0';
  }
    });
});
