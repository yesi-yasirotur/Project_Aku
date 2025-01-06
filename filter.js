// Ambil elemen tombol filter dan kartu proyek
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectCards = document.querySelectorAll('.project-card');

// Fungsi untuk memfilter galeri
function filterProjects(category) {
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block'; // Tampilkan kartu
        } else {
            card.style.display = 'none'; // Sembunyikan kartu
        }
    });
}

// Tambahkan event listener ke tombol filter
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProjects(category);
    });
});

// Tampilkan semua proyek secara default
filterProjects('all');
