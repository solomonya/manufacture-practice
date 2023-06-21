import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import { VueQueryPlugin } from "@tanstack/vue-query";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import { router } from '@/router';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})

createApp(App)
  .use(router)
  .use(VueQueryPlugin)
  .use(vuetify)
  .mount('#app');
