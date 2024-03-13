<template>
  <main>
    <div class="layoutRoot">
      <div class="headerLayoutRoot"><HeaderView /></div>
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
  background-color: #e9ecef;
}
.headerLayoutRoot {
  min-width: 300px;
  height: 100vh;
  background-color: #cccccc;
}
</style>
