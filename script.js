function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4ade80' : type === 'error' ? '#ef4444' : '#6b7280'};
        color: ${type === 'success' || type === 'error' ? '#ffffff' : '#000000'};
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Array to store review data
const reviews = [
    { emoji: '😊', name: 'Priya Sharma', text: 'Amazing service! My US visa was processed quickly and smoothly. Highly recommend VisaEase!' },
    { emoji: '👍', name: 'Amit Patel', text: 'The slot booking was effortless, and the team was very supportive throughout the process.' },
    { emoji: '🌟', name: 'Neha Gupta', text: 'Excellent guidance for consulate services. Made my passport renewal a breeze!' },
    { emoji: '🙏', name: 'Rohit Singh', text: 'Professional and efficient. My visa application was handled with great care.' },
    { emoji: '😄', name: 'Sneha Reddy', text: 'Fantastic support for my passport renewal. Quick and reliable service!' },
    { emoji: '🌺', name: 'Vikram Joshi', text: 'Smooth process for US visa booking. The team was incredibly helpful.' },
    { emoji: '🎉', name: 'Anjali Mehra', text: 'Best experience with slot booking. Highly professional staff!' },
    { emoji: '😎', name: 'Kunal Desai', text: 'Excellent consulate services. Made everything so easy for me.' },
    { emoji: '🌿', name: 'Pooja Nair', text: 'Quick and efficient visa process. Great customer service!' },
    { emoji: '💫', name: 'Arjun Malhotra', text: 'Top-notch passport renewal service. Highly satisfied!' }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('VisaEase Solutions Initialized');
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });

    // Dynamically create and append review cards for infinite loop
    const track = document.querySelector('.carousel-track');
    
    // Create cards: original + duplicate at the end for seamless loop
    const allReviews = [...reviews, ...reviews]; // Duplicate the array
    
    allReviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <div class="category-icon">${review.emoji}</div>
                <h3 class="review-name">${review.name}</h3>
            </div>
            <div class="review-stars">★★★★★</div>
            <p class="review-text">${review.text}</p>
        `;
        track.appendChild(card);
    });

    // Carousel animation initialization
    const carousel = document.querySelector('.carousel-container');
    const trackElement = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.review-card');
    
    let currentIndex = 0;
    const originalCardsCount = reviews.length; // 10 cards
    const totalCards = cards.length; // 20 cards (original + duplicates)
    const cardWidth = 350; // Match the fixed width in CSS

    // Set total width to accommodate all cards (20)
    trackElement.style.width = `${cardWidth * totalCards}px`;
    
    // Set initial transition
    trackElement.style.transition = 'transform 0.8s ease-in-out';

    function slide() {
        currentIndex++;
        const translateX = -currentIndex * cardWidth;
        trackElement.style.transform = `translateX(${translateX}px)`;

        // When we reach the end of the original cards (index 10), reset to beginning
        if (currentIndex === originalCardsCount) {
            setTimeout(() => {
                // Disable transition temporarily
                trackElement.style.transition = 'none';
                // Jump back to the beginning instantly
                currentIndex = 0;
                trackElement.style.transform = `translateX(0px)`;
                
                // Re-enable transition after a brief delay
                setTimeout(() => {
                    trackElement.style.transition = 'transform 0.8s ease-in-out';
                }, 50);
            }, 800); // Wait for the current transition to complete
        }
    }

    // Auto-rotate every 3 seconds for better visibility of the seamless loop
    setInterval(slide, 3000);

    // Apply observer to animate-on-scroll elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Header scroll effect
    let lastScrollY = window.scrollY;
    let ticking = false;
    function updateHeader() {
        const header = document.querySelector('header');
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.99)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            header.style.backdropFilter = 'blur(40px)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'blur(30px)';
        }
        lastScrollY = scrollY;
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
});


// Contact button functionality - add this inside the DOMContentLoaded event listener
// or at the end of your existing script.js file

// Email button functionality
const emailBtn = document.querySelector('.email-btn');
if (emailBtn) {
    emailBtn.addEventListener('click', function() {
        const email = 'namitathappar76@gmail.com';
        const subject = 'Visa Services Inquiry';
        const body = 'Hello VisaEase Solutions,\n\nI would like to inquire about your visa services.\n\nThank you!';
        
        // Create mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show notification (using your existing notification function)
        showNotification('Opening email client...', 'info');
    });
}

// Phone button functionality
const callBtn = document.querySelector('.call-btn');
if (callBtn) {
    callBtn.addEventListener('click', function() {
        const phoneNumber = '9810101010';
        
        // Create tel link
        const telLink = `tel:${phoneNumber}`;
        
        // Open default phone app
        window.location.href = telLink;
        
        // Show notification (using your existing notification function)
        showNotification('Opening phone app...', 'info');
    });
}
// Add this to your existing script.js or in a <script> tag
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Start the animation sequence
    setTimeout(() => {
        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.add('fade-out');
        
        // Remove loading class and add loaded class
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
            
            // Remove overlay from DOM after animation
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 800);
        }, 3000);
    }, 100);
});

// V-Letter Animation JavaScript (Add to end of your script.js)

// Only run V animation on home page
function initVAnimation() {
    // Check if we're on the home page (index.html or root)
    const isHomePage = window.location.pathname === '/' || 
                      window.location.pathname === '/index.html' || 
                      window.location.pathname.endsWith('/index.html') ||
                      window.location.pathname === '';
    
    if (!isHomePage) return;

    // Add loading class to body ONLY on home page
    document.body.classList.add('v-loading');
    
    // Start the holographic V animation sequence
    setTimeout(() => {
        const overlay = document.getElementById('v-animation-overlay');
        if (overlay) {
            // Show website content after V fully materializes
            setTimeout(() => {
                document.body.classList.remove('v-loading');
                document.body.classList.add('v-loaded');
            }, 1800); // Let the hologram fully appear first
            
            // Start overlay dissolution
            setTimeout(() => {
                overlay.classList.add('fade-out');
                
                // Remove overlay from DOM after dissolution
                setTimeout(() => {
                    if (overlay.parentNode) {
                        overlay.parentNode.removeChild(overlay);
                    }
                }, 800);
            }, 1500); // Hold the effect a bit longer for impact
        }
    }, 100); // Start almost immediately
}


// Initialize V animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initVAnimation();
    
    // Your existing code continues here...
    // (rest of the existing DOMContentLoaded code remains unchanged)
});