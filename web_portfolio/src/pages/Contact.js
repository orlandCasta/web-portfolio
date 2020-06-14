import React from 'react';
import Navbar from '../components/Navbar';

// libraries for awesome font icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'// prefix fas
import {} from '@fortawesome/free-brands-svg-icons'// prefix fab

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="contenedor-principal">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="name">
                                    <h1 class="text-center">Contact</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <text>
                                Please, if you wish to contact me for issues related to any project or development, fill out all the fields on this form, I will contact you as soon as possible, thank you.
                                </text>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="First Name" name="nombre" id="first-name"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Last Name" name="pass" id="last-name"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email Address" name="pass" id="email"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone Number" name="pass" id="phone-number"></input>
                                    </div>
                                    <div class="form-group">
                                    <textarea name="mensaje" id="mensaje" class="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <button class="btn btn-dark btn-lg btn-block">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;