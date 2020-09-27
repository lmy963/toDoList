import Vue from 'vue'

import VueCompositionApi from '@vue/composition-api'
// import { Pagination, ElInput} from "element-ui"
import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import * as colors from './styles/colors'

Vue.use(VueCompositionApi)
Vue.use(ElementUI)

// Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false

Vue.prototype.colors = colors

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
