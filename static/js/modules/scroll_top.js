export function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-btn');

    // Evento para hacer scroll al inicio cuando se hace clic en el botón
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Evento para ocultar o mostrar el botón según el desplazamiento de la página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'flex'; // Muestra el botón si se baja 200px
        } else {
            scrollTopBtn.style.display = 'none';  // Oculta el botón si está en la parte superior
        }
    });
}
