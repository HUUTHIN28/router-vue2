<template>
  <div class="headerBlock">
    <div v-for="(value, index) in list" :key="index" class="check">
      <RouterLink
        v-if="status == value.path"
        :to="value.path"
        :style="{ backgroundColor: '#fff' }"
        class="itemNarBar"
      >
        {{ value.name }}
      </RouterLink>
      <RouterLink v-else :to="value.path" class="itemNarBar">
        {{ value.name }}
      </RouterLink>
    </div>

    <!-- <router-link to="/about/2">Go to About</router-link> -->
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { narBar } from "@/utils/constant";
const currentLocation = window.location.pathname;
export default {
  data: function () {
    return {
      list: narBar,
      status: currentLocation,
    };
  },
  watch: {
    currentLocation: function () {
      this.status = window.location.pathname;
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
  padding-left: 10px;
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 5px;
  font-weight: 500;
  color: #344767;
}
.check {
}
</style>
