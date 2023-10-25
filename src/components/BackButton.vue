<template>
  <v-btn
    @click="onClickBack"
    variant="outlined"
    color="button"
    ><v-icon class="mr-1">mdi-chevron-left</v-icon>BACK</v-btn
  >
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const onClickBack = () => {
  router.go(-1);
};
</script>
