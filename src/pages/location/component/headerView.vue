<template>
  <div class="itemLocationHeader">
    <div v-for="(value, index) in list" :key="index">
      <div class="headerItem">
        <b> {{ value.toUpperCase() }}</b>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      list: ["Name", "Address", "Distance", "Describe", "Status"],
    };
  },
};
</script>
<style>
.itemLocationHeader {
  display: grid;
  grid-template-columns: 25% 25% 10% 30% 10%;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #dddddd;
  color: #8392ab;
  padding-left: 10px;
}
.headerItem {
  display: flex;
  padding-left: 10px;
  font-weight: 600;
  font-size: 14px;
}
</style>
