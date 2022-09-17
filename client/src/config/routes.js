import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import {
  LOGIN_URL,
  HOME_URL,
  NEW_STORE_URL,
  LIST_MAP_URL,
  STORE_DETAIL_URL
} from 'config/urls';

import { Login, Home } from 'pages';
import NewStore from 'pages/NewStore';
import NavBar from 'components/NavBar';
import ListMap from 'pages/ListMap';
import StoreDetail from 'pages/StoreDetail';

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <>
      <NavBar />
      <Router history={history}>
        <Switch>
          <Route exact path={STORE_DETAIL_URL} component={StoreDetail} />
          <Route exact path={LIST_MAP_URL} component={ListMap} />
          <Route path={LOGIN_URL} component={Login} />
          <Route path={NEW_STORE_URL} component={NewStore} />
          <Route path={HOME_URL} component={Home} />
          <Route path="*">
            <Redirect to={HOME_URL} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
