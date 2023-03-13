import axios from "axios";

const domain = axios.create({
  baseURL: "https://coder-blog.up.railway.app/",
});

export default domain;
