$(function(){
    $('.show-btn').click(function(){
        $('.list-bar').toggle(400);
    })
});
$(function(){
    $('.tab-loaisach').hover(function(){
        $('.menu').toggle(400);
    });
});
$(function(){
    function tai(){
        document.getElementById('loading').style.display = "block";
    }
    function tai1(){
        document.getElementById('loading').style.display = "none";
    }
    $().ready(function(){
        setTimeout(tai,1);
        setTimeout(tai1,1400);
    });
});
$(function(){
    var x = $('.search').css('display')
    $('.btn-search').click(function(){
        if(x == 'none'){
            $('.search').show();
        }
    });
    $('.close-search').click(function(){
        $('.search').hide();
    });    
});