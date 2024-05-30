import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export default api;
