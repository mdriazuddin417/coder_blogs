import domain from "../../api/domain";
import { updateBlog } from "../action/blogAction";

const updateBlogData = (blog, _id) => {
  return async (dispatch, getState) => {
    const res = await domain.patch(`product/${_id}`, { blog });
    if (res?.data.acknowledged) {
      dispatch(updateBlog());
    }
  };
};

export default updateBlogData;
