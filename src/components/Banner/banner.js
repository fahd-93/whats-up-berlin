import React, { Component } from 'react';
import Photo from '../../images/sunrise.jpg';


var Banner = () => {
    return (
        <div>
            &lt;<div className="banner" style={{ backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${Photo})` }}>
                <div className="banner-content">
                    <h1>what's up Berlin</h1>
                    <p>we work to connect people</p>
                    <a href="/login" className="button">Login</a>
                    <a href="/signup" className="button success">Signup</a>
                    <p>kmkfmkmaf</p>
                </div>
            </div>
        </div>
    );
}




export default Banner;