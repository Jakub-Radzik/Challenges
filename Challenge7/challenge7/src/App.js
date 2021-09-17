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
import './Utils/ButtonCustom/ButtonCustom.sass';
import {
  useSemiPersistentSessionState,
  useSemiPersistentState,
  useSemiPersistentStateTheme,
} from './Hooks/useSemiPersistentState';
import GitHubLogin from 'react-github-login';
import AuthLoader from './Utils/AuthLoader/AuthLoader';
import ButtonCustom from './Utils/ButtonCustom/ButtonCustom';
import AppWrapper from './Components/AppWrapper/AppWrapper';

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
        `https://api.github.com/search/users?q=${searchTerm}&page=${page}&per_page=${per_page}`,
        {
          headers: headersAuth,
        }
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

  React.useEffect(() => {
    console.dir(searchResult);
  }, [searchResult]);

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

  const authInitial = {
    code: null,
    token: '',
  };

  const [authLoading, setAuthLoading] = React.useState(false);
  const [auth, setAuth] = React.useState(authInitial);
  const [token, setToken] = useSemiPersistentSessionState(
    'token',
    authInitial.token
  );

  const headersAuth = {
    Authorization: `token ${token}`,
  };

  const onSuccess = (response) => {
    console.log(response);
    setAuth({ ...auth, code: response.code });
  };

  React.useEffect(() => {
    if (auth && auth.code != null) {
      axios
        .post(
          `${process.env.REACT_APP_PROXY_URL}https://github.com/login/oauth/access_token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${auth.code}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`,
          {},
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          setAuth({
            code: null,
            token: res.data.access_token,
          });
          setToken(res.data.access_token);
          setAuthLoading(false);
        });
    }
  }, [auth]);

  const onFailure = (response) => {
    console.error(response);
    setAuthLoading(false);
  };

  const removeToken = () => {
    setSearchTerm('');
    setSearchResult([]);
    setSites(0);
    setToken('');
  };

  return (
    <AppWrapper>
      <div className="App">
        <Header>
          <h1>
            devfinder
            {token ? (
              <ButtonCustom
                title={'Logout'}
                customAction={() => removeToken()}
              />
            ) : (
              <>
                <div className="background">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="blur">
                  <h1>Welcom to devfinder</h1>
                  <GitHubLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    redirectUri={process.env.REACT_APP_REDIRECT_URI}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    onRequest={() => setAuthLoading(true)}
                    className={'ButtonCustom SignInButton'}
                  />
                </div>
              </>
            )}
          </h1>
          <ButtonCustom
            title={theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
            customAction={() => themeSetter()}
          />
        </Header>

        {authLoading && <AuthLoader />}

        {token ? (
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
        ) : (
          <div />
        )}

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
    </AppWrapper>
  );
}

export default App;
