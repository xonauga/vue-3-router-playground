<template>
  <div>
    <div>Invoice Bom View</div>
    <div>
      <pre>
        {{ $props }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
};
</script>
