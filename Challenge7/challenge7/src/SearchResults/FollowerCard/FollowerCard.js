import React from 'react';
import './FollowerCard.sass';

const FollowerCard = ({ login, avatar_url, html_url }) => {
  return (
    <a href={html_url}>
      <div className="FollowerCard">
        <img src={avatar_url} alt="follower avatar" />
        <h1>{login}</h1>
      </div>
    </a>
  );
};

export default FollowerCard;
