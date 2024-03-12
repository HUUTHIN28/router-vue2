<template>
  <div class="headerBlock">
    <div v-for="(value, index) in list" :key="index" class="check">
      <RouterLink :to="value.path" class="itemNarBar"
        >{{ value.name }}
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
    };
  },
  components: { RouterLink },
};
</script>
<style>
.headerBlock {
  display: flex;

  flex-direction: column;
  margin-top: 20px;
}
.itemNarBar {
  color: black;
  text-decoration: none;
  font-size: 16px;
  padding-left: 10px;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
}
.check {
  border-bottom: 1px solid gray;
}
</style>
