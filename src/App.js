import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Groups from './Components/Groups/Groups';
import MultiMedia from './Components/MultiMedia/MultiMedia';
import GuestAppearances from './Components/GuestAppearances/GuestAppearances';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrap">
          <Header />
          <h1>We now have Routing</h1>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/groups">
              <Groups />
            </Route>
            <Route path="/multimedia">
              <MultiMedia />
            </Route>
            <Route path="/appearances">
              <GuestAppearances />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
