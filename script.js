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
bgScroll()
