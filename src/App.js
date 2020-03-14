import React, {Component} from 'react';
import Form from './Components/Form'
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import axios from 'axios'
import './App.css';
// import { response } from 'express';

class App extends Component{

  constructor(){
    super()

    this.state = {
      inventory: []
    }
    this.inventoryHandler = this.inventoryHandler.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    console.log(this.state)
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(response => {
      this.setState({inventory: response.data})
    })
  }

  
  inventoryHandler(product){
    this.setState({inventory: [...this.state.inventory, product]})
  }

  render(){
    console.log(this.state.inventory)
    return(
      <div>
        <Header />
        <Dashboard product={this.state.inventory}/>
        <Form inventory={this.componentDidMount}/>
      </div>
    )
  }
}

export default App;
