import React from 'react';
import './RepoCard.sass';

const RepoCard = ({ name, html_url, description, language, license }) => {
  return (
    <a href={html_url}>
      <div className="RepoCard">
        <h2>{name}</h2>
        <div className="top">
          <div>{language}</div>
          <div>{license && license.name}</div>
        </div>
        <div className="bottom">
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;
