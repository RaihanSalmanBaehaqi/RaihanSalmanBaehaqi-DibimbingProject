function addToCart() {
    alert('Produk telah ditambahkan ke keranjang.');
}

function buyNow() {
    alert('Produk berhasil dibeli.');
}

function addToCart() {
    alert('Produk telah ditambahkan ke keranjang.');
}

function buyNow() {
    alert('Produk berhasil dibeli.');
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewer = document.getElementById('reviewer').value;
    const reviewText = document.getElementById('reviewText').value;
    const reviewRating = document.getElementById('reviewRating').value;

    const reviewSection = document.querySelector('.reviews');
    const newReview = document.createElement('div');
    newReview.classList.add('review');

    const reviewerName = document.createElement('p');
    reviewerName.innerHTML = `<strong>${reviewer}:</strong> ${reviewText}`;
    const rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = `Rating: ${reviewRating}/5`;

    newReview.appendChild(reviewerName);
    newReview.appendChild(rating);
    reviewSection.appendChild(newReview);

    document.getElementById('reviewForm').reset();
});
