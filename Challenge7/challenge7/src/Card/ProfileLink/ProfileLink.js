import React, { useState } from 'react';
import './ProfileLink.sass';
import ModalView from '../../Modal/ModalView';
import { Names } from '../../Utils/Names';
import FollowerCard from '../../SearchResults/FollowerCard/FollowerCard';
import RepoCard from '../../SearchResults/RepoCard/RepoCard';
import InformationCard from '../../SearchResults/InformationCard/InformationCard';
import { UserContext } from '../Card';

const generateNodes = (data, text) => {
  // console.log(data);
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
      // elemList.push(
      //   <InformationCard
      //     key={i++}
      //     avatar_url={data.avatar_url}
      //     company={data.company}
      //     bio={data.bio}
      //     created_at={data.created_at}
      //     email={data.email}
      //     followers={data.followers}
      //     following={data.following}
      //     html_url={data.html_url}
      //     public_repos={data.public_repos}
      //   />
      // );
      break;
  }

  return elemList;
};

const ProfileLink = ({ text, owner, icon, e }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const user = React.useContext(UserContext);

  React.useEffect(() => {
    console.log(e.followers);
  }, [e]);

  return (
    <>
      {/*<ModalView*/}
      {/*  handleClose={handleClose}*/}
      {/*  show={show}*/}
      {/*  title={text}*/}
      {/*  owner={owner}*/}
      {/*>*/}
      {/*  {generateNodes(nodes, text)}*/}
      {/*  /!*{elems.length > 0 && elems.map((elem) => elem)}*!/*/}
      {/*  /!*{elems.length === 0 && <h1>There is no results</h1>}*!/*/}
      {/*</ModalView>*/}
      {/*<div className="ProfileLink" onClick={() => handleShow()}>*/}
      {/*  <img src={icon} alt="icon" />*/}
      {/*</div>*/}
    </>
  );
};
export default ProfileLink;
