import React, {Component} from 'react' 
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header>
                <img />
                <h2>SHELFIE</h2>
                <div className='header-buttons'>
                <Link to='/'>
                <button>Dashboard</button>
                </Link >
                <Link to='/add'>
                <button className='ai-button'>Add Inventory</button>
                </Link>
                </div>
            </header>
        )
    }
}

export default Header