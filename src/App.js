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

function App() {
  return (
    <div className="App">


      {/* STYLE INTO A NAV BAR */}

      <Link to="/about/">About Me</Link><br />
      <Link to="/family/">Furries</Link><br />
      <Link to="/career/">What I've Done</Link><br />
      <Link to="/noodling/">Thinking</Link><br />
      <Link to="/entertainment/">Enjoy</Link><br />
      <Link to="/misc/">Other Crap</Link><br />

      <MainPage />
      {/* <nav id="menu">
                <ul class="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="landing.html">Landing</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
                <ul class="actions stacked">
                    <li><a href="#" class="button primary fit">Get Started</a></li>
                    <li><a href="#" class="button fit">Log In</a></li>
                </ul>
            </nav> */}

      <Route exact path="/about/" render={props => <AboutMe />} />
      <Route exact path="/family/" render={props => <Furries />} />
      <Route exact path="/career/" render={props => <Career />} />
      <Route exact path="/noodling/" render={props => <Noodling />} />
      <Route exact path="/entertainment/" render={props => <Entertainment />} />
      <Route exact path="/misc/" render={props => <Misc />} />
      {/* <Route path="/movies/:id" render={props => <Movie {...props} id={props.id} />} /> */}
    </div>
  );
}

export default App;
