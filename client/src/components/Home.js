import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="home">
                    <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8 mt-5">
                            <h1 class="display-4 fw-bolder mb-4 text-center text-white">Shalala.</h1>
                            <p class="lead text-center fs-4 mb-5 text-white">That’s what gets us up every day. Working with you to make ground-breaking, industry-defining, heart-racing moves. The kind of work that speaks to possibility and progress, unlocking opportunity to drive positive impact for your brand—and for the world around us.</p>
                        </div>
                        <div class="buttons d-flex justify-content-center">
                            <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                            <NavLink to="/services" className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                        </div>
                    </div>
                    </div>
                </section>
                <About/>
                <Services/>
                <Contact/>
            </div>
        )
    }
}