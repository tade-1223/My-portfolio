// =========================
// HIRE BUTTON
// =========================

document.getElementById("hireBtn")
.addEventListener("click", () => {

    alert(
        "Thank you for visiting my portfolio!"
    );

});


// =========================
// CONTACT FORM
// =========================

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();

});


// =========================
// TYPING ANIMATION
// =========================

const typingTexts = [

    "Web Developer",

    "AI Enthusiast",

    "Machine Learning Developer",

    "Future Software Engineer"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function typing(){

    if(count === typingTexts.length){
        count = 0;
    }

    currentText = typingTexts[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing")
    .textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(typing, 1200);

    }else{

        setTimeout(typing, 120);

    }

})();


// =========================
// DARK MODE
// =========================

document.getElementById("darkModeToggle")
.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// =========================
// CHATBOT BUTTON
// =========================

document.getElementById("chatbotBtn")
.addEventListener("click", () => {

    alert(
        "AI Chatbot Coming Soon!"
    );

});