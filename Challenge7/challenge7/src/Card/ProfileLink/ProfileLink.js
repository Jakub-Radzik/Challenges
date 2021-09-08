import React, { useState } from 'react';
import './ProfileLink.sass';
import ModalView from '../../Modal/ModalView';
import axios from 'axios';
import { Names } from '../../Utils/Names';
import FollowerCard from '../../SearchResults/FollowerCard/FollowerCard';
import RepoCard from '../../SearchResults/RepoCard/RepoCard';
import InformationCard from '../../SearchResults/InformationCard/InformationCard';

const generateNodes = (data, text) => {
  // console.log(data);
  let elemList = [];
  let i = 1;
  switch (text) {
    case Names.FOLLOWERS:
      for (let elem of data.data) {
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
      for (let elem of data.data) {
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
      for (let elem of data.data) {
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
          key={1}
          avatar_url={data.data.avatar_url}
          company={data.data.company}
          bio={data.data.bio}
          created_at={data.data.created_at}
          email={data.data.email}
          followers={data.data.followers}
          following={data.data.following}
          html_url={data.data.html_url}
          public_repos={data.data.public_repos}
        />
      );
      break;
  }

  return elemList;
};

const ProfileLink = ({ text, url, owner, icon, content }) => {
  const [show, setShow] = useState(false);
  const [elems, setElems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    // console.log(url);
    axios
      .get(url)
      .then((result) => generateNodes(result, text))
      .then((nodes) => {
        // console.log(nodes);
        setElems(nodes);
      })
      .then(() => setShow(true));
  };

  return (
    <>
      <ModalView
        handleClose={handleClose}
        show={show}
        title={text}
        owner={owner}
      >
        {elems.length > 0 && elems.map((elem) => elem)}
        {elems.length === 0 && <h1>There is no results</h1>}
      </ModalView>
      <div className="ProfileLink" onClick={() => handleShow(url)}>
        <img src={icon} alt="icon" />
      </div>
    </>
  );
};
export default ProfileLink;
