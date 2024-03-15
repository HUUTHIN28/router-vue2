<template>
  <div class="blockFilterHome">
    <div>
      <b>{{ name }}</b>
    </div>
    <div v-for="value in list" :key="value" class="listFilterHome">
      <div>
        <input type="checkbox" class="inputFilterHome" />
      </div>
      <span class="titleFilterHome">{{ value.name }} </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    list: [
      {
        name: String,
        code: String,
      },
    ],
  },
  data() {
    return {};
  },
  component: {},
};
</script>
<style>
.blockFilterHome {
  border: 1px solid #dddddd;
  border-top: none;
  padding: 15px;
}
.inputFilterHome {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-color: gray;
}
.titleFilterHome {
  font-weight: 400;
  font-size: 14px;
}
.listFilterHome {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
}
</style>
