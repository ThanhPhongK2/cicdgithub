import React from "react";
import "./Home.css";
import ProfileSide from "../../Components/profileSide/ProfileSide";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-bg" />

      <div className="home-container">
        <aside className="home-sidebar card">
          <ProfileSide />
        </aside>

        <main className="home-feed card">
          <PostSide />
        </main>

        <aside className="home-rightbar card">
          <RightSide />
        </aside>
      </div>
    </div>
  );
};

export default Home;
