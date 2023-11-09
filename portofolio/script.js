// Ambil elemen-elemen "card-news" yang ada
const newsCards = document.querySelectorAll(".card-news");
let currentIndex = 0; // Indeks elemen yang sedang ditampilkan

// Fungsi untuk menampilkan elemen dengan indeks tertentu
function showCard(index) {
    if (index >= 0 && index < newsCards.length) {
        newsCards.forEach((card) => {
            card.style.display = "none";
        });
        newsCards[index].style.display = "block";
        currentIndex = index;
    }
}

// Fungsi untuk menampilkan elemen berikutnya
function showNextCard() {
    currentIndex++;
    if (currentIndex >= newsCards.length) {
        currentIndex = 0;
    }
    showCard(currentIndex);
}

// Fungsi untuk menampilkan elemen sebelumnya
function showPreviousCard() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = newsCards.length - 1;
    }
    showCard(currentIndex);
}

function changeColor(button) {
    button.style.backgroundColor = "#40E0D0"; // Ubah warna sesuai yang Anda inginkan

    setTimeout(function () {
        button.style.backgroundColor = "#98FB98"; // Kembalikan ke warna aslinya
    }, 500); // Mengembalikan warna ke semula setelah 0.5 detik
}

prevButton.addEventListener("click", function () {
    changeColor(prevButton);
});

nextButton.addEventListener("click", function () {
    changeColor(nextButton);
});

// Tampilkan elemen pertama saat halaman dimuat
showCard(currentIndex);

// Tambahkan event listener untuk tombol "Next" dan "Previous"
document.getElementById("nextButton").addEventListener("click", showNextCard);
document.getElementById("prevButton").addEventListener("click", showPreviousCard);
