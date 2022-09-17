import { UserContext } from 'components';
import { useContext } from 'react';
const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const buttons = user ? (
    <li className="nav-item">
      <a className="nav-link" href="#">
        Features
      </a>
    </li>
  ) : (
    <li className="nav-item">
      <a className="nav-link" href="/new-store">
        Rate your store!
      </a>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav mr-auto"></div>
        <ul className="navbar-nav">{buttons}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
