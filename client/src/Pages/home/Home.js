import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/profileSide/ProfileSide'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'

const Home = () => {
  return (
    <div className="Home">
      <div className="home-container">
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </div>
  )
}

export default Home
