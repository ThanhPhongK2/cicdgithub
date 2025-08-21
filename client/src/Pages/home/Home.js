import React from "react";
import "./Home.css";
import ProfileSide from "../../Components/profileSide/ProfileSide";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-bg">
        {/* Blob gradient background */}
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
      </div>

      <div className="home-container">
        <aside className="home-sidebar card glass-card">
          <ProfileSide />
        </aside>

        <main className="home-feed card glass-card">
          <PostSide />
        </main>

        <aside className="home-rightbar card glass-card">
          <RightSide />
        </aside>
      </div>
    </div>
  );
};

export default Home;
