import React, { Component } from 'react';

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
      <div>{followers}</div>
      <div>{following}</div>
      <div>{html_url}</div>
      <div>{public_repos}</div>
    </div>
  );
};

export default InformationCard;
