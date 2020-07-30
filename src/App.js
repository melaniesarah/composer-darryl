import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Groups from './Components/Groups/Groups';
import MultiMediaList from './Components/MultiMedia/MultiMediaList';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
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
            <Route path="/about" component={About} />
            <Route path="/groups" component={Groups} />
            <Route path="/multimedia" component={MultiMediaList} />
            <Route path="/audio" component={AudioPlayer} />
            <Route path="/appearances" component={GuestAppearances} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
