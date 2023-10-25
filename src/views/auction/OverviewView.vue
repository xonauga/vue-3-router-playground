<template>
  <v-container>
    <v-row>
      <v-col class="text-text"> Auction Overview View: </v-col>
    </v-row>
    <v-row>
      <v-col class="text-text">id: {{ id }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn
          @click="onClickItem"
          variant="outlined"
          color="button"
          ><v-icon class="mr-1">mdi-eye-outline</v-icon>item</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['id']);
const router = useRouter();

const onClickItem = () => {
  router.push(`/auction/${props.id}/1234`);
};
</script>
