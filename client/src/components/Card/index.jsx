import React from 'react';
import '../Card/index.css';

export default function Card ({image, name, types}) {
    return (
        <div className='card'>
            <img className='card_image' src={image} alt='img not found'/>
            <div className='card_content'>
                <h5 className='title_name'>NAME</h5>
                <h3>{name}</h3>
                <h4 className='title_types'>TYPES</h4>
                <h5>{types.map(t => t.name + " ")}</h5>
            </div>        
        </div>
    );
};

