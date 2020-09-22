
import React from "react";
import ImageProfile from './profile.jpg'
import './style.css'


   function MyProfilePhoto() {
    return (
                <div className="profileImg">
                  <img src={ImageProfile} alt="imageProfile" className="imageProfile" />
                </div>
            );
  }
  
  export default MyProfilePhoto;