import axios from "axios";
import { getBlog } from "../action/blogAction";

const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("http://localhost:5000/products");
    if (res?.data) {
      dispatch(getBlog(res.data.data));
    }
  };
};

export default getBlogsData;
