
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'

export default function Layout() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Home</a> */}
                <Link to="/"><img src={logo} width="50" height="50"/></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">About</a> */}
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Contact</a> */}
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}
