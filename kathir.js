const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const goToSignUp = document.getElementById('goToSignUp');
const goToSignIn = document.getElementById('goToSignIn');

// Toggle SignIn and SignUp forms
signInBtn.addEventListener('click', () => {
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');
});

// Switch forms from within the message
goToSignUp.addEventListener('click', () => {
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');
});

goToSignIn.addEventListener('click', () => {
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');
});




document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission to a server

    // Add form validation or API request logic here if needed

    // Redirect to 'navi.html' after a successful sign-in
    window.location.href = 'navi.html';
});
