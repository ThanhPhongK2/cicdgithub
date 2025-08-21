import * as PostApi from "../api/PostRequest";

export const uploadPost = (postData) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const { data } = await PostApi.createPost(postData);
    dispatch({ type: "UPLOAD_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
