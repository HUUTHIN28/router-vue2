<template>
  <div>
    <h1 class="titleLocation">Location</h1>
    <div class="filterLocation">
      <filterView v-on:search="searchLocation" />
    </div>
    <div>
      <div class="blockList">
        <div class="titleListLocation">List Location</div>
        <headerView />
        <div
          v-for="value in locationStore.locationList"
          :key="value.id"
          v-on:click="detailLocation(value.id)"
        >
          <itemLocation :data="value"> </itemLocation>
        </div>
      </div>
    </div>
    <div>
      <paginationView
        v-on:change="changePagination"
        :page="filter.page"
        :total="locationStore.total"
        :listPage="Math.floor(locationStore.total / filter.limit)"
      />
    </div>
  </div>
</template>

<script>
import { useLocationStore } from "../../store/locationStore";
import itemLocation from "./component/ItemLocation.vue";
import headerView from "./component/headerView.vue";
import filterView from "./component/filterView.vue";
import paginationView from "@/components/paginationView.vue";
import router from "@/router";
export default {
  data() {
    return {
      listLocation: [],
      filter: {
        limit: 10,
        page: 0,
      },
    };
  },
  created() {
    this.locationStore.getLocation(this.filter);
  },
  watch: {
    filter() {
      console.log("filter", this.filter);
      this.locationStore.getLocation(this.filter);
    },
  },
  methods: {
    searchLocation: function (name) {
      this.filter = { ...this.filter, name: name };
    },
    changePagination(page) {
      console.log("page", page);
      this.filter = { ...this.filter, page: page };
    },
    detailLocation(id) {
      router.push(`/location/${id}`);
    },
  },
  setup() {
    const locationStore = useLocationStore();
    return { locationStore };
  },
  components: { itemLocation, headerView, filterView, paginationView },
};
</script>
<style>
.blockList {
  background-color: #fff;
  padding-left: 10px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 10px;
}
.titleListLocation {
  font-size: 22px;
  font-weight: 600;
  margin: 10px;
  margin-left: 20px;
  color: #8392ab;
}
.filterLocation {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.titleLocation {
  margin-bottom: 0px;
}
</style>
