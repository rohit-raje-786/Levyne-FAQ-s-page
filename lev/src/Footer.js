import React, { Component } from 'react'
import './Footer.css'
import Logo1 from './Logo1.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-header1">
                    <img src={Logo1} alt="levyne"/>
                    <div className="social">
                       <i class="fab fa-linkedin"></i>
                       <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="footer-header2">
                    <p>© 2020 Levyne, all rights reserved</p>
                    <div className="footer-navbar">
                    <ul>
                        <li><h4><a href="">Blogs</a></h4></li>
                        <li><h4><a href="">About Us</a></h4></li>
                        <li><h4><a href="">FAQ's</a></h4></li>   
                     </ul>
                    </div>
                </div>
            </div>
        )
    }
}
