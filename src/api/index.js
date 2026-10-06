/**
 * Configuraci&oacute;n de la API de KARAM.
 *
 * En modo DEMO (DEMO=true) los formularios no env&iacute;an datos a producci&oacute;n.
 * Solo se permiten GET de lectura a la API de WordPress para cargar contenido.
 *
 * Para activar endpoints reales, cambiar DEMO a false y completar API_BASE_URL.
 */

export const DEMO = true

export const API_BASE_URL = 'https://admin.karamsa.com.ar/wp-json/wp/v2/'

export const ENDPOINTS = {
  homeSlider: `${API_BASE_URL}posts?categories=61`,
  autos: `${API_BASE_URL}posts?categories=5&per_page=100`,
  vehiculos: `${API_BASE_URL}posts?categories=5`,
  usadosPremium: (perPage = 12, page = 1) =>
    `${API_BASE_URL}posts?categories=14&per_page=${perPage}&page=${page}`,
  usadosPremiumAll: `${API_BASE_URL}posts?categories=14&per_page=100`,
  premiumBrands: `${API_BASE_URL}marca?per_page=100`,
  repuestos: `${API_BASE_URL}posts?categories=7&per_page=100`,
  planOvalo: `${API_BASE_URL}posts?filter[meta_key]=planOvalo&filter[meta_value]=1&per_page=100`,
  sliderVideos: `${API_BASE_URL}posts?categories=10&per_page=100`,
  posventaCarousel: `${API_BASE_URL}posts?categories=60`,
  oportunidades: `${API_BASE_URL}posts?categories=12&per_page=100`,
  novedades: `${API_BASE_URL}posts?categories=13&per_page=100`,
  modeloPorSlug: (slug) => `${API_BASE_URL}posts/?slug=${slug}`,
  caracteristicasPorModelo: (slug) =>
    `${API_BASE_URL}posts?categories=4&filter[meta_key]=idModelo&filter[meta_value]=${slug}&per_page=100`,
  fichaTecnicaPorAuto: (slug) =>
    `${API_BASE_URL}posts?categories=6&filter[meta_key]=idAuto&filter[meta_value]=${slug}&per_page=100`,
  testDrive: `${API_BASE_URL}posts?categories=5&filter[meta_key]=testdrive&filter[meta_value]=1&per_page=100`
}

/**
 * Endpoints PHP de formularios (solo documentados, no activos en DEMO).
 *
 * - consulta-taller.php
 * - consulta-repuestos.php
 * - consulta-auto.php
 * - contacto.php
 * - contacto-flotas.php
 * - uploadFile.php
 * - apply.php
 *
 * En DEMO=true, los formularios simulan env&iacute;o con validaci&oacute;n y mensaje de &eacute;xito.
 * En DEMO=false, se debe implementar env&iacute;o real con FormData multipart/form-data.
 */
