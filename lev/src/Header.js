import React, { Component } from 'react'
import Logo from './Logo.svg' 
import './Header.css'

export default class Header extends Component {
    constructor(){
        super();
        this.state={
            isToggle:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e)
    {
        this.setState({
            isToggle:!this.state.isToggle

        })
    }
    render() {
        let add;
        let cont;
        if(this.state.isToggle)
        {
            add="menu-btn open";
            cont="nav show";
        }
        else{
            add="menu-btn close";
            cont="nav hidden";
        }
        return (
            <div className="header">
                 <div>
                    <img src={Logo} alt="image" />
                </div>
        <div className="navbar">
            <ul>
                <li><h4><a href="">Blogs</a></h4></li>
                <li><h4><a href="">FAQs</a></h4></li>
                <li><h4><a href="">About Us</a></h4></li>
               
            </ul>
        </div>
        <div className={add} onClick={this.handleClick}>
            <div className="menu-btn-burger"></div>
           
        </div>
            </div>
        )
    }
}
