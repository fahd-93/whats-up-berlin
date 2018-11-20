import React, { Component } from 'react';
import Photo from '../../images/sunrise.jpg'


var Banner = () => {
    return (
        <div>
            &lt;<div className="banner" style={{ backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${Photo})` }}>
                <div className="banner-content">
                    <h1>Le Wagon Berlin</h1>
                    <p>Learn to code with us in Berlin</p>
                    <a href="/login" className="button">Login</a>
                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        </div>
    );
}




export default Banner;