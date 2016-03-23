/**
 * Created by sabre on 16/03/2016.
 */
function chgimg(name) {

   if(name == "facebookicon"){
       var icon = document.getElementById("facebookicon");
       icon.src = "images/facebookhover.fw.png";

   }else if(name == 'twittericon'){
       var icon = document.getElementById("twittericon");
       icon.src = "images/twitterhovericon.fw.png";
   }
   else if(name == 'gplusicon'){
       var icon = document.getElementById("gplusicon");
       icon.src = "images/gplushovericon.fw.png";
   }
   else if(name == 'youtubeicon'){
       var icon = document.getElementById("youtubeicon");
       icon.src = "images/youtubehovericon.fw.png";
   }
   else if(name == 'linkdnicon'){
       var icon = document.getElementById("linkdnicon");
       icon.src = "images/linkdnhovericon.fw.png";
   }
   else if(name == 'bloggericon'){
       var icon = document.getElementById("bloggericon");
       icon.src = "images/bloggerhovericon.fw.png";
   }

}


function normalImg(name) {
    if(name == "facebookicon"){
        var icon = document.getElementById("facebookicon");
        icon.src = "images/facebook-icon.fw.png";

    }else if(name == 'twittericon'){
        var icon = document.getElementById("twittericon");
        icon.src = "images/twitter-icon.fw.png";
    }
    else if(name == 'gplusicon'){
        var icon = document.getElementById("gplusicon");
        icon.src = "images/googleplus.fw.png";
    }
    else if(name == 'youtubeicon'){
        var icon = document.getElementById("youtubeicon");
        icon.src = "images/youtube-icon.fw.png";
    }
    else if(name == 'linkdnicon'){
        var icon = document.getElementById("linkdnicon");
        icon.src = "images/linkedin-icon.fw.png";
    }
    else if(name == 'bloggericon'){
        var icon = document.getElementById("bloggericon");
        icon.src = "images/blogger.fw.png";
    }
}
