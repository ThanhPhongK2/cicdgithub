import React from "react";
import "./Profile.css";
import ProfilePageLeft from "../../Components/ProfilePageLeft/ProfilePageLeft";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

// Import ảnh từ src/Img (chữ I hoa)
import coverImage from "../../img/cover.jpg";
import defaultAvatar from "../../img/profileImg.jpg";

const Profile = () => {
  return (
    <div className="Profile">
      {/* Background cover */}
      <div
        className="profile-cover"
        style={{ background: `url(${coverImage}) center/cover no-repeat` }}
      >
        <div className="profile-gradient"></div>
        <div className="profile-avatar-wrapper">
          <img
            src={defaultAvatar}
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
