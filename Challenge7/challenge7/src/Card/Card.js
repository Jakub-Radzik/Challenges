import React, { Component } from 'react';

const Card = ({ item }) => {
  const { login, id, avatar_url, html_url } = item;

  React.useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="Card">
      <a href={html_url}>
        <div>{login}</div>
      </a>
      <div>{id}</div>
      <img src={avatar_url} alt="alter" />
    </div>
  );
};

export default Card;
