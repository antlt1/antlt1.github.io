var nav = document.getElementsByClassName('nav')[0];
//
// console.log(nav);
window.onscroll = function (e) { 
    var scroll = window.pageYOffset;
    console.log(scroll);
    if(scroll >= 100){
        nav.style.backgroundColor = 'white';
        console.log('trong: '+scroll);
    }else if(scroll == 0){
        nav.style.backgroundColor = 'transparent';
    }
 }