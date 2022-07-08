import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
import Button from './button'

// 使用全量导出
// import SnowUI from '../build/lucky-snow-ui.es.js'
import SnowUI from '../build/'

// createApp(App).use(Button).mount('#app')
createApp(App).use(SnowUI).mount('#app')
