export function initPopupSuscription() {
    const popup_suscription = document.getElementById('popup-suscription');
    const popupClose = document.getElementById('popup-close');

    setTimeout(function() {
        popup_suscription.style.display = 'flex';
    }, 5000);

    popupClose.addEventListener('click', function() {
        popup_suscription.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup_suscription) {
            popup_suscription.style.display = 'none';
        }
    });
}
