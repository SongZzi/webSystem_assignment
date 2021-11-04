import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <div className="bar">
                <span>201820748</span>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/review/new'>New</Link>
            </div>

        );
    }
}

export default Header;