import VvipParkingSim from './VvipParkingSim.vue'

export { VvipParkingSim }
export * as vvipMapData from './mapData.js'

// Opsional: app.use(VvipParkingPlugin) → <VvipParkingSim /> tersedia global
export default {
  install(app) {
    app.component('VvipParkingSim', VvipParkingSim)
  },
}
