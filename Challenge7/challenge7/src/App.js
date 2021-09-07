import './App.css';
import Search from './Search/Search';
import React from 'react';
import axios from 'axios';
import Card from './Card/Card';
import Loader from './Utils/Loader/Loader';
import Error from './Utils/Error/Error';
import Header from './Components/Header/Header';

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
      <Header>
        <h1>devfinder</h1>
        <div>switch</div>
      </Header>

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
        {loadingResult && <Loader />}
        {errorResult && <Error />}
        {searchResult &&
          !loadingResult &&
          !errorResult &&
          searchResult.map((item, index) => {
            return <Card item={item} key={index}></Card>;
          })}
      </div>
    </div>
  );
}

export default App;
