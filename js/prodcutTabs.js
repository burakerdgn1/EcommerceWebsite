$(document).ready(function () {
    let tabs = document.querySelector(".tabs");
    let heading = tabs.querySelector(".heading");
    let tabHeaderElements = tabs.querySelectorAll(".heading > div");
    let tabContent = tabs.querySelector(".tab-content");
    let tabContentElements = tabs.querySelectorAll(".tab-content > div");

    for (let i = 0; i < tabHeaderElements.length; i++) {
        tabHeaderElements[i].addEventListener("click", function () {
            heading.querySelector(".active").classList.remove("active");
            tabHeaderElements[i].classList.add("active");
            tabContent.querySelector(".active").classList.remove("active");
            tabContentElements[i].classList.add("active");
        });
    }

});
