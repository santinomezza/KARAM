<template>
  <div class="page-placeholder">
    <div class="container">
      <h1>Modelos 0km</h1>
      <p>COMPLETAR: contenido del cat&aacute;logo 0km.</p>
      <p>Secciones: Autos, SUV &amp; Pickups, Comerciales.</p>
      <div class="cta-group">
        <router-link to="/vehiculos/autos" class="btn btn-primary">Autos</router-link>
        <router-link to="/vehiculos/p&s" class="btn btn-primary">SUV y Pickups</router-link>
        <router-link to="/vehiculos/utilitarios" class="btn btn-primary">Comerciales</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-placeholder {
  padding: var(--space-xl) 0;
}
.cta-group {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-top: var(--space-md);
}
</style>
