import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { withAuthenticator } from '@aws-amplify/ui-react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Groups from './Components/Groups/Groups';
import MultiMediaList from './Components/MultiMedia/MultiMediaList';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';
import GuestAppearances from './Components/GuestAppearances/GuestAppearances';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import { appearances } from './Components/GuestAppearances/moveDB';

import './App.css';


//import { createGuestAppearance as createGuestAppearanceMutation } from "./graphql/mutations.js";
//import * as queries from './src/graphql/queries';
//import { API, graphqlOperation, Auth } from "aws-amplify";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrap">
          <Header />
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/about" component={About} />
            <Route path="/groups" component={Groups} />
            <Route path="/multimedia" component={MultiMediaList} />
            <Route path="/audioplayer" component={AudioPlayer} />
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

// const cryptoRandomString = require('crypto-random-string');
// appearances.forEach(async (entry) => {
//   let appearance = entry;
//   let id = cryptoRandomString({ length: 25, type: 'url-safe' });
//   const newAppearance = API.graphql(
//     graphqlOperation(createGuestAppearanceMutation, {
//       input: { id, ...appearance },
//     })
//   );
// });

export default App;
