// Scroll suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ejemplo de animación al hacer scroll (requiere un poco más de CSS para las clases 'fade-in', 'slide-up', etc.)
// window.addEventListener('scroll', () => {
//     const elements = document.querySelectorAll('.fade-in, .slide-up');
//     elements.forEach(element => {
//         const elementTop = element.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (elementTop < windowHeight - 100) {
//             element.classList.add('active');
//         }
//     });
// });

// Posible validación básica del formulario de contacto
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('mensaje');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Por favor, completa todos los campos del formulario.');
            event.preventDefault(); // Evita que se envíe el formulario si hay campos vacíos
        } else if (!isValidEmail(emailInput.value)) {
            alert('Por favor, introduce un correo electrónico válido.');
            event.preventDefault();
        }
        // Aquí podrías agregar más validaciones
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}