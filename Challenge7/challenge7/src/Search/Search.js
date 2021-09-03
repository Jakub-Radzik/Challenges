import React from 'react';

const Search = ({
  type = 'text',
  placeholder,
  searchTerm,
  searchTermHandler,
  isAutoFocus,
  children,
}) => {
  //TODO: submit on enter
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={searchTerm}
        onChange={searchTermHandler}
        autoFocus={isAutoFocus}
      />
      {children}
    </>
  );
};

export default Search;
