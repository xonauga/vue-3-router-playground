<template>
  <login-button
    v-if="!cpLoggedIn"
    @click:login="onClickLogin"
  />
  <logout-button
    v-else
    @click:logout="onClickLogout"
  />
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';
import LogoutButton from '@/components/LogoutButton.vue';

export default {
  name: 'LogInOut',
  components: {
    LoginButton,
    LogoutButton,
  },
  methods: {
    onClickLogin() {
      this.$store.dispatch('login');
      this.$router.push('/');
    },
    onClickLogout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
  computed: {
    cpLoggedIn() {
      return this.$store.state.loggedIn;
    },
  },
};
</script>

<style></style>
