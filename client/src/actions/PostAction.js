// client/src/actions/PostAction.js
import * as PostApi from "../api/PostRequest";

// Lấy timeline post
export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETRIEVING_SUCCESS", data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETRIEVING_FAIL" });
  }
};

// Upload bài post mới
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
