<template>
  <v-app-bar v-bind="appBarAttrs">
    <v-app-bar-title> Auction Appbar View </v-app-bar-title>
    <log-in-out />
  </v-app-bar>
</template>

<script setup>
import LogInOut from '@/components/LogInOut.vue';
import { ref } from 'vue';
const appBarAttrs = ref({
  density: 'comfortable',
  flat: true,
  border: true,
  color: 'appbar',
});
</script>

<style></style>
