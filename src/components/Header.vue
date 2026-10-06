<template>
  <header class="site-header" role="banner">
    <div class="container header-inner">
      <a href="/" class="logo" aria-label="KARAM - Inicio">
        <img src="/images/logo-karam-white.svg" alt="KARAM" width="120" height="40" loading="eager" />
      </a>

      <button
        class="menu-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="primary-menu"
        aria-label="Abrir men&uacute;"
        @click="toggleMenu"
      >
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
        <span class="menu-toggle__bar"></span>
      </button>

      <nav id="primary-menu" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navegaci&oacute;n principal">
        <ul class="main-nav__list">
          <li class="has-submenu" @mouseenter="openSubmenu" @mouseleave="closeSubmenu">
            <button type="button" class="main-nav__link" aria-expanded="false" aria-controls="submenu-vehiculos">
              Veh&iacute;culos
            </button>
            <ul id="submenu-vehiculos" class="submenu" aria-hidden="true">
              <li><router-link to="/vehiculos/autos" class="submenu__link" @click="closeMenu">Autos</router-link></li>
              <li><router-link to="/vehiculos/p&s" class="submenu__link" @click="closeMenu">SUV's &amp; Pick-up's</router-link></li>
              <li><router-link to="/vehiculos/utilitarios" class="submenu__link" @click="closeMenu">Comerciales</router-link></li>
              <li><router-link to="/flotas-y-ventas" class="submenu__link" @click="closeMenu">Flotas y Ventas Especiales</router-link></li>
              <li><router-link to="/test_drive" class="submenu__link" @click="closeMenu">Test Drive</router-link></li>
            </ul>
          </li>
          <li><router-link to="/usados_premium" class="main-nav__link" @click="closeMenu">Usados Premium</router-link></li>
          <li><router-link to="/planovalo" class="main-nav__link" @click="closeMenu">Plan Ovalo</router-link></li>
          <li><router-link to="/posventa" class="main-nav__link" @click="closeMenu">Posventa</router-link></li>
          <li><router-link to="/preguntas-frecuentes" class="main-nav__link main-nav__link--uppercase" @click="closeMenu">FAQ</router-link></li>
          <li><router-link to="/nuestra_empresa" class="main-nav__link" @click="closeMenu">Empresa</router-link></li>
        </ul>
      </nav>

      <a
        href="https://api.whatsapp.com/send?phone=543834441191"
        class="btn-whatsapp"
        target="_blank"
        rel="noopener"
        aria-label="Abrir chat de WhatsApp Ventas"
      >
        <span>WhatsApp</span>
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function openSubmenu() {
  // Mejora accesibilidad: se puede expandir con hover en desktop
}

function closeSubmenu() {
  // Se cierra al salir
}
</script>

<style scoped>
/* COMPLETAR: estilos del header mobile-first */
</style>
