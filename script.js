// Declare all variables
let scrollPos = 0;
let scrollHeight = 0;
let scrollWidth = 0;
let scrollPosPercentage = 0;

// Starts the function bgScroll
function bgScroll() {
    // Get page width and page height
    scrollWidth = document.getElementById("html").offsetWidth - document.getElementById("html").clientWidth;
    scrollHeight = document.getElementById("html").offsetHeight - document.getElementById("html").clientHeight;

    // Scrolls the background vertically if the viewport is widescreen
    if(scrollWidth > scrollHeight){
        scrollPos = window.pageYOffset;
        scrollPosPercentage = 100 * scrollPos / scrollHeight
        document.body.style.backgroundPositionY = scrollPosPercentage + "%";
    } // Scrolls the background horizontally if the viewport is NOT widescreen
    else{
        scrollPos = window.pageYOffset;
        scrollPosPercentage = 100 * scrollPos / scrollHeight
        document.body.style.backgroundPositionX = scrollPosPercentage + "%";
    }

    // RUns bgScroll at 60 fps
    setTimeout(bgScroll, 1000/60);
}
bgScroll()
