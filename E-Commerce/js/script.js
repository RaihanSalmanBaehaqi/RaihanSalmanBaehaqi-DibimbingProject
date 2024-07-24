const menuToggle = document.querySelector('.menu-toggle input');
const navLeft = document.querySelector('.nav-left ul');

menuToggle.addEventListener('click', function() {
    navLeft.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

function toggleScroll() {
    const checkbox = document.getElementById('toggleScroll');
    if (checkbox.checked) {
        document.body.classList.add('noscroll');
    } else {
        document.body.classList.remove('noscroll');
    }
}