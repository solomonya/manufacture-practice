import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import { VueQueryPlugin } from "@tanstack/vue-query";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import { router } from '@/router';

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(vuetify)
  .mount('#app');
