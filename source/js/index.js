var nav = document.getElementsByClassName('nav')[0];

// event scroll down 
window.onscroll = function (e) { 
    var scroll = window.pageYOffset;
    if(scroll >= 100){
        nav.style.backgroundColor = 'white';
    }else if(scroll == 0){
        nav.style.backgroundColor = 'transparent';
    }
 }

 // event 
// console.log(location.href);

 const slideto = (nameclass) =>{
    const element = document.getElementById(nameclass);
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
 }
