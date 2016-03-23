/**
 * Created by Joseph on 3/16/2016.
 */
function chgimgSmall(name) {

    if(name == "applyicon"){
        var icon = document.getElementById("applyicon");
        icon.src = "images/Business-Graduation-Cap-icon2.fw.png";

    }else if(name == 'visiticon'){
        var icon = document.getElementById("visiticon");
        icon.src = "images/plane-icon2.fw.png";
    }
    else if(name == 'libraryicon'){
        var icon = document.getElementById("libraryicon");
        icon.src = "images/Library-2-icon1.fw.png";
    }
    else if(name == 'e-Learningicon'){
        var icon = document.getElementById("e-Learningicon");
        icon.src = "images/e-Learning2.fw.png";
    }
    else if(name == 'studenticon'){
        var icon = document.getElementById("studenticon");
        icon.src = "images/User-icon_white2.fw.png";
    }
    else if(name == 'chaticon'){
        var icon = document.getElementById("chaticon");
        icon.src = "images/chat-icon2.fw.png";
    }

}


function normalImgSmall(name) {
    if(name == "applyicon"){
        var icon = document.getElementById("applyicon");
        icon.src = "images/Business-Graduation-Cap-icon.fw.png";

    }else if(name == 'visiticon'){
        var icon = document.getElementById("visiticon");
        icon.src = "images/plane-icon.png";
    }
    else if(name == 'libraryicon'){
        var icon = document.getElementById("libraryicon");
        icon.src = "images/Library-2-icon.png";
    }
    else if(name == 'e-Learningicon'){
        var icon = document.getElementById("e-Learningicon");
        icon.src = "images/e-Learning.fw.png";
    }
    else if(name == 'studenticon'){
        var icon = document.getElementById("studenticon");
        icon.src = "images/User-icon_white.fw.png";
    }
    else if(name == 'chaticon'){
        var icon = document.getElementById("chaticon");
        icon.src = "images/chat-icon.png";
    }
}

$(function(){
    $('.dropdown-menu', this).on('click', function (event) {
        $(this).parent().toggleClass('open');
    });
    $('body').on('click', function (e) {
        if (!$('.dropdown-menu', this).is(e.target)
            && $('.dropdown-menu', this).has(e.target).length === 0
            && $('.open').has(e.target).length === 0
        ) {
            $('.dropdown-menu', this).removeClass('open');
        }
    });
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
});