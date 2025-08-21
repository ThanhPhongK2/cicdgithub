import React, { useEffect, useState } from 'react'
import './Posts.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getTimelinePosts } from '../../actions/PostAction';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  let { posts, loading } = useSelector((state) => state.postReducer)

  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (user?._id) {
      dispatch(getTimelinePosts(user._id))
    }
  }, [dispatch, user?._id])

  if (params.id) {
    posts = posts.filter((post) => post.userId === params.id)
  }

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    try {
      const { data } = await axios.post("http://localhost:5000/posts", {
        userId: user._id,
        desc: newPost
      });
      setNewPost("");
      dispatch(getTimelinePosts(user._id)); // load lại bài viết
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Posts'>
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
      {loading ? "Fetching Posts..." :
        posts.map((post, id) => {
          return <Post data={post} id={id} key={id} />
        })}
    </div>
  )
}

export default Posts
