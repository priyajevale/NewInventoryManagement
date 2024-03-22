import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import UserProfile from './components/UserProfile';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
