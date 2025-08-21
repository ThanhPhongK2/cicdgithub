import React, { useEffect } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (user?._id) {
      dispatch(getTimelinePosts(user._id));
    }
  }, [dispatch, user?._id]);

  // lọc bài viết nếu đang ở trang profile/:id
  const displayedPosts = params.id
    ? posts.filter((post) => post.userId === params.id)
    : posts;

  return (
    <div className="Posts">
      {loading ? (
        <p>Fetching Posts...</p>
      ) : displayedPosts.length > 0 ? (
        displayedPosts.map((post) => (
          <Post data={post} key={post._id} />
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default Posts;
