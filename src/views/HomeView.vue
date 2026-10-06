<template>
  <div class="home">
    <!-- Hero ya est&aacute; en index.html, aqu&iacute; lo mejoramos con JS -->
    <section class="home-hero" aria-labelledby="hero-title">
      <div class="container">
        <h1 id="hero-title">Concesionario Oficial Ford en Catamarca</h1>
        <p>Autos 0km, usados certificados, service, repuestos y accesorios.</p>
        <div class="hero-actions">
          <router-link to="/vehiculos" class="btn btn-primary">Ver 0km</router-link>
          <router-link to="/usados_premium" class="btn btn-secondary">Usados</router-link>
          <router-link to="/test_drive" class="btn btn-accent">Cotizar / Test Drive</router-link>
          <router-link to="/posventa/servicios" class="btn btn-outline">Turno de Service</router-link>
        </div>
      </div>
    </section>

    <!-- COMPLETAR: Slider de videos del home (categor&iacute;a 10) -->
    <section class="home-videos" v-if="sliderVideos.length" aria-label="Videos destacados">
      <div class="container">
        <h2>Videos</h2>
        <!-- COMPLETAR: implementar slider de videos con vue-youtube o embed -->
        <div class="video-grid">
          <div v-for="video in sliderVideos" :key="video.url" class="video-card">
            <iframe
              v-if="video.url"
              :src="youtubeEmbed(video.url)"
              title="Video de KARAM"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPLETAR: Modelos 0km destacados (categor&iacute;a 5) -->
    <section class="home-nuevos" aria-labelledby="nuevos-title">
      <div class="container">
        <h2 id="nuevos-title">Nuestros 0km</h2>
        <p class="section-subtitle">COMPLETAR: texto de introducci&oacute;n a modelos 0km.</p>
        <div class="car-grid">
          <!-- COMPLETAR: cargar desde API o fixtures -->
          <div class="car-card" v-for="n in 4" :key="n">
            <div class="car-card__image">
              <img src="/images/placeholder-car.svg" alt="Modelo Ford {{n}}" width="400" height="300" loading="lazy" />
            </div>
            <div class="car-card__body">
              <h3>COMPLETAR: modelo {{n}}</h3>
              <p>COMPLETAR: descripci&oacute;n breve.</p>
              <router-link to="/modelo/COMPLETAR" class="btn btn-primary">Consultar</router-link>
            </div>
          </div>
        </div>
        <div class="section-actions">
          <router-link to="/vehiculos" class="btn btn-secondary">Ver todos los modelos</router-link>
        </div>
      </div>
    </section>

    <!-- COMPLETAR: Plan Ovalo -->
    <section class="home-ovalo" aria-labelledby="ovalo-title">
      <div class="container">
        <h2 id="ovalo-title">Plan Ovalo</h2>
        <p class="section-subtitle">COMPLETAR: texto de introducci&oacute;n al Plan Ovalo.</p>
        <router-link to="/planovalo" class="btn btn-primary">Conoc&eacute; m&aacute;s</router-link>
      </div>
    </section>

    <!-- COMPLETAR: Popup / CTA final -->
    <section class="home-popup" aria-label="Consulta">
      <div class="container">
        <h2>&iquest;Ten&eacute;s alguna consulta?</h2>
        <p>Comunicate con nosotros por WhatsApp o complet&aacute; el formulario.</p>
        <div class="hero-actions">
          <a :href="whatsappVentas" class="btn-whatsapp" target="_blank" rel="noopener">WhatsApp</a>
          <router-link to="/contacto" class="btn btn-secondary">Contacto</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '../composables/useApi'
import { whatsappVentas } from '../data/menu'

const { getSliderVideos } = useApi()

const sliderVideos = ref([])

function youtubeEmbed(url) {
  // COMPLETAR: normalizar URLs de YouTube a embed
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\s]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : url
}

onMounted(async () => {
  // En modo DEMO, fetchFromApi devuelve [] sin tocar producci&oacute;n
  sliderVideos.value = await getSliderVideos()
})
</script>

<style scoped>
.home-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: #fff;
  padding: var(--space-xxl) 0;
  text-align: center;
}

.home-hero h1 {
  color: #fff;
  font-size: clamp(1.8rem, 5vw, 3rem);
  margin-bottom: var(--space-md);
}

.home-hero p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto var(--space-lg);
}

.home-hero .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
}

.home-videos,
.home-nuevos,
.home-ovalo,
.home-popup {
  padding: var(--space-xl) 0;
}

.home-videos h2,
.home-nuevos h2,
.home-ovalo h2,
.home-popup h2 {
  text-align: center;
  margin-bottom: var(--space-md);
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-muted);
  margin-bottom: var(--space-lg);
}

.car-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.car-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
}

.car-card:hover,
.car-card:focus-within {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.car-card__image {
  aspect-ratio: 4 / 3;
  background: var(--color-bg-alt);
}

.car-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.car-card__body {
  padding: var(--space-md);
}

.car-card__body h3 {
  margin-bottom: var(--space-xs);
  font-size: 1.1rem;
}

.car-card__body p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin-bottom: var(--space-sm);
}

.section-actions {
  text-align: center;
}

.home-popup {
  background-color: var(--color-bg-alt);
  text-align: center;
}

.home-popup .hero-actions {
  justify-content: center;
  margin-top: var(--space-md);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-md);
}

.video-card {
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.video-card iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

@media (min-width: 768px) {
  .home-hero {
    padding: 6rem 0;
  }
}
</style>
