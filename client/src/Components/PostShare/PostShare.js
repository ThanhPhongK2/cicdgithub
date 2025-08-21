import React, { useState, useRef } from "react";
import "./PostShare.css";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const reset = () => {
    setImage(null);
    if (desc.current) desc.current.value = "";
    if (imageRef.current) imageRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!desc.current.value.trim() && !image) {
      return; // không cho đăng bài rỗng
    }

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      if (image) {
        const data = new FormData();
        const filename = Date.now() + image.name;
        data.append("name", filename);
        data.append("file", image);

        newPost.image = filename;

        await dispatch(uploadImage(data));
      }

      await dispatch(uploadPost(newPost));
      reset();
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />

      <form className="postForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a caption..."
          required
          ref={desc}
        />

        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <PhotoOutlinedIcon />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <PlayCircleOutlineIcon />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <LocationOnOutlinedIcon />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <CalendarMonthOutlinedIcon />
            Schedule
          </div>

          <button
            type="submit"
            className="button ps-button"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <CloseOutlinedIcon onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </form>
    </div>
  );
};

export default PostShare;
