// Check if the user has a saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

//  guessing 
function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value, 10);
    const gameResult = document.getElementById('gameResult');
    const discountMessage = document.getElementById('discountMessage');

    //  random number
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Validation
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        gameResult.textContent = 'Please enter a valid number between 1 and 10.';
        gameResult.style.color = 'yellow';
        discountMessage.textContent = '';
        return;
    }

    // Check that  guess
    if (userGuess === randomNumber) {
        gameResult.textContent = '🎉 Congratulations! You guessed correctly!';
        gameResult.style.color = 'green';
        discountMessage.textContent = 'You have won a 20% discount!';
        discountMessage.style.color = 'lightgreen';
    } else {
        gameResult.textContent = '❌ Sorry, guess again.';
        gameResult.style.color = 'red';
        discountMessage.textContent = '';
    }

    // Cleaing out input
    document.getElementById('userGuess').value = '';
}

// chaning between light and dark mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save the theme preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Product buttons and their event listeners
const productButtons = document.querySelectorAll('.product-button');
const productDetails = document.querySelectorAll('.product-details');

productButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = button.getAttribute('data-product'); 
        productDetails.forEach(product => {
            product.classList.remove('active');
        });

        const selectedProduct = document.getElementById(productId);
        selectedProduct.classList.add('active');
    });
});
