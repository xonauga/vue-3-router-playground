<template>
  <v-btn
    @click="onClick"
    variant="plain"
    ><v-icon class="mr-1">mdi-login</v-icon>login</v-btn
  >
</template>

<script>
export default {
  name: 'LoginButton',
  methods: {
    onClick() {
      this.$emit('click:login');
    },
  },
};
</script>

<style></style>
