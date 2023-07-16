import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b29e2edb6d2143e893e0af95df1b9f86",
  },
});
