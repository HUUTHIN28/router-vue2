import axiosInstance from "@/api/axiosBase";
import { URL } from "@/utils/constant";

const LocationRequest = {
  getLocation(filter) {
    const res = axiosInstance.get(URL.LOCATION, { filter });
    return res;
  },
};

export default LocationRequest;
