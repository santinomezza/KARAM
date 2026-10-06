<template>
  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
</template>

<style scoped>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #008bc8;
  color: #fff;
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 0;
}
</style>
