$(document).ready(function () {
    let span = document.getElementsByClassName('spn');
    let product = document.getElementsByClassName('second-box');
    let product_page = Math.ceil(product.length / 4);
    let l = 0;
    let movePer = 100;
    let maxMove = 200;

    let view = window.matchMedia("(max-width:768)");
    if (view.matches) {
        movePer = 50.36;
        maxMove = 504;
    }

    let right_mover = () => {
        l = l + movePer;
        if (product == 1) {
            l = 0;
        }
        for (const i of product) {
            if (l > maxMove) {
                l = l - movePer;
            }
            i.style.left = '-' + l + '%';
        }
    }
    let left_mover = () => {
        l = l - movePer;
        if (l <= 0) {
            l = 0;
        }
        for (const i of product) {
            if (product_page > 1) {
                i.style.left = '-' + l + '%';
            }
        }
    }

    span[1].onclick = () => { right_mover(); }
    span[0].onclick = () => { left_mover(); }

});
