function highlight(element) {
    element.style.border = "3px solid #f39c12";
    console.log('Element is highlighted');
}

function unhighlight(element) {
    element.style.border = "none";
    console.log('Element is unhighlighted');
}

function initializeGallery() {
    console.log('Gallery is loaded');
    const images = document.querySelectorAll('.gallery-item');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}