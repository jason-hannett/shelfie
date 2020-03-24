import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
// import axios from 'axios'

class Product extends Component{

    constructor(){
        super()

        this.state = {
            
        }
    }

    render(){
        console.log(this.props)
        return(
            <div className='product-container'>
                <img className='product-image' src={this.props.product.img} height='100px'/>
                <div className='product-info-container'>
                <p>{this.props.product.product_name}</p>
                <p className='product-price'>${this.props.product.product_price}</p>
                </div>
                <div className='product-buttons'>
                    <Link to='/edit'>
                    <button>Edit</button>
                    </Link>
                    
                    <button onClick={() => this.props.delete(this.props.product.product_id)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Product