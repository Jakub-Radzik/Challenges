import React from 'react';

const Search = ({
  type = 'text',
  placeholder,
  searchTerm,
  searchTermHandler,
  children,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={searchTerm}
        onChange={searchTermHandler}
      />
      {children}
    </>
  );
};

export default Search;
