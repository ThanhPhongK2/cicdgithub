import React, { useEffect, useState } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostAction";
import { useParams } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (user?._id) {
      dispatch(getTimelinePosts(user._id));
    }
  }, [dispatch, user?._id]);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    try {
      await axios.post("http://localhost:5000/posts", {
        userId: user._id,
        desc: newPost,
      });
      setNewPost("");
      dispatch(getTimelinePosts(user._id)); // load lại danh sách bài viết
    } catch (error) {
      console.error("Create post failed:", error);
    }
  };

  // lọc bài viết nếu đang ở trang profile/:id
  const displayedPosts = params.id
    ? posts.filter((post) => post.userId === params.id)
    : posts;

  return (
    <div className="Posts">
      {/* Form tạo post */}
      <form onSubmit={handleCreatePost} className="create-post-form">
        <input
          type="text"
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      {/* Danh sách post */}
      {loading ? (
        <p>Fetching Posts...</p>
      ) : displayedPosts.length > 0 ? (
        displayedPosts.map((post, index) => (
          <Post data={post} key={post._id || index} />
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default Posts;
