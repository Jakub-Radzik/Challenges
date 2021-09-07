import React, { useState } from 'react';
import '../../Styles/Card/ProfileLink.sass';
import ModalView from '../../Modal/ModalView';
import axios from 'axios';
import { Names } from '../../Utils/Names';
import FollowerCard from '../../SearchResults/FollowerCard/FollowerCard';

const generateNodes = (data, text) => {
  console.log(data);
  let elemList = [];
  switch (text) {
    case Names.FOLLOWERS:
      for (let elem of data.data) {
        elemList.push(
          <FollowerCard
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
            login={elem.login}
            avatar_url={elem.avatar_url}
            html_url={elem.html_url}
          />
        );
      }
      break;
  }

  return elemList;
};

const ProfileLink = ({ text, url, owner }) => {
  const [show, setShow] = useState(false);
  const [elems, setElems] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    console.log(url);
    axios
      .get(url)
      .then((result) => generateNodes(result, text))
      .then((nodes) => {
        console.log(nodes);
        setElems(nodes);
      })
      .then(() => setShow(true));
  };

  const [data, setData] = useState([]);

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
        {text}
      </div>
    </>
  );
};
export default ProfileLink;
// data-toggle="modal" data-target="#exampleModal"
