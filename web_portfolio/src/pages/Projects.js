import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/styles/projects.css';
import photo1 from '../images/img-1.jpg';
import photo2 from '../images/img-2.jpg';
import photo3 from '../images/img-3.jpg';
import photo4 from '../images/img-4.jpg';
import photo5 from '../images/img-5.jpg';
import photo6 from '../images/img-6.jpg';
import photo7 from '../images/img-7.jpg';


class Projects extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="name text-center">
                                <h1>Projects</h1>
                            </div>
                        <div className="row">
                            <div className="col">
                                <text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</text>
                            </div>
                        </div>
                        
                        <div className="container">
                            <div className="row portafolio">
                                <div className="col">
                                    <div className="row galeria justify-content-center">

                                    <div className="contenedor-imagen col-6 col-lg-4">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo1} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    <div className="contenedor-imagen col-12 col-lg-8">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo2} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    <div className="contenedor-imagen col-12 col-lg-8">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo3} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    <div className="contenedor-imagen col-6 col-lg-4">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo4} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    <div className="contenedor-imagen col-6 col-lg-4">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo5} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    <div className="contenedor-imagen col-6 col-lg-4">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo6} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    <div className="contenedor-imagen col-6 col-lg-4">
							            <a href="#" data-toggle="modal" data-target="#modal">
								            <img src={photo7} class="img-fluid imagen" alt=""></img>
							            </a>
						            </div>

                                    </div>
                                </div>
                            </div>
                        </div>








                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Projects;