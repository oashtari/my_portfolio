import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import MainPage from './components/main_page';
import AboutMe from './components/AboutMe';
import Furries from './components/Furries';
import Career from './components/Career';
import Noodling from './components/Noodling';
import Entertainment from './components/Entertainment';
import Misc from './components/Misc';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">

      <Navigation />
      <MainPage />

      {/* <Route path="/movies/:id" render={props => <Movie {...props} id={props.id} />} /> */}
    </div>
  );
}

export default App;
