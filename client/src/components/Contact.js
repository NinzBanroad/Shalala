import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeName(name) {
        this.setState({ name: name })
    }

    onChangeEmail(email) {
        this.setState({ email: email })
    }

    onChangeMessage(message) {
        this.setState({ message: message })
    }



    onSubmit(e) {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        if (this.state.name == '' && this.state.email == '' && this.state.message == '' || this.state.message == '' || this.state.email == '' || this.state.name == '') {
            toast.error('Please fill up all fields', {
                theme: 'colored',
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
                });
        } else {
            axios.post('http://localhost:5000/message/add', { data })
                .then(res => {
                    if (res.data === 'Message Successfully Sent') {
                        toast.success('Message Sent', {
                            theme: 'colored',
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined
                            });
                        this.setState({ name: '', email: '', message: '' });
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <section id="contact">
                    <div className="container my-5 py-5">
                        <div className="row mb-5">
                            <div className="col-12">
                                <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                                <h1 className="display-6 text-center mb-4">Ready to start your next project with us?</h1>
                                <hr className="w-25 mx-auto" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/contact.webp" alt="contact" className="w-75" />
                            </div>
                            <div className="col-md-6">
                                <form onSubmit={this.onSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" value={this.state.name} name="name" onChange={(e) => this.onChangeName(e.target.value)} placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email Address</label>
                                        <input type="text" className="form-control" value={this.state.email} name="email" onChange={(e) => this.onChangeEmail(e.target.value)} placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message" className="form-label">Message</label>
                                        <textarea className="form-control" value={this.state.message} name="message" onChange={(e) => this.onChangeMessage(e.target.value)} rows="5"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary">Send Message
                                        <i className="fa fa-paper-plane ms-2"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </section>
            </div>
        )
    }
}