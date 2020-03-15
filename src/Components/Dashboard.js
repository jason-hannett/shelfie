import React, {Component} from 'react' 
import Product from './Product'
import axios from 'axios'

class Dashboard extends Component{

    constructor(){
        super()

        this.state = {
            updateName: '',
            updatePrice: 0,
            updateImg: ''
        }
        this.delete = this.delete.bind(this)
    }

    delete(id) {
        axios.delete(`/api/inventory/${id}`)
        .then(response => {
            this.setState({inventory: response.data})
            // this.props.inventory()
        })
    }

    render(){
        console.log(this.props)
        const dashboardDisplay = this.props.product.map((element, index) => {
            return <Product key={index} product={element} delete={this.delete} />
        })
        return(
            <div>
                {dashboardDisplay}
            </div>
        )
    }
}

export default Dashboard