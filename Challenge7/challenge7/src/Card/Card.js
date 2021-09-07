import React from 'react';
import '../Styles/Card/Card.sass';
import ProfileLink from './ProfileLink/ProfileLink';
import { Names } from '../Utils/Names';
import followers from '../img/followers.svg';
import following from '../img/observation.svg';
import overview from '../img/file.svg';
import repo from '../img/folders.svg';

const Card = ({ item }) => {
  const {
    login,
    avatar_url,
    html_url,
    followers_url,
    following_url,
    repos_url,
    url,
  } = item;

  React.useEffect(() => {
    console.log(item);
  }, [item]);

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
            icon={followers}
            text={Names.FOLLOWERS}
            url={followers_url}
            owner={login}
          />
          <ProfileLink
            icon={following}
            text={Names.FOLLOWING}
            url={following_url.slice(0, following_url.indexOf('{'))}
            owner={login}
          />
          <ProfileLink
            icon={repo}
            text={Names.REPOSITORIES}
            url={repos_url}
            owner={login}
          />
          <ProfileLink
            icon={overview}
            text={Names.INFORMATION}
            url={url}
            owner={login}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
