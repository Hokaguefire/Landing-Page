import { initPopupSuscription } from './modules/popup_suscription.js';
import { initScrollTop } from './modules/scroll_top.js';

// Inicializar las funcionalidades
document.addEventListener("DOMContentLoaded", function() {
    initPopupSuscription();
    initScrollTop();
});