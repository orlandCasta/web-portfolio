import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/styles/skills.css';

// libraries for awesome font icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'// prefix fas
import {faReact,faHtml5,faCss3,faPython,faJsSquare,faBootstrap} from '@fortawesome/free-brands-svg-icons'// prefix fab

class Skills extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="name">
                                <h1>My Skills</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-justify">
                        <text>    
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged.
                        </text>
                        </div>
                    </div>
                    <div className="skillscontainer">
                        <div className="row">
                            <div className="col-2 skilliconcontainer justify-content-center">
                                <i className="skill-icon"><FontAwesomeIcon icon={faHtml5}/></i>
                            </div>
                            <div className="col-8">
                                <div className="progresscol">
                                    <div class="progress-bar bg-inverse progressforstyle" role="progressbar">55%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;