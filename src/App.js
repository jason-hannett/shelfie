import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header'


import './App.css';
// import { response } from 'express';

class App extends Component{


  render(){

    return(
      <HashRouter>
      <div>
        <Header />
        {routes}
      </div>
      </HashRouter>
    )
  }
}

export default App;
