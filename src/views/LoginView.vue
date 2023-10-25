<template>
  <v-container>
    <v-row class="mt-16 justify-center">
      <v-col cols="10">
        <v-card color="card">
          <v-container class="text-center">
            <v-row>
              <v-col>
                <div class="mb-12">Login View</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <home-button />
              </v-col>
              <v-col>
                <log-in-out />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LogInOut from '@/components/LogInOut.vue';
import HomeButton from '@/components/HomeButton.vue';
</script>
