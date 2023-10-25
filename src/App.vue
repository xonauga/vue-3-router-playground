<template>
  <v-app>
    <router-view name="appbar"></router-view>
    <v-main>
      <v-container v-if="cpLoginRoute">
        <v-row>
          <v-col class="d-flex justify-center">
            <div>
              <router-link-ext
                v-for="(item, index) in mainRoutes"
                :key="index"
                :item="item"
                :no-divider="index === mainRoutes.length - 1"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import RouterLinkExt from '@/components/RouterLinkExt.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const mainRoutes = ref([
  { title: 'Home', to: '/' },
  { title: 'Invoice', to: '/invoice' },
  { title: 'Auction', to: '/auction' },
]);

const cpLoginRoute = computed(() => {
  return route.name !== 'login';
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
