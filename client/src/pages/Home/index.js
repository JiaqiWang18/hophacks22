import { useState } from 'react';
import { get } from 'utils/sdk';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const doSearch = () => {
    get(`stores/?category=${searchTerm}`).then(resp => {
      console.log(resp);
    });
  };

  return (
    <div class="s01">
      <form>
        <fieldset>
          <legend>ADAbility</legend>
        </fieldset>
        <div class="under">
          <input id="caption" type="" text placeholder="Regain your footing." />
        </div>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <input
              id="search"
              type="text"
              placeholder="What are you looking for..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div class="input-field second-wrap">
            <input id="location" type="text" placeholder="...and where?" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button" onClick={doSearch}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
