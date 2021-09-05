import './App.css';
import Search from './Search/Search';
import React from 'react';
import axios from 'axios';
import Card from './Card/Card';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const [searchResult, setSearchResult] = React.useState([]);
  const [loadingResult, setLoadingResult] = React.useState(false);
  const [errorResult, setErrorResult] = React.useState(false);

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlerClick = () => {
    setLoadingResult(true);

    const page = 1;
    const per_page = 10;
    axios
      .get(
        `https://api.github.com/search/users?q=${searchTerm}&page=${1}&per_page=${per_page}`
      )
      .then((r) => {
        setSearchResult(r.data.items);
        setLoadingResult(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingResult(false);
        setErrorResult(true);
      });
  };

  return (
    <div className="App">
      <div className={'temp-header'}>
        <h1>devfinder</h1>
        <div>switch</div>
      </div>
      <Search
        placeholder={'Search GitHub username...'}
        searchTerm={searchTerm}
        searchTermHandler={searchTermChangeHandler}
        submitHandler={() => handlerClick()}
        isAutoFocus={true}
      >
        <button onClick={() => handlerClick()}>Search</button>
      </Search>
      <div>
        {loadingResult && <h1>LOADING</h1>}
        {errorResult && <h1>Error after fetch data</h1>}
        {searchResult &&
          !loadingResult &&
          !errorResult &&
          searchResult.map((item, index) => {
            return <Card item={item}></Card>;
          })}
      </div>
    </div>
  );
}

export default App;
