
function setupTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const triggerOffset = window.innerHeight / 1.2;
    
    function checkTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerOffset) {
                item.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkTimeline();
    
    // Check on scroll with debounce
    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(checkTimeline, 50);
    }, false);
}