import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'

class Product extends Component{

    constructor(){
        super()

        this.state = {
            isEditing: false,
            updateName: '',
            updatePrice: 0,
            updateImg: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    editProduct(id, product_name, product_price, img){
    axios.put(`/api/inventory/${id}`, {product_name: product_name, product_price: product_price, img: img})
    .then(response => {
        this.setState({inventory: response.data})
    })
    }
    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
      }
    
      handleEdit = (event) => {
        this.setState({updateName: event.target.value, updatePrice: event.target.value, updateImg: event.target.value})
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
                    {this.state.isEditing
                    ?
                    (
                    <div>
                        <input />
                        <input />
                        <input />
                        <button onClick={() => {this.editProduct(this.props.product.product_id)
                        this.toggleEdit()
                        }}>Save</button>
                    </div>
                    )
                    :(
                    <Link to='/edit'>
                    <button onClick={this.toggleEdit}>Edit</button>
                    </Link>
                    )}
                    <button onClick={() => this.props.delete(this.props.product.product_id)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Product