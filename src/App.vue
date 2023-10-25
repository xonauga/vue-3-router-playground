<template>
  <v-app>
    <router-view name="appbar"></router-view>
    <v-main>
      <nav v-if="cpLoginRoute">
        <v-container>
          <v-row>
            <v-col class="d-flex justify-center">
              <div>
                <router-link to="/">Home</router-link> |
                <router-link to="/invoice">Invoice</router-link> |
                <router-link to="/auction">Auction</router-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </nav>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

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

nav a {
  color: rgb(0, 60, 120);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(0, 60, 120);
  font-weight: bold;
}
</style>
