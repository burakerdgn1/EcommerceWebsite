$(document).ready(function () {
    var productImg = document.getElementById("productImage");
    var smallImg = document.getElementsByClassName("small");

    smallImg[0].onclick = function () {
        productImg.src = "images/pd/pd1-big.jpg";
    }
    smallImg[1].onclick = function () {
        productImg.src = "images/pd/pd2-big.jpg";
    }
    smallImg[2].onclick = function () {
        productImg.src = "images/pd/pd3-big.jpg";
    }
    smallImg[3].onclick = function () {
        productImg.src = "images/pd/pd4-big.jpg";
    }

    var readMore = document.getElementById("read-more");
    var detail2 = document.getElementsByClassName("detail2");


    readMore.onclick = function () {
        if (readMore.innerText === "Read less") {
            detail2[0].style.display = "none";
            readMore.innerText = "Read more";

        }
        else {
            detail2[0].style.display = "block";
            readMore.innerText = "Read less";


        }
    }

});
