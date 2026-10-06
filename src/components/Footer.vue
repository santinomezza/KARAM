<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="/images/logo-karam-white.svg" alt="KARAM" width="120" height="40" loading="lazy" />
        <p>Concesionario oficial Ford en Catamarca.</p>
      </div>

      <div class="footer-links">
        <ul>
          <li><router-link to="/vehiculos">Veh&iacute;culos</router-link></li>
          <li><router-link to="/usados_premium">Usados Premium</router-link></li>
          <li><router-link to="/planovalo">Plan Ovalo</router-link></li>
          <li><router-link to="/posventa">Posventa</router-link></li>
          <li><router-link to="/preguntas-frecuentes">FAQ</router-link></li>
          <li><router-link to="/nuestra_empresa">Empresa</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
        </ul>
      </div>

      <div class="footer-contact">
        <p><strong>Tel&eacute;fono:</strong> <a href="tel:+543834441191">(0383) 444-1191</a></p>
        <p><strong>Direcci&oacute;n:</strong> Av. Pte. Castillo 2974, San Fdo. del Valle de Catamarca</p>
        <p><strong>Horarios:</strong> Lun-Vie 08:00-17:00, S&aacute;b 09:00-13:00</p>
        <a href="https://api.whatsapp.com/send?phone=543834441191" class="btn-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp Ventas">WhatsApp</a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; <span id="year"></span> KARAM Automotores S.A. Todos los derechos reservados.</p>
        <p class="legal">Im&aacute;genes ilustrativas. Precios y condiciones sujetos a cambio sin previo aviso.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()
})
</script>

<style scoped>
/* COMPLETAR: estilos del footer mobile-first */
</style>
