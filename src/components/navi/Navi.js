import React, { Component } from 'react'
import 'bootstrap';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href='/' className="navbar-brand" >Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a href='/form1' className="nav-link" cart={this.props.cart}>Form1</a> */}

                            </li>
                            <li className="nav-item">
                                {/* <a href='/form1' className="nav-link" cart={this.props.cart}>Form1</a> */}

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Pricing </a>
                            </li>
                            <li className="nav-item dropdown">
                            </li>

                        </ul>
                    </div >
                </div>
            </div>
        )
    }
}