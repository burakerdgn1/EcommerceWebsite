let btn= document.querySelector('#login');
let div= document.querySelector('#appear');

btn.addEventListener('click',()=>{
    if(div.style.display==='none'){
        div.style.display='block';
    }
    else{
        div.style.display='none';
    }

});

let exit= document.querySelector('#esc');
exit.addEventListener('click',()=>{
    div.style.display='none';

});

