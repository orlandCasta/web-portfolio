import React from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <ul class="nav fm-nav justify-content-center">
                                <li class="nav-item">
                                    <Link to="/profile" class="nav-link">Portfolio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/skills" class="nav-link">Skills</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/projects" class="nav-link">Projects</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/tutorials" class="nav-link">Tutorials</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contact" class="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
			        </div>
                </div>
            </header>
        )
    }
}

export default Navbar;