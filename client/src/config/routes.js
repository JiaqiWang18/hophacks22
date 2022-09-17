import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { LOGIN_URL, HOME_URL, NEW_STORE_URL } from 'config/urls';

import { Login, Home } from 'pages';
import NewStore from 'pages/NewStore';

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={LOGIN_URL} component={Login} />
        <Route path={NEW_STORE_URL} component={NewStore} />
        <Route path={HOME_URL} component={Home} />
        <Route path="*">
          <Redirect to={HOME_URL} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
