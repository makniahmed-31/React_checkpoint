
import React, { Component } from "react";
import ImageProfile from './profile.jpg'
import './style.css'


class MyProfilePhoto extends Component{
    render() {
      return (
        <div className="profileImg">
          <img src={ImageProfile} width="322" height="322" alt="imageProfile" className="imageProfile" />
        </div>
      );
    }
  };
   export default MyProfilePhoto;