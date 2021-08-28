import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export default {
  getItems: (url) => {
    let response = axiosInstance.get(url || "");

    return response;
  },
};
