<template>
  <div>
    <h1 class="titleHome">HomeStay</h1>
    <div class="searchHomeStay">
      <searchView v-on:search="searchHomeStay" />
    </div>
    <div>
      <div class="blockHomeStay">
        <div class="containerHomeStay">
          <div class="filterHomeStay">
            <div class="titleFilter">Chọn lọc theo :</div>
            <div v-for="(value, index) in list" :key="index">
              <itemFilter :name="value.name" :list="value.list" />
            </div>
          </div>
          <div class="ListHomeStay">
            <div class="titleHomeStay">List HomeStay</div>
            <div class="listHomeItem">
              <div v-for="value in homeStayStore.homeStays" :key="value.id">
                <itemHome :data="value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchView from "./component/searchView.vue";
import { useHomeStay } from "../../store/homeStayStore";
import itemFilter from "./component/itemFilter.vue";
import { listFilterHomeStay } from "@/utils/constant";
import itemHome from "./component/itemHome.vue";
export default {
  data() {
    return {
      list: listFilterHomeStay,
      listLocation: [],
      filter: {
        limit: 10,
        page: 0,
      },
    };
  },
  created() {
    this.homeStayStore.getHomeStay(this.filter);
  },
  watch: {
    filter() {
      this.homeStayStore.getHomeStay(this.filter);
    },
  },
  methods: {
    searchHomeStay: function (name) {
      this.filter = { ...this.filter, name: name };
    },
  },

  setup() {
    const homeStayStore = useHomeStay();
    return { homeStayStore };
  },
  components: { searchView, itemFilter, itemHome },
};
</script>
<style>
.searchHomeStay {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.titleLocation {
  margin-bottom: 0px;
}
.blockHomeStay {
  background-color: #fff;
  padding-left: 10px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 10px;
}
.titleHomeStay {
  font-size: 22px;
  font-weight: 600;
  margin: 10px;
  margin-left: 20px;
  color: #8392ab;
}
.containerHomeStay {
  display: flex;
  gap: 20px;
}
.filterHomeStay {
  width: 300px;
}
.ListHomeStay {
  width: 100%;
}
.titleFilter {
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #dddddd;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  padding-left: 10px;
}
.listHomeItem {
  margin-left: 20px;
}
</style>
