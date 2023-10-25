/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
// import { loadFonts } from "./webfontloader";
import vuetify from './vuetify';
import vuex from '../store';
// import pinia from '../store_pinia';
import router from '../router';

export function registerPlugins(app) {
  // loadFonts();
  app.use(vuetify).use(router).use(vuex);
}
