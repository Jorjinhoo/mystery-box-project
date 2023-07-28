import React from "react";

import "./styles/profile-card.css";

const ProfileCard = (props) => {
  return(
    <div className="account-container" id="profile-card-container">
        <div className="profile-title">
          <h1>YOUR PROFILE</h1>
        </div>
        <div className="profile-card">
          <div className="profile-card__info">
            <img src={props.accountLogo} alt="" className="profile-card-info__img" />
            <div>
              <h2 className="profile-card-info__name">TestUser123</h2>
              <h4 className="profile-card-info__statistics">Cases opened: {props.casesOpened}</h4>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileCard;