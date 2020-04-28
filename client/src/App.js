import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Usercontext } from './context/user/UserContext';

import Home from './components/containers/Home';
import Navbar from './components/layout/Navbar';
import Categories from './components/presentational/Categories';
import SearchResults from './components/presentational/SearchResults';
import AnimalProfile from './components/presentational/AnimalProfile'
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';

import animalTypes from './assets/animalTypes'
import './App.css';

function App() {
  const { setLocation, location } = useContext(Usercontext)

  return (
    <div className="App">
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home setLocation={setLocation} />
        </Route>

        <Route exact path="/categories" >
          <Categories animalTypes={animalTypes} location={location} />
        </Route>

        <Route exact path="/animal/:animalid" >
          <AnimalProfile />
        </Route>

        <Route exact path="/search-results/:animaltype" >
          <SearchResults animalTypes={animalTypes} location={location} />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
