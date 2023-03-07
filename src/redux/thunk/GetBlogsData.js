import domain from "../../api/domain";
import { getBlog } from "../action/blogAction";

const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await domain.get("products");
    if (res?.data) {
      dispatch(getBlog(res.data.data));
    }
  };
};

export default getBlogsData;
