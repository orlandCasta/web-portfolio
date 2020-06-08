import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/styles/profile.css';
import photo from '../images/my_photo.jpg';
import Background from '../images/Louane_S1.jpg';

// libraries for awesome font icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'// prefix fas
import {faLinkedinIn,faGithub,faFacebook,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'// prefix fab

class Profile extends React.Component{
    render(){
        return(
        <div>
            <Navbar/>
            <div className="contenedor-principal">
            <div className="container">
                <div className="row colfoto">
                    <div className="col foto">
                        <img src={photo} className="rounded-circle img-fluid" alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="name">
                            <h1 class="display-3 text-center myname">Orlando Castañeda</h1>
                        </div>
                    </div>
                </div>
                <div className="text-area">
                <div className="row text-justify">
                    <div className="col">
                        <text>
                        Hello, my name is Orlando Castañeda, I am a computer engineer with a great passion for programming and technology in general, I develop web and mobile applications, implementing the use of different framewroks and programming languages such as python, django, react and many more.
                        </text>
                    </div>
                </div>
                </div>
                <div className="icons-contact">
                    <div className="row social-media justify-content-center">
                        <div className="col-auto">
                            <a href="https://www.linkedin.com/in/luis-orlando-casta%C3%B1eda-espinoza-758426161/" className="icono linkedin"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                            <a href="https://github.com/orlandCasta" className="icono github"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://www.facebook.com/orlando.castaneda.75" className="icono facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="https://twitter.com/explore" className="icono twitter"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="https://www.instagram.com/orlandcasta/?hl=es-la" className="icono instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="https://www.youtube.com/channel/UCUoh4plhdSvcSChUD0kZK2w?view_as=subscriber" className="icono youtube"><FontAwesomeIcon icon={faYoutube}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Profile;