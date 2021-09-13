import React from 'react';
import './Card.sass';
import ProfileLink from './ProfileLink/ProfileLink';
import { Names } from '../Utils/Names';

export const UserContext = React.createContext({});

const Card = ({ item, iconSet }) => {
  React.useEffect(() => {
    // console.log(item);
    console.log(item.more.followers);
  }, [item]);

  return (
    <>
      {item && item.more && (
        <div className="Card">
          <div className="left">
            <img src={item.avatar_url} alt="alter" />
          </div>
          <div className="right">
            <div className="top">
              <a href={item.html_url}>
                <h1>{item.login}</h1>
              </a>
            </div>
            <div className="bottom">
              {item.more && (
                <ProfileLink
                  icon={iconSet && iconSet.followers}
                  text={Names.FOLLOWERS}
                  e={item.more}
                />
              )}

              {/*{item.more.following && (*/}
              {/*  <ProfileLink*/}
              {/*    icon={iconSet && iconSet.following}*/}
              {/*    text={Names.FOLLOWING}*/}
              {/*    owner={item.login}*/}
              {/*    nodes={item.more.following}*/}
              {/*  />*/}
              {/*)}*/}

              {/*{item && item.more && item.more.repo && (*/}
              {/*  <ProfileLink*/}
              {/*    icon={iconSet && iconSet.repo}*/}
              {/*    text={Names.REPOSITORIES}*/}
              {/*    owner={item.login}*/}
              {/*    nodes={item.more.repos}*/}
              {/*  />*/}
              {/*)}*/}

              {/*{item.more && (*/}
              {/*  <ProfileLink*/}
              {/*    icon={iconSet && iconSet.overview}*/}
              {/*    text={Names.INFORMATION}*/}
              {/*    owner={item.login}*/}
              {/*    nodes={item.more.overview}*/}
              {/*  />*/}
              {/*)}*/}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
