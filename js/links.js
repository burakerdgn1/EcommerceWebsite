$(document).ready(function () {
    $('.mega-links a[href^="#"]').each(function () {
        var oldUrl = $(this).attr("href"); // Get current url
        var newUrl = oldUrl.replace("#", "404.html"); // Create new url
        $(this).attr("href", newUrl); // Set herf value
    });
    $('.footer-col a[href^="#"]').each(function () {
        var oldUrl = $(this).attr("href"); // Get current url
        var newUrl = oldUrl.replace("#", "404.html"); // Create new url
        $(this).attr("href", newUrl); // Set herf value
    });
});