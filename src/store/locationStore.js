import LocationRequest from "@/pages/location/request";
import { defineStore } from "pinia";

export const useLocationStore = defineStore({
  id: "locationState",
  state: () => ({
    locationList: [],
    total: 0,
  }),
  getters: {},
  actions: {
    async getLocation(filter) {
      try {
        const res = await LocationRequest.getLocation(filter);
        this.locationList = res.data.data;
        this.total = res.data.total;
      } catch (error) {
        throw false;
      }
    },
  },
});
