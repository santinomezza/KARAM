import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ModelosView from './views/ModelosView.vue'
import UsadosView from './views/UsadosView.vue'
import PosventaView from './views/PosventaView.vue'
import ContactoView from './views/ContactoView.vue'
import NotFoundView from './views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'KARAM | Ford Catamarca' } },
  { path: '/vehiculos', name: 'vehiculos', component: ModelosView, meta: { title: '0km | KARAM' } },
  { path: '/vehiculos/autos', name: 'autos', component: ModelosView, meta: { title: 'Autos 0km | KARAM' } },
  { path: '/vehiculos/p&s', name: 'pickups-suv', component: ModelosView, meta: { title: 'Pickups y SUVs 0km | KARAM' } },
  { path: '/vehiculos/utilitarios', name: 'utilitarios', component: ModelosView, meta: { title: 'Utilitarios 0km | KARAM' } },
  { path: '/modelos', name: 'modelos', component: ModelosView, meta: { title: 'Modelos 0km | KARAM' } },
  { path: '/modelo/:id', name: 'modelo', component: () => import('./views/ModeloView.vue'), meta: { title: 'Modelo | KARAM' } },
  { path: '/usados_premium', name: 'usados', component: UsadosView, meta: { title: 'Usados Premium | KARAM' } },
  { path: '/usados_premium/:slug', name: 'usado', component: () => import('./views/UsadoView.vue'), meta: { title: 'Usado | KARAM' } },
  { path: '/planovalo', name: 'planovalo', component: () => import('./views/PlanOvaloView.vue'), meta: { title: 'Plan Ovalo | KARAM' } },
  { path: '/planovalo/:slug', name: 'plan-ovalo-detalle', component: () => import('./views/PlanOvaloDetalleView.vue'), meta: { title: 'Plan Ovalo | KARAM' } },
  { path: '/posventa', name: 'posventa', component: PosventaView, meta: { title: 'Posventa | KARAM' } },
  { path: '/posventa/servicios', name: 'servicios', component: PosventaView, meta: { title: 'Service | KARAM' } },
  { path: '/posventa/repuestos_y_accesorios', name: 'repuestos', component: PosventaView, meta: { title: 'Repuestos y Accesorios | KARAM' } },
  { path: '/posventa/ford_protect', name: 'ford-protect', component: () => import('./views/FordProtectView.vue'), meta: { title: 'Ford Protect | KARAM' } },
  { path: '/test_drive', name: 'test-drive', component: () => import('./views/TestDriveView.vue'), meta: { title: 'Test Drive | KARAM' } },
  { path: '/flotas-y-ventas', name: 'flotas', component: () => import('./views/FlotasView.vue'), meta: { title: 'Flotas y Ventas Especiales | KARAM' } },
  { path: '/flotas-y-ventas/:slug', name: 'flota-detalle', component: () => import('./views/FlotaDetalleView.vue'), meta: { title: 'Flotas | KARAM' } },
  { path: '/nuestra_empresa', name: 'empresa', component: () => import('./views/EmpresaView.vue'), meta: { title: 'Empresa | KARAM' } },
  { path: '/preguntas-frecuentes', name: 'faq', component: () => import('./views/FAQView.vue'), meta: { title: 'FAQ | KARAM' } },
  { path: '/ford-assistance', name: 'ford-assistance', component: () => import('./views/FordAssistanceView.vue'), meta: { title: 'Ford Assistance | KARAM' } },
  { path: '/contacto', name: 'contacto', component: ContactoView, meta: { title: 'Contacto | KARAM' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: 'P&aacute;gina no encontrada | KARAM' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'KARAM'
})

const app = createApp(App)
app.use(router)
app.mount('#app')
