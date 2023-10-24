<template>
  <div>
    <div>Login View</div>
    <div style="margin-top: 20px">
      <button
        v-if="cpLoggedIn"
        @click="onClickLogout"
      >
        Logout
      </button>
      <button
        v-else
        @click="onClickLogin"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  computed: {
    cpLoggedIn() {
      return this.$store.state.loggedIn;
    },
  },
  methods: {
    onClickLogin() {
      this.$store.dispatch('login');
    },
    onClickLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
