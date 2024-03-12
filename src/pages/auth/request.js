import axiosInstance from "@/api/axiosBase";
import { URL } from "@/utils/constant";

const Auth = {
  login(data) {
    const request = axiosInstance.post(URL.LOGIN, data);
    return request;
  },
};
export default Auth;
