import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import image from './assets/react.svg'
export function MyCard({ src, title, description }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img className="card-image" src={src} alt="" />
          <div className='heightbox'></div>
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-back">
          <div className="card-body">
          <p className="card-text justify-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
