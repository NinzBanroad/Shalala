import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container my-5 py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/about-us.png" alt="about" className="w-75 mt-5" />
                            </div>
                            <div className="col-md-6">
                                <h3 className="fs-5 mb-0">About Us</h3>
                                <h1 className="display-6 mb-2">Who <b>we</b> Are</h1>
                                <hr className="w-50" />
                                <p className="lead mb-4">At Shalala, our aim is to offer you software solutions that show you that we really care! Not only have we
                                    got the trendiest solutions, but we can also guarantee that they are of the finest quality.</p>
                                <p className="lead mb-4">We started as a small company in Philippines, and our aim is to continue providing our clients with services
                                    that keep them happy, at prices that keep them happy. </p>
                                <p className="lead mb-4">Our clients are our top priority and through our services we work hard towards building long-lasting and meaningful relations with them.</p>
                                <NavLink className="btn btn-primary rounded-pill px-4 py-2" to="/contact">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}