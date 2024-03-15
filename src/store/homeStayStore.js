import homeStayRequest from "@/pages/homeStay/request";
import { defineStore } from "pinia";

export const useHomeStay = defineStore({
  id: "homeStay",
  state: () => ({
    homeStays: [],
    total: 0,
  }),
  actions: {
    async getHomeStay(filter) {
      const res = await homeStayRequest.getHomeStay(filter);
      this.homeStays = res.data.data;
      this.total = res.data.total;
    },
  },
});
