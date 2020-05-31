import React from 'react';
import './styles/navbar.css';


class Navbar extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <ul class="nav fm-nav justify-content-center">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Skills</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Tutorials</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Contact</a>
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