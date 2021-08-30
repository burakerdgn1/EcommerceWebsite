$(document).ready(function () {
    let count1 = 0;
    let count2 = 0;
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');

    var b1 = document.getElementsByClassName('b1');
    for (var i = 0, length = b1.length; i < length; i++) {
        b1[i].addEventListener('click', function () {
            count1++;
            counter1.innerText = count1;
        });
    }
    var b2 = document.getElementsByClassName('b2');
    for (var i = 0, length = b2.length; i < length; i++) {
        b2[i].addEventListener('click', function () {
            count2++;
            counter2.innerText = count2;

        });
    }
    var b3 = document.getElementsByClassName('b3');
    for (var i = 0, length = b3.length; i < length; i++) {
        b3[i].addEventListener('click', function () {
            count1++;
            counter1.innerText = count1;

        });
    }

    var secondb1 = document.getElementsByClassName('second-b1');
    for (var i = 0, length = secondb1.length; i < length; i++) {
        secondb1[i].addEventListener('click', function () {
            count1++;
            counter1.innerText = count1;
        });
    }
    var secondb2 = document.getElementsByClassName('second-b2');
    for (var i = 0, length = secondb2.length; i < length; i++) {
        secondb2[i].addEventListener('click', function () {
            count2++;
            counter2.innerText = count2;

        });
    }
    var secondb3 = document.getElementsByClassName('second-b3');
    for (var i = 0, length = secondb3.length; i < length; i++) {
        secondb3[i].addEventListener('click', function () {
            count1++;
            counter1.innerText = count1;

        });
    }
    

});
