<template>
  <div>
    <div>Invoice Overview View</div>
    <div>
      <pre>
        {{ $props }}
      </pre>
    </div>
    <div style="margin-top: 20px">
      <button @click="onClickBom">BoM</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    onClickBom() {
      this.$router.push('/invoice/2023-07BA0333/bom');
    },
  },
};
</script>
