let scrollPos = 0;
let scrollHeight = 0;
let scrollPosPercentage = 0;
let htmlTag = document.getElementById("html");

function bgScroll() {
    scrollHeight = htmlTag.offsetHeight - htmlTag.clientHeight;
    scrollPos = window.pageYOffset;
    scrollPosPercentage = 100 * scrollPos / scrollHeight
    document.body.style.backgroundPositionY = scrollPosPercentage + "%";
    document.body.style.backgroundPositionX = scrollPosPercentage + "%";
    setTimeout(bgScroll, 1000/60);
}

function themeSwitch(){
    if(sessionStorage.getItem("lightTheme")=="false"){
        document.getElementById("themeIcon").src = "./img/moonicon.png";
        document.getElementById("styleTag").href = "./style/style.css";
        sessionStorage.setItem("lightTheme", "true");
    } else{
        document.getElementById("themeIcon").src = "./img/sunicon.png";
        document.getElementById("styleTag").href = "./style/style_alt.css";
        sessionStorage.setItem("lightTheme", "false");
    }
}

if(sessionStorage.getItem("lightTheme") == null){
    sessionStorage.setItem("lightTheme", "");
}
sessionStorage.setItem("lightTheme", "false");

themeSwitch();
bgScroll()