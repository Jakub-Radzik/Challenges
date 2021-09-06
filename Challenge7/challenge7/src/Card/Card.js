import React from 'react';
import '../Styles/Card/Card.sass';
import ProfileLink from './ProfileLink/ProfileLink';

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

  // React.useEffect(() => {
  //   console.log(item);
  // }, [item]);

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
          <ProfileLink text={'Followers'} url={followers_url} />
          <ProfileLink text={'Following'} url={following_url} />
          <ProfileLink text={'Repositories'} url={repos_url} />
          <ProfileLink text={'More Information'} url={url} />
        </div>
      </div>
    </div>
  );
};

export default Card;
