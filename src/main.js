import { createApp } from 'vue'
import App from './App.vue'
import Routes from './router/index'

import Flare from "@lkmx/flare";
import FlareVue from "@lkmx/flare-vue";


const app = createApp(App)

app.use(Routes)
app.use(Flare)
app.use(FlareVue)
app.mount('#app')
