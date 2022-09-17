import { useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import GoogleButton from 'react-google-button';

import { notifyError } from 'utils/notifications';
import {  Layout } from 'components';

import styles from './Login.module.css';

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_BACKEND_URL } = process.env;

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const queryParams = new URLSearchParams(history.location.search);

    const error = queryParams.get('error');

    if (error) {
      notifyError(error);
      history.replace({ search: null });
    }
  }, [history]);

  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const redirectUri = 'api/v1/auth/login/google/';

    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');

    const params = {
      response_type: 'code',
      client_id: REACT_APP_GOOGLE_CLIENT_ID,
      redirect_uri: `${REACT_APP_BASE_BACKEND_URL}/${redirectUri}`,
      prompt: 'select_account',
      access_type: 'offline',
      scope
    };

    const urlParams = new URLSearchParams(params).toString();

    window.location = `${googleAuthUrl}?${urlParams}`;
  }, []);

  return (
    <Layout className={styles.content}>
      <h1 className={styles.pageHeader}>Welcome to our Demo App!</h1>
      <GoogleButton
        onClick={openGoogleLoginPage}
        label="Sign in with Google"
        disabled={!REACT_APP_GOOGLE_CLIENT_ID}
      />
    </Layout>
  );
};

export default Login;
