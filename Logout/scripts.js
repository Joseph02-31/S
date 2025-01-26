// Translation data
const translations = {
    en: {
        watchVideos: "Watch Videos",
        readPDFs: "Read PDFs",
        messageForYou: "Message<br>for you!",
        logo: "B. Youssef",
        language: "Language",
        logout: "Logout"
    },
    fr: {
        watchVideos: "Regarder<br>des vidéos",
        readPDFs: "Lire des PDFs",
        messageForYou: "Message<br>pour toi !",
        logo: "B. Youssef",
        language: "Langue",
        logout: "Déconnexion"
    },
    ar: {
        watchVideos: "مشاهدة الفيديوهات",
        readPDFs: "قراءة ملفات PDF",
        messageForYou: "رسالة<br>لك!",
        logo: "ب. يوسف",
        language: "اللغة",
        logout: "تسجيل الخروج"
    },
    am: {
        watchVideos: "ⵙⴰⵏⵉ ⵏ ⵓⵏⵏⴰⴽⵍⵓ",
        readPDFs: "ⵜⴰⵏⵙⴽⵉ ⵏ PDF",
        messageForYou: "ⵜⵓⵏⴽⵉⵔⵏ<br>ⵉⵎⴰⵏⵉ!",
        logo: "ⴱ. ⵢⵓⵙⴻⴼ",
        language: "ⵜⴰⵏⴼⴰⵡⵜ",
        logout: "ⵜⵓⵙⵔⵙⵓ"
    },
    jp: {
        watchVideos: "ビデオを見る",
        readPDFs: "PDFを読む",
        messageForYou: "メッセージ<br>あなたへ!",
        logo: "B. ユセフ",
        language: "言語",
        logout: "ログアウト"
    }
};

// Function to apply saved language
function applySavedLanguage() {
    // Get the saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to English

        // Apply `lang` attribute to the HTML tag for styling
    document.documentElement.setAttribute("lang", savedLanguage);

    // Elements to translate
    const elements = {
        watchVideos: document.querySelector(".container .card:nth-child(1) .title"),
        readPDFs: document.querySelector(".container .card:nth-child(2) .title"),
        messageForYou: document.querySelector(".container .card:nth-child(3) .title"),
        logo: document.querySelector(".logo"),
        language: document.getElementById("language-link"),
        logout: document.querySelector(".btnlogin-popup")
    };

    // Apply translations
    if (translations[savedLanguage]) {
        elements.watchVideos.innerHTML = translations[savedLanguage].watchVideos;
        elements.readPDFs.innerHTML = translations[savedLanguage].readPDFs;
        elements.messageForYou.innerHTML = translations[savedLanguage].messageForYou;
        elements.logo.innerText = translations[savedLanguage].logo;
        elements.language.innerText = translations[savedLanguage].language;
        elements.logout.innerText = translations[savedLanguage].logout;
    }
}

// Function to change the language
function changeLanguage(lang) {
    // Save the selected language in localStorage
    localStorage.setItem("selectedLanguage", lang);

    // Apply the translation
    applySavedLanguage();
}

// Dropdown toggle function
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Apply the saved language when the page loads
document.addEventListener("DOMContentLoaded", applySavedLanguage);
