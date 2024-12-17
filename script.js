// Butonlar ve modal pencereleri alalım
const connectBtn = document.getElementById("connectBtn");
const modal = document.getElementById("modal");
const phantomBtn = document.getElementById("phantomBtn");
const connectedText = document.getElementById("connectedText");

// Cüzdan bağla butonuna tıklanınca modal'ı göster
connectBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Phantom butonuna tıklanınca Phantom'a bağlan
phantomBtn.addEventListener("click", async () => {
    // Phantom cüzdanının mevcut olup olmadığını kontrol et
    if (window.solana && window.solana.isPhantom) {
        try {
            // Phantom cüzdanına bağlan
            await window.solana.connect();
            console.log("Phantom cüzdanına bağlandı!");
            connectedText.innerHTML = "Cüzdan Seçildi: Phantom"; // Yazıyı değiştir
        } catch (err) {
            console.error("Bağlantı hatası:", err);
        }
    } else {
        alert("Phantom cüzdanı bulunamadı. Lütfen cüzdanı yükleyin.");
    }
    modal.style.display = "none"; // Modalı kapat
});
