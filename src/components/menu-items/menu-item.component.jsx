import React from 'react';


const MenuItem = ({ title }) => (
    <div className = 'menu-item'>
        <div className = 'content'>
            <h1 className = 'title'>{title}</h1>
            <span className = 'subtitle'>sHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;