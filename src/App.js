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
      inventory: [],
      updatedInventory: [],

    }
    this.inventoryHandler = this.inventoryHandler.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    // this.toggleEdit = this.toggleEdit.bind(this)
    // this.handleEdit = this.handleEdit.bind(this)
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
        <Dashboard product={this.state.inventory} inventory={this.componentDidMount} />
        <Form inventory={this.componentDidMount} updatedInventory={this.state.updatedInventory} />
      </div>
    )
  }
}

export default App;
