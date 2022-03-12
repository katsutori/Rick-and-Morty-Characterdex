import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllCharacters } from './store/character'

import AppNavigation from './components/AppNavigation';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(getAllCharacters())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <AppNavigation />
        <Switch>
          <Route path='/' exact={true} >
            <h1>My Home Page</h1>
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
