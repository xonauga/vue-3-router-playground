<template>
  <v-container>
    <v-row>
      <v-col class="text-text"> Invoice Search View: </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn
          @click="onClickSearch"
          variant="outlined"
          color="button"
          ><v-icon class="mr-1">mdi-magnify</v-icon>search</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onClickSearch = () => {
  router.push('/invoice/2023-07BA0333');
};
</script>
