import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Đăng bài mới
export const createPost = (newPost) => API.post("/post", newPost);

// Lấy timeline
export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);

// Like / Dislike
export const likePost = (id, userId) => API.put(`/post/${id}/like_dislike`, { userId });
