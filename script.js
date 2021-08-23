let btn = document.querySelector('#login');
let div = document.querySelector('#appear');

btn.addEventListener('click', () => {
    if (div.style.display === 'none') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }

});

let exit = document.querySelector('#esc');
exit.addEventListener('click', () => {
    div.style.display = 'none';

});

var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


const cookieContainer = document.querySelector(".cookie-container");
const cookieButton= document.querySelector(".cookie-btn");

cookieButton.addEventListener("click",()=>{
cookieContainer.classList.remove("active");
localStorage.setItem("cookieBannerDisplayed",true);
});

setTimeout(()=>{
    if(!localStorage.getItem("cookieBannerDisplayed")){
        cookieContainer.classList.add("active");
    }
},10000);
let esc = document.querySelector('#esc-cookie');
esc.addEventListener('click', () => {
    cookieContainer.style.display = 'none';
});

