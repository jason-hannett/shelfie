import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'

class Form extends Component{

    constructor(){
        super()

        this.state = {
            product_name: '',
            product_price: 0,
            img: '',
        }
        // console.log(this.state)
    }

    getProduct(id){
        axios.get(`/api/inventory/${id}`)
        .then(response => {
            this.setState({inventory: response.data})
        })
    }

    
    createProduct(){
        console.log('button pressed')
        axios.post('/api/inventory', {product_name: this.state.product_name, product_price: this.state.product_price, img: this.state.img})
        .then(response => {
            this.setState({inventory: response.data})})
            // this.props.inventory({product_name: this.state.product_name, product_price: this.state.product_price, img: this.state.img})
            
        }
        


    imageHandler(value){
        this.setState({img: value})
    }
    
    nameHandler(value){
        this.setState({product_name: value})
    }
    
    priceHandler(value){
        this.setState({product_price: value})
    }


    render(){
        console.log(this.props.product)
        return(
            <div className='form-container'>
                    <img className='form-img' src={this.state.img} />
                <div className='form-input-container'>
                image
                <input 
                     value={this.state.img}
                    onChange={e => this.imageHandler(e.target.value)}
                />
                name
                <input 
                    value={this.state.product_name}
                    onChange={e => this.nameHandler(e.target.value)}
                />
                price
                <input 
                    value={this.state.product_price}
                    onChange={e => this.priceHandler(e.target.value)}
                />
                </div>
                <div className='form-buttons-container'>
                    <div className='form-cancel-button'>
                    <Link to='/'>
                    <button >Cancel</button>
                    </Link>
                    </div>
                    <div className='form-add-button'>
                    <Link to='/'>
                    <button onClick={() => this.createProduct()}>Add to Inventory</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form