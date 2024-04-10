let scrollPos = 0;
let scrollHeight = document.getElementById("html").offsetHeight - document.getElementById("html").clientHeight;
let scrollPosPercentage = 0;
function bgScroll() {
    scrollPos = window.pageYOffset;
    scrollPosPercentage = 100 * scrollPos / scrollHeight

    document.body.style.backgroundPositionY = scrollPosPercentage + "%";
    
    setTimeout(bgScroll, 10);
}
bgScroll()
