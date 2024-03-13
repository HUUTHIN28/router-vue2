<template>
  <div>
    <h1>Location</h1>
    <div>filter</div>
    <div>
      <div>list location</div>
      <div v-for="value in locationStore.locationList" :key="value.id">
        <itemLocation :data="value"> </itemLocation>
      </div>
    </div>
    <div>pagination</div>
  </div>
</template>

<script>
import { useLocationStore } from "../../store/locationStore";
import itemLocation from "./component/ItemLocation.vue";
export default {
  data: function () {
    return {
      listLocation: [],
      filter: {},
    };
  },
  created() {
    this.locationStore.getLocation(this.filter);
  },
  watch: {
    filter: function () {
      this.locationStore.getLocation(this.filter);
    },
  },
  setup() {
    const locationStore = useLocationStore();
    return { locationStore };
  },
  components: { itemLocation },
};
</script>
