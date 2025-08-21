import React from "react";
import "./Home.css";
import ProfileSide from "../../Components/profileSide/ProfileSide";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      {/* Background gradient */}
      <div className="home-bg"></div>

      <div className="home-container">
        {/* Sidebar trái */}
        <aside className="home-sidebar">
          <ProfileSide />
        </aside>

        {/* Feed chính */}
        <main className="home-feed">
          <PostSide />
        </main>

        {/* Sidebar phải */}
        <aside className="home-rightbar">
          <RightSide />
        </aside>
      </div>
    </div>
  );
};

export default Home;
