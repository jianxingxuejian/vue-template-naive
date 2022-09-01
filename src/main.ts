import { createApp } from 'vue'
import { setupStore } from './stores'
import { setupRouter } from './router'

import App from './App.vue'

import 'uno.css'
import './styles/css/index.css'

async function setupApp() {
  const app = createApp(App)
  setupStore(app)
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
