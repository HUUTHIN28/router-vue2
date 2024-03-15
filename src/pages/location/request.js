import axiosInstance from "@/api/axiosBase";
import { URL } from "@/utils/constant";

const LocationRequest = {
  getLocation(params) {
    const res = axiosInstance.get(URL.LOCATION, { params });
    return res;
  },
  getDetail(id) {
    const res = axiosInstance.get(`${URL.LOCATION}/${id}`);
    return res;
  },
};

export default LocationRequest;
