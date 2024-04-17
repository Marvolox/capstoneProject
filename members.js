const navBar = document.querySelector("");

window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });

document.getElementById('paypal').addEventListener('change', function() {
    document.getElementById('paypal-form').style.display = 'block';
    document.getElementById('card-form').style.display = 'none';
});

document.getElementById('card').addEventListener('change', function() {
    document.getElementById('paypal-form').style.display = 'none';
    document.getElementById('card-form').style.display = 'block';
});

function submitCardPayment() {
    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expDate = document.getElementById('expDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!cardName || !cardNumber || !expDate || !cvv) {
        document.getElementById('card-error').style.display = 'block';
        document.getElementById('card-success').style.display = 'none';
    } else {
        document.getElementById('card-error').style.display = 'none';
        document.getElementById('card-success').style.display = 'block';
    }
}