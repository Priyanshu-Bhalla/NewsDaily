import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'
export default function Navbar(props) {

    return (
        <div className="navbar-flex">
            <nav className={`navbar fixed-top navbar-expand-md navbar-${props.mode} bg-${props.mode}`} >
                <div style={{ padding: "15px 10px", color: "black" }}>
                    <i className={`ic fa fa-bars fa-lg text-${props.mode === "light" ? "dark" : "light"}`} onClick={props.handleSideNav}></i>

                </div>
                <Link className="navbar-brand" to="/">NewsDaily</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item">
                            <div>

                            </div>
                        </li>
                        <li className="nav-item search-item">
                            <div className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} mx-2 btn_search`} >Search</button>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="theme" onClick={props.handleMode}>
                                <i className={`fas fa-${props.mode === "light" ? "moon" : "sun"} fa-lg`}></i>
                                <button className={`btn  btn-outline-${props.mode === "light" ? "dark" : "light"} btn_signup`} >Sign Up</button>

                            </div>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    )

}


