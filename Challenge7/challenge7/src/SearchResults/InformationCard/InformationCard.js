import React, { Component } from 'react';
import './InformationCard.sass';
import ButtonCustom from '../../Utils/Logout/ButtonCustom';

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
      <div className={'info'}>
        <div>{bio && 'Bio: ' + bio}</div>
        <div>{company && 'Company: ' + company}</div>
        <div>Account created at:</div>
        <div>
          <strong>
            {created_at.slice(8, 10) +
              '-' +
              created_at.slice(5, 7) +
              '-' +
              created_at.slice(0, 4) +
              ' ' +
              created_at.slice(11, 19)}
          </strong>
        </div>
        <div>{email && 'Email: ' + email}</div>
        <div>
          <div>
            Followers: <strong>{followers}</strong>
          </div>
          <div>
            Following: <strong>{following}</strong>
          </div>
          <div>
            Public repos: <strong>{public_repos}</strong>
          </div>
        </div>
        <a href={html_url}>
          <ButtonCustom title={'Go to profile'} />
        </a>
      </div>
    </div>
  );
};

export default InformationCard;
