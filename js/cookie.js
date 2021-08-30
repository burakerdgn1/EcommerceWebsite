$(document).ready(function () {
    const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");

    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBannerDisplayed", true);
    });

    setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed")) {
            cookieContainer.classList.add("active");
        }
    }, 10000);
    let esc = document.querySelector('#esc-cookie');
    esc.addEventListener('click', () => {
        cookieContainer.style.display = 'none';
    });
});
