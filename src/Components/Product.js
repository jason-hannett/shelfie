import React, {Component} from 'react' 

class Product extends Component{

    render(){
        // console.log(this.props)
        return(
            <div className='dashboard-container'>
                <img src={this.props.product.img} height='100px'/>
                <h3>{this.props.product.product_name}</h3>
                <h4>{this.props.product.product_price}</h4>
            </div>
        )
    }
}
export default Product