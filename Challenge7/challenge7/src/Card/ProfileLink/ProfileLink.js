import React, { useState } from 'react';
import './ProfileLink.sass';
import ModalView from '../../Modal/ModalView';
import { Names } from '../../Utils/Names';
import FollowerCard from '../../SearchResults/FollowerCard/FollowerCard';
import RepoCard from '../../SearchResults/RepoCard/RepoCard';
import InformationCard from '../../SearchResults/InformationCard/InformationCard';
import axios from 'axios';
import Loader from '../../Utils/Loader/Loader';

const generateNodes = (data, text) => {
  let elemList = [];
  let i = 1;
  switch (text) {
    case Names.FOLLOWERS:
      for (let elem of data) {
        elemList.push(
          <FollowerCard
            key={i++}
            login={elem.login}
            avatar_url={elem.avatar_url}
            html_url={elem.html_url}
          />
        );
      }
      break;
    case Names.FOLLOWING:
      for (let elem of data) {
        elemList.push(
          <FollowerCard
            key={i++}
            login={elem.login}
            avatar_url={elem.avatar_url}
            html_url={elem.html_url}
          />
        );
      }
      break;
    case Names.REPOSITORIES:
      for (let elem of data) {
        elemList.push(
          <RepoCard
            key={i++}
            name={elem.name}
            html_url={elem.html_url}
            description={elem.description}
            language={elem.language}
            license={elem.license}
          />
        );
      }
      break;
    case Names.INFORMATION:
      elemList.push(
        <InformationCard
          key={i++}
          avatar_url={data.avatar_url}
          company={data.company}
          bio={data.bio}
          created_at={data.created_at}
          email={data.email}
          followers={data.followers}
          following={data.following}
          html_url={data.html_url}
          public_repos={data.public_repos}
        />
      );
      break;
  }

  return elemList;
};

const getUrlFromItem = (item, text) => {
  switch (text) {
    case Names.FOLLOWERS:
      return item.followers_url;
    case Names.FOLLOWING:
      return item.following_url.slice(0, item.following_url.indexOf('{'));
    case Names.REPOSITORIES:
      return item.repos_url;
    case Names.INFORMATION:
      return item.url;
  }
};

const ProfileLink = ({ text, icon, item }) => {
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);
  const [elems, setElems] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item, text) => {
    setShow(true);
    setLoading(true);
    axios
      .get(getUrlFromItem(item, text), {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
        },
      })
      .then((r) => {
        console.dir(r);
        setLoading(false);
        setElems(generateNodes(r.data, text));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    console.dir(item);
  }, [item]);

  return (
    <>
      <ModalView
        handleClose={handleClose}
        show={show}
        title={text}
        owner={item.login}
      >
        {loading && <Loader />}
        {!loading && elems.length > 0 && elems.map((elem) => elem)}
        {!loading && elems.length === 0 && <h1>There is no results</h1>}
      </ModalView>
      <div className="ProfileLink" onClick={() => handleShow(item, text)}>
        <img src={icon} alt="icon" />
      </div>
    </>
  );
};
export default ProfileLink;
