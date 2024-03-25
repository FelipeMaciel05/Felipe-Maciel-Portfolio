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
                                <a href="#skill">Skills</a>
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


                <div className="proyecto">
                    <div className="box-proyect">
                        <div className="mini-header">
                            <label className="mini-proyect"  id="proyect">PROYECTS</label>
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
                                    <a href="#a" onClick={() => handleProjectChange('developer')}>C# & Api Developer</a>
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

                <div className="skills" id="skill">
                    <div className="skill-title">
                        <div className="skill-cajas">
                            <label className="mini-proyect">WHAT I'M EXPERT IN</label>
                            <label className="big-proyect">My Skills</label>
                                <div className="skill-box">
                                    <div className="skill-caja">
                                        <label className="skill-caja-title">P. Languages</label>
                                        <div className="skill-items">
                                        <svg fill="none" width="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>
                                            <svg fill="none" width="80%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>
                                            <svg preserveAspectRatio="xMidYMid" viewBox="0 -1.428 255.582 290.108" width="80%" xmlns="http://www.w3.org/2000/svg"><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc"/><path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068"/><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091"/><g fill="#fff"><path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/><path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/></g></svg>
                                        </div>
                                    </div>
                                    <div className="skill-caja">
                                    <label className="skill-caja-title">Frameworks & Apps</label>
                                        <div className="skill-items">
                                            <label className="css"></label>
                                            <label className="html"></label>
                                            <label className="js"></label>
                                            <label className="react"></label>
                                        </div>
                                    </div>
                                    <div className="skill-caja">
                                        <label htmlFor="">css</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}

export default Home;
