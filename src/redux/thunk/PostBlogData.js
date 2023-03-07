import domain from "../../api/domain";
import { postBlog } from "../action/blogAction";

const postBlogsData = (blog) => {
  return async (dispatch, getState) => {
    const res = await domain.post("product", { ...blog });
    if (res?.data.acknowledged) {
      dispatch(
        postBlog({
          _id: res?.data.insertedId,
          ...blog,
        }),
      );
    }
  };
};

export default postBlogsData;
