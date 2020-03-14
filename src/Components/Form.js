import React, {Component} from 'react' 
import axios from 'axios'

class Form extends Component{

    constructor(){
        super()

        this.state = {
            product_name: '',
            product_price: 0,
            img: ''
        }
        // console.log(this.state)
    }

    
    createProduct(){
        console.log('button pressed')
        axios.post('/api/inventory', {product_name: this.state.product_name, product_price: this.state.product_price, img: this.state.img})
        .then(response => {
            this.setState({inventory: response.data})})
            this.props.inventory({product_name: this.state.product_name, product_price: this.state.product_price, img: this.state.img})
            
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
                <div className='form-img'>
                    <img alt='product'/>
                </div>
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
                <div className='form-buttons'>
                    <button >Cancel</button>
                    <button onClick={() => this.createProduct()}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form