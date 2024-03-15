<template>
  <div class="headerBlock">
    <div v-for="(value, index) in list" :key="index" class="check">
      <RouterLink
        v-if="status == value.path"
        :to="value.path"
        :style="{
          backgroundColor: '#fff',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }"
        class="itemNarBar"
      >
        <div
          class="icon"
          :style="{
            backgroundColor: '#82d616',
            color: '#fff',
          }"
        >
          <component :is="value.icon"></component>
        </div>
        <b> {{ value.name }} </b>
      </RouterLink>
      <RouterLink v-else :to="value.path" class="itemNarBar">
        <div class="icon"><component :is="value.icon"></component></div>
        {{ value.name }}
      </RouterLink>
    </div>
    <!-- <router-link to="/about/2">Go to About</router-link> -->
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { narBar } from "@/utils/constant";
export default {
  data: function () {
    return {
      list: narBar,
      status: window.location.pathname,
    };
  },
  watch: {
    $route() {
      this.status = this.$route.path;
    },
  },
  components: { RouterLink },
};
</script>
<style>
.headerBlock {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.itemNarBar {
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding-left: 13px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  font-weight: 200;
  color: #344767;
}
.icon {
  background-color: #fff;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>
