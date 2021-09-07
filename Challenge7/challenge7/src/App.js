import './App.css';
import Search from './Search/Search';
import React from 'react';
import axios from 'axios';
import Card from './Card/Card';
import Loader from './Utils/Loader/Loader';
import Error from './Utils/Error/Error';
import Header from './Components/Header/Header';
import ReactPaginate from 'react-paginate';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const [searchResult, setSearchResult] = React.useState([]);
  const [loadingResult, setLoadingResult] = React.useState(false);
  const [errorResult, setErrorResult] = React.useState(false);

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlerClick = (page = 1) => {
    setLoadingResult(true);
    const per_page = 10;
    axios
      .get(
        `https://api.github.com/search/users?q=${searchTerm}&page=${page}&per_page=${per_page}`
      )
      .then((r) => {
        if (r.data.total_count >= 1000) {
          setSites(Math.ceil(1000 / per_page) - 2); //1000 is last result we can get from API
        } else {
          setSites(Math.ceil(r.data.total_count / per_page));
        }
        setSearchResult(r.data.items);
        setLoadingResult(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingResult(false);
        setErrorResult(true);
      });
  };

  const pageControl = (activePage) => {
    handlerClick(activePage);
  };

  const [sites, setSites] = React.useState(0);

  return (
    <div className="App">
      <Header>
        <h1>devfinder</h1>
        <div>switch</div>
      </Header>
      <div className="tools">
        <Search
          placeholder={'Search GitHub username...'}
          searchTerm={searchTerm}
          searchTermHandler={searchTermChangeHandler}
          submitHandler={() => handlerClick()}
          isAutoFocus={true}
        >
          <button onClick={() => handlerClick()}>Search</button>
        </Search>
        {sites > 1 && (
          <ReactPaginate
            pageCount={sites}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={(page) => pageControl(page.selected + 1)}
          />
        )}
      </div>
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
