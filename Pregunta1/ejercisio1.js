let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("miCarrusel");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Ocultar todas las slides
    }
    slides[slideIndex - 1].style.display = "block";  // Mostrar la slide actual
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Mostrar la primera slide inicialmente
showSlides(slideIndex);

// Cambiar la slide automáticamente cada 3 segundos
setInterval(() => {
    plusSlides(1);
}, 3000);
