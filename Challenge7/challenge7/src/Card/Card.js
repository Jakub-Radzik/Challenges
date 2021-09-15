import React from 'react';
import './Card.sass';
import { Names } from '../Utils/Names';
import ProfileLink from './ProfileLink/ProfileLink';

const Card = ({ item, iconSet }) => {
  React.useEffect(() => {
    console.log(item);
  }, [item]);

  const { login, html_url, avatar_url } = item;

  return (
    <>
      {item && (
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
                item={item}
              />

              <ProfileLink
                icon={iconSet && iconSet.following}
                text={Names.FOLLOWING}
                item={item}
              />

              <ProfileLink
                icon={iconSet && iconSet.overview}
                text={Names.INFORMATION}
                item={item}
              />

              <ProfileLink
                icon={iconSet && iconSet.repo}
                text={Names.REPOSITORIES}
                item={item}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
