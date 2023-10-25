<template>
  <v-btn
    @click="onClick"
    variant="plain"
    ><v-icon class="mr-1">mdi-logout</v-icon>Logout</v-btn
  >
</template>

<script>
export default {
  name: 'LogoutButton',
  methods: {
    onClick() {
      this.$emit('click:logout');
    },
  },
};
</script>

<style></style>
