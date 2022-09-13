import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer text-white">
                    <div className="container">
                        <footer className="py-5">
                            <div className="row">
                                <div className="col-3">
                                <NavLink className="navbar-brand fw-bolder" to="/"><h4>Shalala</h4></NavLink>
                                </div>
                                <div className="col-2">
                                    <h5>SECTION</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <NavLink to="/about" className="nav-link p-0 text-white">
                                                ABOUT
                                            </NavLink>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <NavLink to="/services" className="nav-link p-0 text-white">
                                                SERVICES
                                            </NavLink>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <NavLink to="/contact" className="nav-link p-0 text-white">
                                                CONTACT
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2">
                                    <h5>PRODUCTS</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                PROJECT MANAGEMENT
                                            </a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                WEATHER APP
                                            </a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                CAPYOT
                                            </a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                DENTAL MANAGEMENT
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4 offset-1">
                                <h5>INFO</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                +639169711532
                                            </a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                nino.bandalan21@gmail.com
                                            </a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a to="#" className="nav-link p-0 text-white">
                                                F. Cabahug, Subangdako, Mandaue City
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                                    <p>Copyright © 2022 Shalala. All rights reserved.</p>
                                    <ul className="list-unstyled d-flex">
                                        <li className="ms-3">
                                            <a className="link-light" href="https://www.facebook.com/ninz.bandalan21" target="_blank">
                                                <i className="fa fa-facebook fa-2x"></i>
                                            </a>
                                        </li>
                                        <li className="ms-3">
                                            <a className="link-light" href="https://www.instagram.com/ninzbanroad21/" target="_blank">
                                                <i className="fa fa-instagram fa-2x"></i>
                                            </a>
                                        </li>
                                        <li className="ms-3">
                                            <a className="link-light" href="https://twitter.com/Nino49422343" target="_blank">
                                                <i className="fa fa-twitter fa-2x"></i>
                                            </a>
                                        </li>
                                        <li className="ms-3">
                                            <a className="link-light" href="https://www.linkedin.com/in/niño-anthony-5417441a3" target="_blank">
                                                <i className="fa fa-linkedin fa-2x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
                </footer>
            </div>
        )
    }
}