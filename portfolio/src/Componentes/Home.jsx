import React from 'react';
import './styles/home.css'

function Home() {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
            <title>portfolio</title>
        </head>
        <body>
            
        <header>
            <div className="box-header">
                <div className="logo"> 
                    <a href="#a" className="coloured">FELIPE</a>
                </div>
                <div className="items">
                    <div className="item">
                        <a href="#a">Home</a>
                    </div>
                    <div className="item">
                        <a href="#a">About me</a>
                    </div>
                    <div className="item">
                        <a href="#a">Proyects</a>
                    </div>
                    <div className="item">
                        <a href="#b">Contact Me</a>
                    </div>
                </div>
            </div>
        </header>

        <div className="box">
            <div className="left">
                <img src="/fotohombre.png" alt="foto" width="60%"/>                
            </div>
            <div className="right">
                <div className="titles">
                        <h1>I'm Felipe Maciel</h1>
                        <h3>Front End Developer</h3>    
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </div>
                <div className="buttons">
                    <div className="button-one">
                        <a href="#a">Download CV</a>
                    </div>
                    <div className="button-two">
                        <a href="#b">Contact Me</a>
                    </div>
                </div>
            </div>

        </div>

        </body>
        </html>
    );
}

export default Home;
