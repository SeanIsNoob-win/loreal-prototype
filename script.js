// Function to handle showing the correct screen
function navigateToScreen(hash) {
    // 1. Get the current active screen and remove the 'active-screen' class
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active-screen');
    });

    // 2. Add the 'active-screen' class to the target screen
    const targetScreen = document.querySelector(hash);
    if (targetScreen) {
        targetScreen.classList.add('active-screen');
    }

    // 3. Update the navigation links' active state
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
}

// Event listener for all navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent the default anchor jump
        e.preventDefault();
        
        // Get the target hash (e.g., '#home', '#skincare')
        const targetHash = this.getAttribute('href');
        
        // Navigate to the screen
        navigateToScreen(targetHash);

        // Update the browser URL hash (optional, for history)
        window.history.pushState(null, '', targetHash);
    });
});

// Initial load: Check the URL hash or default to home
let initialHash = window.location.hash || '#home';
navigateToScreen(initialHash);