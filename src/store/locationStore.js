import LocationRequest from "@/pages/home/request";
import { defineStore } from "pinia";

export const useLocationStore = defineStore({
  id: "locationState",
  state: () => ({
    locationList: [],
  }),
  getters: {},
  actions: {
    async getLocation(filter) {
      try {
        const res = await LocationRequest.getLocation(filter);
        this.locationList = res.data.data;
      } catch (error) {
        throw false;
      }
    },
  },
});
