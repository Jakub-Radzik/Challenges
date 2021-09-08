import React from 'react';
import './Card.sass';
import ProfileLink from './ProfileLink/ProfileLink';
import { Names } from '../Utils/Names';

const Card = ({ item, iconSet }) => {
  const {
    login,
    avatar_url,
    html_url,
    followers_url,
    following_url,
    repos_url,
    url,
  } = item;
  return (
    <div className="Card">
      <div className="left">
        <img src={avatar_url} alt="alter" />
      </div>
      <div className="right">
        <div className="top">
          <a href={html_url}>
            <h1>{login}</h1>
          </a>
        </div>
        <div className="bottom">
          <ProfileLink
            icon={iconSet && iconSet.followers}
            text={Names.FOLLOWERS}
            url={followers_url}
            owner={login}
            content={item.more.followers}
          />
          <ProfileLink
            icon={iconSet && iconSet.following}
            text={Names.FOLLOWING}
            url={following_url.slice(0, following_url.indexOf('{'))}
            owner={login}
            content={item.more.following}
          />
          <ProfileLink
            icon={iconSet && iconSet.repo}
            text={Names.REPOSITORIES}
            url={repos_url}
            owner={login}
            content={item.more.repos}
          />
          <ProfileLink
            icon={iconSet && iconSet.overview}
            text={Names.INFORMATION}
            url={url}
            owner={login}
            content={item.more.overview}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
