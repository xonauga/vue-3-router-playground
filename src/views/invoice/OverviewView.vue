<template>
  <v-container>
    <v-row>
      <v-col class="text-text"> Invoice Overview View: </v-col>
    </v-row>
    <v-row>
      <v-col class="text-text">id: {{ id }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn
          @click="onClickBom"
          variant="outlined"
          color="button"
          ><v-icon class="mr-1">mdi-eye-outline</v-icon>bom</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['id']);
const router = useRouter();

const onClickBom = () => {
  router.push(`/invoice/${props.id}/bom`);
};
</script>
