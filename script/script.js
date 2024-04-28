let scrollPos = 0;
let scrollHeight = 0;
let scrollPosPercentage = 0;
let htmlTag = document.getElementById("html");
let currentBackgroundSize = 1080;

if(sessionStorage.getItem("lightTheme")==null){
    sessionStorage.setItem("lightTheme", "true");
}

if(sessionStorage.getItem("lightTheme")=="true"){
    document.getElementById("styleTag").href = "./style/style_alt.css";
    document.getElementById("themeIcon").src = "./img/moonicon.png";
    document.getElementById("styleTag").href = "./style/style.css";
    document.body.style.backgroundImage = "url(../img/background/bgnighttime" + currentBackgroundSize + ".png)";
} else{
    document.getElementById("styleTag").href = "./style/style.css";
    document.getElementById("themeIcon").src = "./img/sunicon.png";
    document.getElementById("styleTag").href = "./style/style_alt.css";
    document.body.style.backgroundImage = "url(../img/background/bgdaytime" + currentBackgroundSize + ".png)";
}

function bgScroll() {
    scrollHeight = htmlTag.offsetHeight - htmlTag.clientHeight;
    scrollPos = window.pageYOffset;
    scrollPosPercentage = 100 * scrollPos / scrollHeight
    document.body.style.backgroundPositionY = scrollPosPercentage + "%";
    document.body.style.backgroundPositionX = scrollPosPercentage + "%";
    setTimeout(bgScroll, 1000/60);
}

function themeSwitch(){
    checkRes();
    if(sessionStorage.getItem("lightTheme")=="false"){
        document.getElementById("themeIcon").src = "./img/moonicon.png";
        document.getElementById("styleTag").href = "./style/style.css";
        document.body.style.backgroundImage = "url(../img/background/bgnighttime" + currentBackgroundSize + ".png)";
        sessionStorage.setItem("lightTheme", "true");
    } else{
        document.getElementById("themeIcon").src = "./img/sunicon.png";
        document.getElementById("styleTag").href = "./style/style_alt.css";
        document.body.style.backgroundImage = "url(../img/background/bgdaytime" + currentBackgroundSize + ".png)";
        sessionStorage.setItem("lightTheme", "false");
    }
}

function checkRes(){
    if(htmlTag.clientWidth > htmlTag.clientHeight){
        if(htmlTag.clientHeight <= 1080){
            currentBackgroundSize = 1080;
        } else if(htmlTag.clientHeight > 1080 && htmlTag.clientHeight <= 1440){
            currentBackgroundSize = 1440;
        } else if(htmlTag.clientHeight > 1440){
            currentBackgroundSize = 2160;
        }
    } else {
        if(htmlTag.clientWidth <= 1080){
            currentBackgroundSize = 1080;
        } else if(htmlTag.clientWidth > 1080 && htmlTag.clientWidth <= 1440){
            currentBackgroundSize = 1440;
        } else if(htmlTag.clientWidth > 1440){
            currentBackgroundSize = 2160;
        }
    }
}

checkRes();
bgScroll();