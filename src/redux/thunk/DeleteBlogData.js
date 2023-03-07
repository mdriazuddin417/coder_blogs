import domain from "../../api/domain";
import { deleteBlog } from "../action/blogAction";

const deleteBlogData = (_id) => {
  return async (dispatch, getState) => {
    const res = await domain.delete(`product/${_id}`);
    if (res?.data.acknowledged) {
      dispatch(deleteBlog(_id));
    }
  };
};

export default deleteBlogData;
