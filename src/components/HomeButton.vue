<template>
  <v-btn
    @click="onClickHome"
    variant="plain"
    ><v-icon class="mr-1">mdi-chevron-left</v-icon>home</v-btn
  >
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const onClickHome = () => {
  router.push('/');
};
</script>
