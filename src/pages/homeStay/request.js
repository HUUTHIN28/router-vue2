import axiosInstance from "@/api/axiosBase";
import { URL } from "@/utils/constant";

const homeStayRequest = {
  getHomeStay(params) {
    const res = axiosInstance.get(URL.HOMES, { params });
    return res;
  },
  detailHomeStay(id) {
    const res = axiosInstance.get(`${URL.HOMES}/${id}`);
    return res;
  },
};
export default homeStayRequest;
