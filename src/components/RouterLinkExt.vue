<template>
  <router-link
    class="nav-link text-text"
    :to="item.to"
    >{{ item.title }}</router-link
  >
  <span
    v-if="!noDivider"
    class="mx-2"
    >|</span
  >
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  noDivider: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  user-select: none;
}
.nav-link.router-link-active {
  font-weight: bold;
}
</style>
