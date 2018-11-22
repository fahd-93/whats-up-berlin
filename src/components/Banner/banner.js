import React, { Component } from 'react';
import Photo from '../../images/sunrise.jpg';


var Banner = () => {
    return (
        <div>
            <div className="banner" style={{ backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 20%),  url(${Photo})` }}>
                <div className="banner-content">
                    <h1>what's up Berlin!</h1><br />
                    <h2> we work to connect people</h2><br />
                    <a href="/login" className="button">Login</a>
                    <a href="/Signup" className="button success">Signup</a>
                    <p>Join The Berliners Community</p>
                </div>
            </div>
        </div>
    );
}




export default Banner;