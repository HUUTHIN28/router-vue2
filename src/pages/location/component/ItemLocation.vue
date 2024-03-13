<template>
  <div class="itemLocation">
    <div><img :src="data.image" class="image" /></div>
    <div class="name">
      <b>{{ data.name }} </b>
    </div>
    <div>{{ data.address }}</div>
    <div>{{ data.distance }}</div>
    <div class="describe">{{ data.describe }}</div>
    <div>
      <div v-if="data.status == 'Open'" v-bind:style="{ color: '#DD0000' }">
        {{ data.status }}
      </div>
      <p v-else v-bind:style="{ color: '#00FF00' }">{{ data.status }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  data: function () {
    return {
      status: "",
    };
  },
};
</script>
<style>
.itemLocation {
  display: grid;
  grid-template-columns: 5% 20% 30% 5% 30% 10%;
  gap: 10px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  color: #8392ab;
}
.image {
  height: 40px;
  width: 40px;
  border-radius: 8px;
}
.describe {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng bạn muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.name {
  color: black;
}
</style>
