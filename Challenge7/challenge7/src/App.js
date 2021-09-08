import './App.sass';
import Search from './Search/Search';
import React from 'react';
import axios from 'axios';
import Card from './Card/Card';
import Loader from './Utils/Loader/Loader';
import Error from './Utils/Error/Error';
import Header from './Components/Header/Header';
import ReactPaginate from 'react-paginate';
import Switch from './Components/Switch/Switch';
import followersLight from './img/followers-white.svg';
import followingLight from './img/observation-white.svg';
import overviewLight from './img/file-white.svg';
import repoLight from './img/folders-white.svg';
import followersDark from './img/followers.svg';
import followingDark from './img/observation.svg';
import overviewDark from './img/file.svg';
import repoDark from './img/folders.svg';
import {
  useSemiPersistentState,
  useSemiPersistentStateTheme,
} from './Hooks/useSemiPersistentState';

function App() {
  //SEARCH ===========================================================
  const [searchTerm, setSearchTerm] = useSemiPersistentState('searchTerm', '');

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
        for (let item of r.data.items) {
          item.following_url = item.following_url.slice(
            0,
            item.following_url.indexOf('{')
          );
          item.more = {};

          axios
            .get(item.followers_url)
            .then((r) => (item.more.followers = r.data));

          axios
            .get(item.following_url)
            .then((r) => (item.more.following = r.data));

          axios.get(item.repos_url).then((r) => (item.more.repos = r.data));

          axios.get(item.url).then((r) => (item.more.overview = r.data));
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

  //SEARCH ===========================================================
  //THEME ENGINE ===========================================================

  const [theme, setTheme] = useSemiPersistentStateTheme('theme', 'light');
  const icons = {
    dark: {
      followers: followersDark,
      following: followingDark,
      repo: repoDark,
      overview: overviewDark,
    },
    light: {
      followers: followersLight,
      following: followingLight,
      repo: repoLight,
      overview: overviewLight,
    },
  };
  const themeSetter = () => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'dark' : 'light'
    );
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  //THEME ENGINE ===========================================================

  return (
    <div className="appWrapper">
      <div className="App">
        <Header>
          <h1>devfinder</h1>
          <Switch clickHandler={() => themeSetter()}>
            <p>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</p>
          </Switch>
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
              return <Card item={item} key={index} iconSet={icons[theme]} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
