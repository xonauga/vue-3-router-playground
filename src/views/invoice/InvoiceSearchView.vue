<template>
  <div>
    <div>Invoice Search View</div>
    <div style="margin-top: 20px">
      <button @click="onClickSearch">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickSearch() {
      this.$router.push('/invoice/2023-07BA0333');
    },
  },
};
</script>
