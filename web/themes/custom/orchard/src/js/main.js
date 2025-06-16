import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Call Alpine.
window.Alpine = Alpine
Alpine.plugin([collapse, focus, morph, persist])
Alpine.start()

// console.log('Vite + Drupal funcionando');

// Global anchor click listener required by test instructions.
// Logs href, text content, and DOM reference of any <a> element clicked.
document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a');
  if (anchor) {
    console.log('Anchor clicked:', {
      href: anchor.getAttribute('href'),
      text: anchor.textContent.trim(),
      element: anchor,
    });
  }
});


window.addEventListener('load', () => {
  AOS.init({
    once: true,
    disable: 'mobile',
  });

  AOS.refresh();
});
