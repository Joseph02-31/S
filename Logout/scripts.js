                document.addEventListener("DOMContentLoaded", () => {
                const email = sessionStorage.getItem('email'); // Get the email from session storage
                const textDiv = document.querySelector('.text-section'); // Select the text-section div
                const textDiv2 = document.querySelector('.text-section2'); // Select the text-section2 div
                const vCard = document.getElementById('v-card');
                const pCard = document.getElementById('p-card'); // Select the P card element
                const mCard = document.getElementById('m-card'); // Select the M card element
                  


                    
 


                // Check the email and display the corresponding message
    if (email === "Youssef@pi.m") {
        textDiv.textContent = "Welcome Mr. Youssef BOUZIANI !"; // Message for ab@pi.m
    } else if (email === "Youssra@pi.m") {
        textDiv.textContent = "Welcome Ms. Youssra BENHADOU !";
        mCard.style.display = "none";
    } else if (email === "Aya@pi.m") {
        textDiv.textContent = "Welcome Ms. Aya HARRAT !";   
    } else if (email === "Bouchlaghem@pi.m") {
        textDiv.textContent = "Welcome Mr. Mohammed BOUCHLAGHEM !"; 
    } else if (email === "Oudghiri@pi.m") {
        textDiv.textContent = "Welcome Mr. Morad OUDGHIRI !"; 
        
    } else if (email === "Lamnii@pi.m") {
        textDiv.textContent = "Welcome Mr. Mohamed LAMNII !"; 
    } else if (email === "Anass@pi.m") {
        textDiv.textContent = "Welcome Mr. Anass OURRAOUI !"; 
                      mCard.style.display = "none";
       // mCard.href = "../Pages/msg.html";
    } else if (email === "Serji@pi.m") {
        textDiv.textContent = "Welcome Mr. Abdelilah SERJI !";
                //   mCard.style.display = "none";
          mCard.href = "../Pages/msg.html";

    } else if (email === "Tsouli@pi.m") {
        textDiv.textContent = "Welcome Mr. Najib TSOULI !";
        mCard.href = "../Pages/msg.html";
    } else if (email === "Ziane@pi.m") {
        textDiv.textContent = "Welcome Mr. M'hammed ZIANE !";
    } else if (email === "Loubna@pi.m") {
        textDiv.textContent = "Welcome Ms. Loubna EL HOUARI !";
        mCard.href = "../Pages/msg.html";
    } else if (email === "Mermri@pi.m") {
        textDiv.textContent = "Welcome Mr. Mermri EL BEKKAYE !";
        mCard.style.display = "none";
    } else if (email === "Jaara@pi.m") {
        textDiv.textContent = "Welcome Mr. El Miloud JAARA !";            
    } else if (email === "Ismaili@pi.m") {
        textDiv.textContent = "Welcome Mr. M.C. Ismaili !";            
    } else if (email === "Omar@pi.m") {
        textDiv.textContent = "Welcome Mr. Chakrone OMAR !";    
        mCard.href = "../Pages/msg.html";
     } else if (email === "YoussefB@g.m") {
        textDiv.textContent = "Welcome Mr. Youssef BOUYAHROUZI !";  
            mCard.href = "../Pages/msg.html";
    } else if (email === "Rihab@g.m") {
        textDiv.textContent = "Welcome Ms. Rihab BOUZIANI !";           
            mCard.href = "../Pages/msg.html";
        
    } else if (email === "Soukayna@Y.ally") {    
          textDiv.textContent = "Welcome Ms. Soukayna RAHMANI !"; 
         // vCard.style.display = "none";
          pCard.style.display = "none";
          mCard.style.display = "none";
     } else if (email === "Jihane@M.kh") {    
          textDiv.textContent = "Welcome Ms. Maryama KHATABI !"; 
          mCard.style.display = "none";
       // mCard.href = "../Pages/msg.html";
      } else if (email === "aboyoussef@B.f") {    
          textDiv.textContent = "! مرحباً بالسيد محمد بوزياني "; 
         
          mCard.href = "../Pages/msg2.html";
      

        
        
        
        
    } else {
        textDiv.textContent = "Hello!"; // Default message
    }


                                 });   

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
        logout: "Quitter"
    },
    ar: {
        watchVideos: "مشاهدة الفيديوهات",
        readPDFs: "قراءة ملفات PDF",
        messageForYou: "رسالة<br>لك!",
        logo: "يُوسُفُ ",
        language: "اللغة",
        logout: "الخروج"
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
        logo: "ユセフ",
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


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
