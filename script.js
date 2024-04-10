// Declare all variables
let scrollPos = 0;
let scrollHeight = 0;
let scrollPosPercentage = 0;
let setScrollPos = document.body.style.backgroundPositionY;

// Starts function bgScroll
function bgScroll() {
    scrollHeight = document.getElementById("html").offsetHeight - document.getElementById("html").clientHeight;
    scrollPos = window.pageYOffset;                         // Get scroll position in pixels
    scrollPosPercentage = 100 * scrollPos / scrollHeight    // Convert the scroll position to a percentage
    document.body.style.backgroundPositionY = scrollPosPercentage + "%";    // Set the background Y position
    setTimeout(bgScroll, 1000/60);                             // Call the function bgScroll 60 times per second
}
bgScroll()
