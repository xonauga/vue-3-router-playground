/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { VDataTable } from 'vuetify/labs/VDataTable';
import {
  VApp,
  VAppBar,
  VAppBarTitle,
  VMain,
  VBtn,
  VContainer,
  VRow,
  VCol,
  VIcon,
  VCard,
  VChip,
} from 'vuetify/lib/components/index.mjs';

// Translations
import { de } from 'vuetify/locale';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: 'de',
    fallback: 'de',
    messages: { de },
  },
  components: {
    VApp,
    VAppBar,
    VAppBarTitle,
    VMain,
    VBtn,
    VContainer,
    VRow,
    VCol,
    VIcon,
    VCard,
    VChip,
    VDataTable,
  },
  theme: {
    themes: {
      light: {
        colors: {
          appbar: '#003c78',
          toolbar: '#003c78',
          card: '#003c78',
          button: '#003c78',
          loading: '#003c78',
          input: '#003c78',
          snackbar: '#003c78',
          footer: '#003c78',
          divider: '#003c78',
          text: '#003c78',
          landingcard: '#003c78',
          chip: '#003c78',
        },
      },
      dark: {
        colors: {
          appbar: '#212121',
          toolbar: '#424242',
          card: '#212121',
          button: '#7E57C2',
          loading: '#7E57C2',
          input: '#7E57C2',
          snackbar: '#212121',
          footer: '#212121',
          divider: '#616161',
          text: '#FFFFFF',
          landingcard: '#7E57C2',
          chip: '#7E57C2',
        },
      },
    },
  },
});
