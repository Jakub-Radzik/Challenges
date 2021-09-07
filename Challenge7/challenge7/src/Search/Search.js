import React from 'react';
import '../Styles/Search/Search.sass';

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
    <div className={'search'}>
      <input
        type={type}
        placeholder={placeholder}
        value={searchTerm}
        onChange={searchTermHandler}
        onKeyDown={onClickHandler}
        autoFocus={isAutoFocus}
      />
      {children}
    </div>
  );
};

export default Search;
