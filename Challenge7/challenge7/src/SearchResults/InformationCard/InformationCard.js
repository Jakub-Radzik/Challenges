import React, { Component } from 'react';
import './InformationCard.sass';

const InformationCard = ({
  avatar_url,
  bio,
  company,
  created_at,
  email,
  followers,
  following,
  html_url,
  public_repos,
}) => {
  return (
    <div className="InformationCard">
      <img src={avatar_url} alt="avatar url" />
      <div>{bio}</div>
      <div>{company}</div>
      <div>{created_at}</div>
      <div>{email}</div>
      <div>Followers: {followers}</div>
      <div>Following: {following}</div>
      <a href={html_url}>Go to profile</a>
      <div>Public repos:{public_repos}</div>
    </div>
  );
};

export default InformationCard;
