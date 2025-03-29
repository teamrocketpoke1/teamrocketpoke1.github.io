

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      signupButton = document.getElementById('signup-button'), // Another button
      realoginButton = document.getElementById('real-login'), // Fixed typo
      loginContent = document.getElementById('login-content');

// Function to show login
function showLogin() {
    loginContent.classList.add('show-login');
}

// LOGIN SHOW
/* Validate if constant exists */  
if (loginButton) {
    loginButton.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });
}

if (realoginButton) {
    realoginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login');
    });
}

if (signupButton) { // Add the function to another button
    signupButton.addEventListener('click', showLogin);
}




// ===== LOGIN HIDDEN ===
/* Validate if constant exists */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1120: {
            slidesPerView: 3,
            spaceBetween: -32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

// Load cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart widget display
function updateCartWidget() {
    const cartWidget = document.getElementById('cart-widget');
    if (!cartWidget) return;
    cartWidget.innerHTML = ` (${cart.length})`;
}

// Function to update cart modal display
function updateCartModal() {
    const cartList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    cartList.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${item.name} - ₱${item.price} 
            <button class="remove-item" data-index="${index}">Remove</button>`;
        cartList.appendChild(li);
        total += parseFloat(item.price);
    });

    cartTotal.innerHTML = `Total: ₱${total.toFixed(2)}`;
}

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartWidget();
}

// Function to remove item from cart
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartWidget();
        updateCartModal();
    }
});

// Function to clear the cart
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartWidget();
    updateCartModal();
});

// Ensure cart widget updates on page load
window.onload = function () {
    updateCartWidget();
    updateCartModal();
    ScrollReveal().reveal('.cart-widget', { delay: 300, distance: '30px', origin: 'top', easing: 'ease-in-out' });
};

// Open and close cart modal
document.getElementById('cart-widget').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'block';
    updateCartModal();
});
document.querySelector('.close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});






// new 


// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Function to update cart widget display
    function updateCartWidget() {
        const cartWidget = document.getElementById('cart-widget');
        if (!cartWidget) return;
        cartWidget.innerHTML = ` (${cart.length})`;
    }

    // Function to update cart modal display
    function updateCartModal() {
        const cartList = document.getElementById('cart-items-list');
        const cartTotal = document.getElementById('cart-total');
        if (!cartList || !cartTotal) return;
        
        cartList.innerHTML = '';

        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = `${item.name} - ₱${item.price} 
                <button class="remove-item" data-index="${index}">Remove</button>`;
            cartList.appendChild(li);
            total += parseFloat(item.price);
        });

        cartTotal.innerHTML = `Total: ₱${total.toFixed(2)}`;
    }

    // Function to add item to cart
    function addToCart(itemName, itemPrice) {
        const price = itemPrice.replace('₱', '');
        const item = { name: itemName, price: price };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartWidget();
        
        // Show confirmation message
        const cartModal = document.getElementById('cart-modal');
        if (cartModal) {
            cartModal.style.display = 'block';
            updateCartModal();
        }
    }

    // Connect all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.button');
    addToCartButtons.forEach(button => {
        if (button.textContent?.trim() === 'Add to Cart') {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Find the parent article or container
                const parent = e.currentTarget.closest('.featured__card, .new__card, .discount__data');
                
                if (parent) {
                    let itemName = '';
                    let itemPrice = '';
                    
                    // Extract name and price based on parent container type
                    if (parent.classList.contains('featured__card')) {
                        itemName = parent.querySelector('.featured__title')?.textContent || 'Unknown Item';
                        itemPrice = parent.querySelector('.featured__discount')?.textContent || '0';
                    } else if (parent.classList.contains('new__card')) {
                        itemName = parent.querySelector('.new__title')?.textContent || 'Unknown Item';
                        itemPrice = parent.querySelector('.new__discount')?.textContent || '0';
                    } else if (parent.classList.contains('discount__data')) {
                        itemName = parent.querySelector('.discount__title')?.textContent || 'Unknown Item';
                        itemPrice = parent.querySelector('.featured__discount')?.textContent || '0';
                    }
                    
                    addToCart(itemName, itemPrice);
                }
            });
        }
    });

    // Function to remove item from cart
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('remove-item')) {
            const index = target.getAttribute('data-index');
            if (index !== null) {
                cart.splice(parseInt(index), 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartWidget();
                updateCartModal();
            }
        }
    });

    // Initialize cart on page load
    updateCartWidget();
    updateCartModal();
});


// profile js redirect


// Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
    // Get the login form
    const loginForm = document.querySelector('.login__form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-pass').value;
            const playerId = document.getElementById('login-id').value;
            const inGameName = document.getElementById('login-ign').value;
            
            // Simple validation
            if (email && password && playerId && inGameName) {
                // In a real application, you would validate credentials here
                
                // For this demo, we'll just redirect to the profile page
                window.location.href = 'profile.html';
                
                // Close the login modal
                const loginContent = document.getElementById('login-content');
                if (loginContent) {
                    loginContent.classList.remove('show-login');
                }
            } else {
                alert('Please fill in all fields');
            }
        });
    }
});


