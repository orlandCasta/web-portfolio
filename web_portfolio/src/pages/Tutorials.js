import React from 'react';
import Navbar from '../components/Navbar';
import photo from '../images/404s_estilosos.jpg';

class Tutorials extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
            <div className="">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h1>Tutorials</h1>
                        </div>
                    </div>
                    <div className="text-justify">
                        <div className="row">
                            <div className="col">
                                <text>
                                Oops, page in development, we don't know what it will be but it will be incredible, I promise, I'm not laughing right now
                                </text>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col text-center">
                                <img src={photo} className="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Tutorials;