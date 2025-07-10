import { createApp } from 'vue'
import TokenDemo from './components/TokenDemo.vue'

const app = createApp({
  components: {
    TokenDemo
  },
  template: '<TokenDemo />'
})

app.mount('#token-app') 