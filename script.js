document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.fa-heart');
    const surpriseBtn = document.querySelector('.surprise-btn');
    const messageContainer = document.querySelector('.message-container');
    const video = document.getElementById('memory-video');
    const envelope = document.querySelector('.envelope');

    // Heart animation on hover
    heart.addEventListener('mouseover', () => {
        heart.style.transform = 'scale(1.1)';
        heart.style.color = '#8b4513';
    });

    heart.addEventListener('mouseout', () => {
        heart.style.transform = 'scale(1)';
        heart.style.color = '#a0522d';
    });

    // Surprise button functionality
    surpriseBtn.addEventListener('click', () => {
        // Create subtle confetti effect
        createConfetti();
        
        // Add a new message
        const newMessage = document.createElement('p');
        newMessage.textContent = "Your presence is like the gentle morning light, bringing warmth to my world.";
        newMessage.style.animation = 'fadeIn 1s ease-in';
        messageContainer.appendChild(newMessage);

        // Play video if it exists
        if (video) {
            video.play();
        }
    });

    // Video event listeners
    if (video) {
        video.addEventListener('loadeddata', () => {
            video.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        });

        video.addEventListener('mouseover', () => {
            video.play();
        });

        video.addEventListener('mouseout', () => {
            video.pause();
        });
    }

    // Confetti effect function
    function createConfetti() {
        const colors = ['#8b4513', '#a0522d', '#d4b483', '#654321'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '0';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.opacity = '0';
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${Math.random() * 100 + 50}vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 1500,
                easing: 'cubic-bezier(0.1, 0.2, 0.3, 1)'
            });
            
            animation.onfinish = () => confetti.remove();
        }
    }

    envelope.addEventListener('click', function() {
        this.classList.toggle('open');
    });
}); 