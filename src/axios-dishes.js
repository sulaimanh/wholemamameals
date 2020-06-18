import axios from "axios";

const instance = axios.create({
  baseURL: "https://wholemamameals.firebaseio.com/"
});

export default instance;
