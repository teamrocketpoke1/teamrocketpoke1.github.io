document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.profile__tab-button');
    const tabContents = document.querySelectorAll('.profile__tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Load cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartWidget = document.getElementById('cart-widget');
    if (cartWidget) {
        cartWidget.innerHTML = ` (${cart.length})`;
    }
    
    // Logout functionality
    const logoutButton = document.querySelector('.profile__button-logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // You can add actual logout logic here
            window.location.href = 'index.html';
        });
    }
    
    // "View All Purchases" and "View All Pokémon" button functionality
    const viewButtons = document.querySelectorAll('.profile__button-outline');
    viewButtons.forEach(button => {
        if (button.textContent === 'View All Purchases') {
            button.addEventListener('click', () => {
                // Switch to purchases tab
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                const purchasesTab = document.querySelector('[data-tab="purchases"]');
                purchasesTab.classList.add('active');
                document.getElementById('purchases').classList.add('active');
            });
        }
        
        if (button.textContent === 'View All Pokémon') {
            button.addEventListener('click', () => {
                // Switch to pokemon tab
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                const pokemonTab = document.querySelector('[data-tab="pokemon"]');
                pokemonTab.classList.add('active');
                document.getElementById('pokemon').classList.add('active');
            });
        }
    });
});