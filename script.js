document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Terima kasih! Pesan Anda telah terkirim.";
    this.reset();
});
