import React from "react";
import "./Profile.css";
import ProfilePageLeft from "../../Components/ProfilePageLeft/ProfilePageLeft";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

const Profile = () => {
  return (
    <div className="Profile">
      {/* Cover */}
      <div className="profile-cover">
        <div className="profile-gradient"></div>
        <div className="profile-avatar-wrapper">
          <img
            src="/images/profileImg.jpg"
            alt="Profile Avatar"
            className="profile-avatar"
          />
        </div>
      </div>

      <div className="ProfilePage-Wrapper">
        <aside className="profile-left card">
          <ProfilePageLeft />
        </aside>
        <main className="profile-center card">
          <ProfileCard location="profilePage" />
          <PostSide />
        </main>
        <aside className="profile-right card">
          <RightSide />
        </aside>
      </div>
    </div>
  );
};

export default Profile;
