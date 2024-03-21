import React from 'react';
import Button from './Button';
import ProfilePic from './assets/profile.jpg';

function Card() {
    return (
        <div className="card">
            <img className='card-image' width={150} height={150} src={ProfilePic} alt="Profile Image" />
            <h2 className='card-title'>Bro Theara</h2>
            <p className='card-text'>I am learning React from scratch.</p>
            <Button />
        </div>
    );
}

export default Card;
