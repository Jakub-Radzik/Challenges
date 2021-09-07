import React from 'react';

const Search = ({
  type = 'text',
  placeholder,
  searchTerm,
  searchTermHandler,
  submitHandler,
  isAutoFocus,
  children,
}) => {
  const onClickHandler = (event) => {
    if (event.key === 'Enter' && searchTerm) {
      submitHandler();
    }
  };
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={searchTerm}
        onChange={searchTermHandler}
        onKeyDown={onClickHandler}
        autoFocus={isAutoFocus}
      />
      {children}
    </>
  );
};

export default Search;
