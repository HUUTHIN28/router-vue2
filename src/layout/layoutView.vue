<template>
  <main>
    <div class="layoutRoot">
      <div class="headerLayoutRoot">
        <div class="headerTop">
          <TravelIcon class="iconTopHeader" /> TAXUA TRAVEL
        </div>
        <HeaderView />
      </div>
      <div class="viewLayout">
        <router-view />
      </div>
    </div>
  </main>
</template>
<script>
import HeaderView from "./headerView.vue";
import TravelIcon from "@/assets/icon/travelIcon";
export default {
  components: { HeaderView, TravelIcon },
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
}
.headerTop {
  margin-left: 20px;
  border-bottom: 1px solid #dddddd;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
}
.viewLayout {
  width: 100%;
}
.iconTopHeader {
  margin-right: 4px;
  font-size: 35px;
}
</style>
