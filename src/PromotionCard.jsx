// PromotionCard.js

import React, { useState } from 'react';

function PromotionCard({ type, amount, des, containerColor }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className="promotion-card" 
            style={{ 
                backgroundColor: hovered ? '#fff' : containerColor,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <h4>{type}</h4>
            <hr className='heightbox'/>
            <h1>{amount}</h1>
            <p>$/USD</p>
            <hr className='heightbox'/>
            <p>{des}</p>
        </div>
    );
}

export default PromotionCard;
