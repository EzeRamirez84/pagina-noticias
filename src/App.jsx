import React from 'react'
import Header from './components/common/header/Header';
import Homepages from './components/home/Homepages';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import Singlepages from './components/singlePages/Singlepages';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route exact path="/singlepage/:id" component={Singlepages} />
          <Route exact path="/Culture" component={Culture} />
          <Route exact path="/politics" >
            <section className="culture">
              <div className="container paddingTB">
                <h1>Secciones de Política</h1>
              </div>
            </section>
          
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App