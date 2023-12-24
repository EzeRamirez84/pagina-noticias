import React from 'react'
import Header from './components/common/header/Header';
import Homepages from './components/home/Homepages';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Homepages} />
        </Switch>
    </Router>
    </>
  )
}

export default App