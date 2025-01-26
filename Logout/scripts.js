// Translation data
const translations = {
    en: {
        watchVideos: "Watch Videos",
        readPDFs: "Read PDFs",
        messageForYou: "Message<br>for you!"
    },
    fr: {
        watchVideos: "Regarder<br>des vidéos",
        readPDFs: "Lire des PDFs",
        messageForYou: "Message<br>pour toi !"
    },
    ar: {
        watchVideos: "مشاهدة الفيديوهات",
        readPDFs: "قراءة ملفات PDF",
        messageForYou: "رسالة<br>لك!"
    },
    am: {
        watchVideos: "ⵙⴰⵏⵉ ⵏ ⵓⵏⵏⴰⴽⵍⵓ",
        readPDFs: "ⵜⴰⵏⵙⴽⵉ ⵏ PDF",
        messageForYou: "ⵜⵓⵏⴽⵉⵔⵏ<br>ⵉⵎⴰⵏⵉ!"
    },
    jp: {
        watchVideos: "ビデオを見る",
        readPDFs: "PDFを読む",
        messageForYou: "メッセージ<br>あなたへ!"
    }
};

// Function to apply saved language
function applySavedLanguage() {
    // Get the saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to English

    // Elements to translate
    const elements = {
        watchVideos: document.querySelector(".container .card:nth-child(1) .title"),
        readPDFs: document.querySelector(".container .card:nth-child(2) .title"),
        messageForYou: document.querySelector(".container .card:nth-child(3) .title")
    };

    // Apply translations
    if (translations[savedLanguage]) {
        elements.watchVideos.innerText = translations[savedLanguage].watchVideos;
        elements.readPDFs.innerText = translations[savedLanguage].readPDFs;
        elements.messageForYou.innerHTML = translations[savedLanguage].messageForYou;
    }
}

// Apply the saved language when the page loads
document.addEventListener("DOMContentLoaded", applySavedLanguage);
