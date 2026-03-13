// Confetti Animation
function startConfetti() {
    // Implementation using Canvas or a library
}

// Microphone Detection
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        console.log('Microphone access granted');
    })
    .catch(err => {
        console.error('Microphone access denied', err);
    });

// Guestbook Functionality
function addWish(wish) {
    const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
    wishes.push(wish);
    localStorage.setItem('wishes', JSON.stringify(wishes));
}

// Load Wishes from Local Storage
function loadWishes() {
    const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
    wishes.forEach(wish => {
        // Display wishes in the guestbook
        console.log(wish);
    });
}

// Example of usage
document.addEventListener('DOMContentLoaded', () => {
    loadWishes();
    // Example of adding a wish
    addWish('Happy Birthday! 🎉');
    startConfetti();
});
