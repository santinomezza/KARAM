import { ref } from 'vue'
import { DEMO, API_BASE_URL, ENDPOINTS } from '../api'

const loading = ref(false)
const error = ref(null)

async function fetchFromApi(url) {
  if (DEMO) {
    // En modo demo, devolvemos un array vacío o datos de ejemplo.
    // Las vistas usar&aacute;n datos embebidos o fixtures locales seg&uacute;n corresponda.
    return []
  }

  try {
    loading.value = true
    error.value = null
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const data = await response.json()
    return data
  } catch (err) {
    error.value = err.message
    console.error('Error en fetchFromApi:', err)
    return []
  } finally {
    loading.value = false
  }
}

export function useApi() {
  const getHomeSlider = () => fetchFromApi(ENDPOINTS.homeSlider)
  const getAutos = () => fetchFromApi(ENDPOINTS.autos)
  const getVehiculos = () => fetchFromApi(ENDPOINTS.vehiculos)
  const getUsadosPremium = (perPage = 12, page = 1) =>
    fetchFromApi(ENDPOINTS.usadosPremium(perPage, page))
  const getUsadosPremiumAll = () => fetchFromApi(ENDPOINTS.usadosPremiumAll)
  const getPremiumBrands = () => fetchFromApi(ENDPOINTS.premiumBrands)
  const getRepuestos = () => fetchFromApi(ENDPOINTS.repuestos)
  const getPlanOvalo = () => fetchFromApi(ENDPOINTS.planOvalo)
  const getSliderVideos = () => fetchFromApi(ENDPOINTS.sliderVideos)
  const getPosventaCarousel = () => fetchFromApi(ENDPOINTS.posventaCarousel)
  const getOportunidades = () => fetchFromApi(ENDPOINTS.oportunidades)
  const getNovedades = () => fetchFromApi(ENDPOINTS.novedades)
  const getModeloPorSlug = (slug) => fetchFromApi(ENDPOINTS.modeloPorSlug(slug))
  const getCaracteristicasPorModelo = (slug) =>
    fetchFromApi(ENDPOINTS.caracteristicasPorModelo(slug))
  const getFichaTecnicaPorAuto = (slug) =>
    fetchFromApi(ENDPOINTS.fichaTecnicaPorAuto(slug))
  const getTestDrive = () => fetchFromApi(ENDPOINTS.testDrive)

  return {
    loading,
    error,
    getHomeSlider,
    getAutos,
    getVehiculos,
    getUsadosPremium,
    getUsadosPremiumAll,
    getPremiumBrands,
    getRepuestos,
    getPlanOvalo,
    getSliderVideos,
    getPosventaCarousel,
    getOportunidades,
    getNovedades,
    getModeloPorSlug,
    getCaracteristicasPorModelo,
    getFichaTecnicaPorAuto,
    getTestDrive
  }
}
