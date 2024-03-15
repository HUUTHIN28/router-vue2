<template>
  <div>detail location {{ location.name }}</div>
</template>
<script>
import LocationRequest from "@/pages/location/request";

export default {
  data() {
    return {
      location: {},
    };
  },
  async created() {
    const res = await LocationRequest.getDetail(this.$route.params.id);
    this.location = res.data.data;
  },
};
</script>
<style></style>
