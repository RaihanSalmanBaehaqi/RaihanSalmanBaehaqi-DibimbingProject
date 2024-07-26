const menuToggle = document.querySelector('.menu-toggle input');
const navLeft = document.querySelector('.nav-left ul');
const menuItems = document.querySelectorAll('.menu-item');

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

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLeft.classList.remove('active');
        menuToggle.checked = false;
        document.body.classList.remove('noscroll'); // Menambahkan baris ini untuk memastikan scroll kembali aktif
    });
});