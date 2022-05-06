import { createApp } from 'vue'
import App from './App.vue'

import Flare from "@lkmx/flare";
import FlareVue from "@lkmx/flare-vue";


const app = createApp(App)

app.use(Flare)
app.use(FlareVue)
app.mount('#app')
