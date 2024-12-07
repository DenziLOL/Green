const passwordInput = document.getElementById('password');
const congrats = document.getElementById('congrats');
const buttons = document.getElementById('buttons');

passwordInput.addEventListener('input', function() {
    if (passwordInput.value === 'Sex') {
        congrats.style.display = 'block';
        buttons.style.display = 'flex';
        passwordInput.style.display = 'none';
    }
});
