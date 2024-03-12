<template>
  <main>
    <div class="layoutRoot">
      <div class="headerRoot"><HeaderView /></div>
      <router-view />
    </div>
  </main>
</template>
<script>
import HeaderView from "./headerView.vue";
export default {
  components: { HeaderView },
};
</script>
<style>
.layoutRoot {
  display: flex;
  gap: 20px;
}
.headerRoot {
  width: 200px;
  height: 100vh;
  background-color: #cccccc;
}
</style>
