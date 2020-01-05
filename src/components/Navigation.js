import React from 'react';
import { Route, Link } from 'react-router-dom';
// import './App.css';

import AboutMe from './AboutMe';
import Furries from './Furries';
import Career from './Career';
import Noodling from './Noodling';
import Entertainment from './Entertainment';
import Misc from './Misc';

function Navigation() {
    return (
        <div className="Navigation">


            {/* STYLE INTO A NAV BAR */}
            <Link to="/">Home</Link><br />
            <Link to="/about/">About Me</Link><br />
            <Link to="/family/">Furries</Link><br />
            <Link to="/career/">What I've Done</Link><br />
            <Link to="/noodling/">Thinking</Link><br />
            <Link to="/entertainment/">Enjoy</Link><br />
            <Link to="/misc/">Other Crap</Link><br />

            <Route exact path="/" />
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

export default Navigation;