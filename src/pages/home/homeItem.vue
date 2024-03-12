<template>
  <div>
    <p>hữu thìn</p>
    <p>{{ text }}1</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: { text: String },
};
</script>
