import React, { useState } from 'react';
import Modi from "./Modi";
import Ort from "./Ort";
import Bit from "./Bit";

import './styles/home.css';

function Home() {

        const [selectedProject, setSelectedProject] = useState('all');
    
        const handleProjectChange = (project) => {
            setSelectedProject(project);
        };

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <header className="sticky">
                    <div className="box-header">
                        <div className="items">
                            <div className="item">
                                <a href="#home">Home</a>
                            </div>
                            <div className="item">
                                <a href="#proyect">Proyects</a>
                            </div>
                            <div className="item">
                                <a href="#a">Skills</a>
                            </div>
                            <div className="item">
                                <a href="#b">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="box" id="home">
                    <div className="left">
                        <img src="/fotohombre.png" alt="foto" width="60%"/>                
                    </div>
                    <div className="right">
                        <div className="titles">
                            <p className="name">I'm Felipe Maciel</p>
                            <p className="rol">Web Developer</p>    
                            <p className="desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        </div>
                        <div className="buttons">
                            <div className="button-one">
                                <a href="#a"><button>Download CV</button></a>
                            </div>
                            <div className="button-two">
                                <a href="#b"><button>Contact Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="proyecto" >
                    <div className="box-proyect">
                        <div className="mini-header" id="proyect">
                            <label className="mini-proyect">PROYECTS</label>
                            <label className="big-proyect">My featured projects</label>
                            <div className="mini-items">
                                <div className="mini-item">
                                    <a href="#a" onClick={() => handleProjectChange('all')}>Todos</a>
                                </div>
                                <div className="mini-item">
                                    <a href="#a" onClick={() => handleProjectChange('frontend')}>Front-End</a>
                                </div>
                                <div className="mini-item">
                                    <a href="#a" onClick={() => handleProjectChange('uxui')}>UX-UI</a>
                                </div>
                                <div className="mini-item">
                                    <a href="#a" onClick={() => handleProjectChange('developer')}>Developer</a>
                                </div>
                            </div>
                        </div>

                        {selectedProject === 'all' && (
                            <div>
                                <Modi />
                                <Ort />
                                <Bit />
                            </div>
                        )}

                        {selectedProject === 'frontend' && (
                            <div>
                                <Modi />
                                <Ort />
                            </div>
                        )}

                        {selectedProject === 'uxui' && (
                            <div>
                                <Modi />
                            </div>
                        )}

                        {selectedProject === 'developer' && (
                            <div>
                                <Bit />
                            </div>
                        )}
                    </div>
                </div>
            </body>
        </html>
    );
}

export default Home;
