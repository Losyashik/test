import axios from "axios";

const instece = axios.create({
  baseURL: "api/",
});

export default instece;
