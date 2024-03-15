<template>
  <div class="containerLocation">
    <input
      class="searchLocation"
      v-on:keyup.enter="$emit('search', name)"
      v-model="name"
      type="text"
      placeholder="Search name location"
    />
    <ul class="drop"></ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {},
};
</script>
<style>
.searchLocation {
  color: inherit;
  padding: 12px 10px;
  width: 300px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border: none;
  outline: none;
}

ul {
  background: #fff;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 0;
  overflow: hidden;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.4s height;
}

ul li {
  font-size: 13px;
  padding: 10px 10px;
  list-style: none;
  border-top: 1px solid #ddd;
}

.match {
  font-weight: 600;
  color: green;
}
</style>
