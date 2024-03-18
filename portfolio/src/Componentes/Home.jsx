import React from 'react';
import './styles/home.css'

function Home() {
    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>portfolio</title>
        </head>
        <body>
            
        <header>
            <div className="box">
                <div className="logo">
                    <a href="#">Felipe</a>
                </div>
                <div className="items">
                    <div className="item">
                        <a href="#">Home</a>
                    </div>
                    <div className="item">
                        <a href="#">About me</a>
                    </div>
                    <div className="item">
                        <a href="#">Proyects</a>
                    </div>
                    <div className="item">
                        <a href="#">Contact Me</a>
                    </div>
                </div>
            </div>
        </header>

        </body>
        </html>
    );
}

export default Home;
