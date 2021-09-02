import './App.css';
import Search from './Search/Search';
import React from 'react';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);

  const searchTermChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlerClick = () => {
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((r) => setSearchResult(r.data.items));
  };

  return (
    <div className="App">
      <Search
        placeholder={'Search GitHub username...'}
        searchTerm={searchTerm}
        searchTermHandler={searchTermChangeHandler}
      >
        <button onClick={() => handlerClick()}>Search</button>
      </Search>
      <div>
        {searchResult &&
          searchResult.map((item, index) => {
            return (
              <div>
                {index}. {item.login} - {item.id}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
