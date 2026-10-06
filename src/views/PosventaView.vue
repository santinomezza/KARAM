<template>
  <div class="page-placeholder">
    <div class="container">
      <h1>Posventa</h1>
      <p>Service oficial Ford, repuestos, accesorios y Ford Protect.</p>
      <div class="cta-group">
        <router-link to="/posventa/servicios" class="btn btn-primary">Turno de Service</router-link>
        <router-link to="/posventa/repuestos_y_accesorios" class="btn btn-secondary">Repuestos y Accesorios</router-link>
        <router-link to="/posventa/ford_protect" class="btn btn-outline">Ford Protect</router-link>
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
