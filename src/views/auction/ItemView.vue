<template>
  <v-container>
    <v-row>
      <v-col class="text-text"> Auction Item View: </v-col>
    </v-row>
    <v-row>
      <v-col class="text-text">id: {{ id }}</v-col>
      <v-col class="text-text">item: {{ item }}</v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <back-button />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BackButton from '@/components/BackButton.vue';
const props = defineProps(['id', 'item']);
</script>
