

window.onload = function () {
    window.scrollTo(0, 0);
};

const contactoEmail = document.getElementById('contacto-email');
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    contactoEmail.setAttribute('href', 'mailto:?subject=Contácto%20sobre%tu%20portafólio&body=Hola,%20me%20gustaría%20obtener%20información%20sobre%20tu%perfil');

}
