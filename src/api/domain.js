import axios from "axios";

const domain = axios.create({
  baseURL: "http://localhost:5000/",
});

export default domain;
