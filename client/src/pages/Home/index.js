import './Home.css';

const Home = () => {
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
            />
          </div>
          <div class="input-field second-wrap">
            <input id="location" type="text" placeholder="...and where?" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
