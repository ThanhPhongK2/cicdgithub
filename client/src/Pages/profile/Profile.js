import React from "react";
import "./Profile.css";
import ProfilePageLeft from "../../Components/ProfilePageLeft/ProfilePageLeft";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

// Nếu sau này muốn dùng ảnh thật thì import lại ở đây:
// import coverImage from "../../img/cover.jpg";
// import defaultAvatar from "../../img/profileImg.jpg";

const Profile = () => {
  return (
    <div className="Profile">
      {/* Background cover */}
      <div
        className="profile-cover"
        // Nếu có ảnh cover: `url(${coverImage}) center/cover no-repeat`
        style={{ background: "#ccc" }}
      >
        <div className="profile-gradient"></div>
        <div className="profile-avatar-wrapper">
          <img
            // Nếu có avatar: src={defaultAvatar}
            src="https://via.placeholder.com/150"
            alt="Profile Avatar"
            className="profile-avatar"
          />
        </div>
      </div>

      <div className="ProfilePage-Wrapper">
        {/* Sidebar trái */}
        <aside className="profile-left">
          <ProfilePageLeft />
        </aside>

        {/* Content chính */}
        <main className="profile-center">
          <ProfileCard location="profilePage" />
          <PostSide />
        </main>

        {/* Sidebar phải */}
        <aside className="profile-right">
          <RightSide />
        </aside>
      </div>
    </div>
  );
};

export default Profile;
