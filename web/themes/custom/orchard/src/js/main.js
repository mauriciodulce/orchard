import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin([collapse, focus, morph, persist])
Alpine.start()

console.log('Vite + Drupal funcionando');

