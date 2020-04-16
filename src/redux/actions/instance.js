import axios from "axios";

const instance = axios.create({
  baseURL: "https://petra-drf.herokuapp.com/",
});

export default instance;
