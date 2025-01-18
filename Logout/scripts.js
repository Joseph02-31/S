const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

const homeLink = document.querySelector('.navigation a[href="#"]'); // Select Home link


registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
});

// Hide popup when Home is clicked
homeLink.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

            document.addEventListener("DOMContentLoaded", () => {
                const email = sessionStorage.getItem('email'); // Get the email from session storage
                const textDiv = document.querySelector('.text-section'); // Select the text-section div
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
        
    } else if (email === "Lamnii@pi.m") {
        textDiv.textContent = "Welcome Mr. Mohamed LAMNII !"; 
    } else if (email === "Oudghiri@pi.m") {
        textDiv.textContent = "Welcome Mr. Morad OUDGHIRI !"; 
    } else if (email === "Anass@pi.m") {
        textDiv.textContent = "Welcome Mr. Anass OURRAOUI !"; 
    } else if (email === "Serji@pi.m") {
        textDiv.textContent = "Welcome Mr. Abdelilah SERJI !";
    } else if (email === "Tsouli@pi.m") {
        textDiv.textContent = "Welcome Mr. Najib TSOULI !";
    } else if (email === "Ziane@pi.m") {
        textDiv.textContent = "Welcome Mr. M'hammed ZIANE !";
    } else if (email === "Loubna@pi.m") {
        textDiv.textContent = "Welcome Ms. Loubna EL HOUARI !";
    } else if (email === "Mermri@pi.m") {
        textDiv.textContent = "Welcome Mr. Mermri EL BEKKAYE !";
        mCard.style.display = "none";
    } else if (email === "Jaara@pi.m") {
        textDiv.textContent = "Welcome Mr. El Miloud JAARA !";            
    } else {
        textDiv.textContent = "Hello!"; // Default message
    }
            });
    


