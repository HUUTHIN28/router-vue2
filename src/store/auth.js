import Auth from "@/pages/auth/request";
import router from "@/router";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "authStore",
  state: () => ({
    useName: "",
    role: "",
  }),
  getters: {},
  actions: {
    async login({ email, password }) {
      const data = { email: email, password: password, role: "user" };
      console.log("data", data);
      Auth.login(data)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          router.push("/about");
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
});
