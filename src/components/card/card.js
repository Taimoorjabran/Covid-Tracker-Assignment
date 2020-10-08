import React from 'react';
import './card.css';

const Card = (props) => {
    const { heading, global } = props;
    return (
        <div className='card-container'>
            <div className="card">
                <div className='card-header  bg-info'>
                    <div className='text-center'><h4>{heading}</h4></div>
                </div>
                <div className="card-body">
                    <div className='text-center'>
                        <h5>{global}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;