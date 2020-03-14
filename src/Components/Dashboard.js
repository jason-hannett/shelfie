import React, {Component} from 'react' 
import Product from './Product'

class Dashboard extends Component{

    render(){
        console.log(this.props)
        const dashboardDisplay = this.props.product.map((element, index) => {
            return <Product key={index} product={element}/>
        })
        return(
            <div>
                {dashboardDisplay}
            </div>
        )
    }
}

export default Dashboard