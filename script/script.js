let scrollPos = 0;
let scrollHeight = 0;
let scrollPosPercentage = 0;
let htmlTag = document.getElementById("html");

if(sessionStorage.getItem("lightTheme")==null){
    sessionStorage.setItem("lightTheme", "true");
}

if(sessionStorage.getItem("lightTheme")=="true"){
    document.getElementById("themeIcon").src = "./img/moonicon.png";
    document.getElementById("styleTag").href = "./style/style.css";
} else{
    document.getElementById("themeIcon").src = "./img/sunicon.png";
    document.getElementById("styleTag").href = "./style/style_alt.css";
}

function bgScroll() {
    scrollHeight = htmlTag.offsetHeight - htmlTag.clientHeight;
    scrollPos = window.pageYOffset;
    scrollPosPercentage = 100 * scrollPos / scrollHeight
    if(htmlTag.offsetWidth > htmlTag.clientHeight){
        document.body.style.backgroundSize = "100% auto"
        document.body.style.backgroundPositionY = scrollPosPercentage + "%";
    } else{
        document.body.style.backgroundSize = "auto 100%"
        document.body.style.backgroundPositionX = scrollPosPercentage + "%";
    }
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

bgScroll()