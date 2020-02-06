import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import UserState from './context/UserState';
import Categories from './components/pages/Categories';
import { useState } from 'react';
import SearchResults from './components/pages/SearchResults';
import AnimalProfile from './components/pages/AnimalProfile';
import dog from './imgs/dog-icon.png'
import cat from './imgs/cat-icon.png'
import fish from './imgs/fish-icon.png'
import barn from './imgs/barn-icon.png'
import horse from './imgs/horse-icon.png'
import rabbit from './imgs/rabbit-icon.png'
import mouse from './imgs/mouse-icon.png'
import bird from './imgs/bird-icon.png'
import Footer from './components/layout/Footer';
import AlertContextProvider  from './context/AlertContext';
import Alert from './components/layout/Alert';


function App() {
  const [animalTypes, setAnimalTypes] = useState([{type:'Dog', icon: dog}, {type:'Cat', icon: cat}, {type:'Rabbit', icon: rabbit},{type: 'Small & Furry', icon: mouse}, {type:'Horse', icon: horse}, {type:'Bird', icon: bird}, {type:'Scales, Fins & Other', icon: fish}, {type:'Barnyard', icon: barn}]);
  
  return (
    <UserState>
      <AlertContextProvider>
      <div className="App">
        <Navbar/>
        <Alert/>
        <Switch>
          <Route exact path="/" render={ (routeProps) => <Home animalTypes={animalTypes} {...routeProps}/> } />
          <Route exact path="/categories" render={ (routeProps) => <Categories animalTypes={animalTypes} {...routeProps}/> } />
          <Route exact path="/animal/:animalid" render={ (routeProps) => <AnimalProfile {...routeProps} />} />
          <Route exact path="/search-results/:animaltype" render={ (routeProps) => <SearchResults animalTypes={animalTypes} {...routeProps}/> } />
        </Switch>
        <Footer/>
      </div>
      </AlertContextProvider>
    </UserState>
  );
}

export default App;
