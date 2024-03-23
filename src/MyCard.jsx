import React from 'react';
import image1 from './assets/logo.png'
export function MyCard({ src, title, description }) {
  return (
    <div className="card" style={{width:'100%' }}>
      <img className="card-image" src={src} alt />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
