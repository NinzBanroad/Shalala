import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Services extends Component {
    render() {
        return (
            <div>
                <section id="services">
                    <div class="container my-5 py-5">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="fs-5 text-center mb-0">Our Services</h3>
                                <h1 class="display-6 text-center mb-4">Our <b>Awesome</b> Services</h1>
                                <hr class="w-25 mx-auto" />
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-4">
                                <div class="card p3-border-0">
                                        <div class="card-body text-center">
                                        <i class="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                            <h5 class="card-title mb-3 fs-4 fw-bold">INTEGRATIONS</h5>
                                            <p class="card-text lead">We build integrations to enable seamless dataflow across different systems.</p>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card p3-border-0">
                                        <div class="card-body text-center">
                                        <i class="fa fa-laptop fa-4x mb-4 text-primary"></i>
                                        <i class="fa fa-display-code"></i>
                                            <h5 class="card-title mb-3 fs-4 fw-bold">WEB</h5>
                                            <p class="card-text lead">We build secure web-based system with REST API for the best extensibility.</p>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card p3-border-0">
                                        <div class="card-body text-center">
                                        <i class="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                            <h5 class="card-title mb-3 fs-4 fw-bold">MOBILE</h5>
                                            <p class="card-text lead">We build high quality native mobile applications for iOS and Android.</p>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4 mt-5">
                                <div class="card p3-border-0">
                                        <div class="card-body text-center">
                                        <i class="fa fa-cloud fa-4x mb-4 text-primary"></i>
                                            <h5 class="card-title mb-3 fs-4 fw-bold">CLOUD SERVICES</h5>
                                            <p class="card-text lead">We help businesses leverage the on-demand benefits of the internet with a cloud service provider.</p>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4 mt-5">
                                <div class="card p3-border-0">
                                        <div class="card-body text-center">
                                        <i class="fa fa-server fa-4x mb-4 text-primary"></i>
                                            <h5 class="card-title mb-3 fs-4 fw-bold">IT CONSULTING</h5>
                                            <p class="card-text lead">We work with business-wide software and operating system updates, ensuring that no technical detail is overlooked.</p>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4 mt-5">
                                <div class="card p3-border-0">
                                        <div class="card-body text-center">
                                        <i class="fa fa-lock fa-4x mb-4 text-primary"></i>
                                            <h5 class="card-title mb-3 fs-4 fw-bold">NETWORK SECURITY</h5>
                                            <p class="card-text lead">We provide network security solutions including firewalls, anti-virus software, web filtering and patch management.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}