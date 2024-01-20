import React from 'react';
import './App.css';
import Header from '../Header/Header';
import FeelingComponent from '../FeelingComponent/FeelingComponent';
import UnderstandingComponent from '../UnderstandingComponent/UnderstandingComponent';
import { HashRouter as Router, Route } from "react-router-dom";


function App() {


  return (

    <section>
      <Header />
      {/* <Router>
        <Route path='/feelingcomponent'> */}
          <FeelingComponent />
        {/* </Route>
        <Route path='/understandingcomponent'> */}
          <UnderstandingComponent />
        {/* </Route>
      </Router> */}

    </section>

  );
}

export default App;
