import React from 'react';

export default function Input(props) {
    return (
        <div>
            <label htmlFor='example'>{props.label}</label>
            <input
                onChange={props.InputChange}
                type='text' className='form-control'
            />
        </div>
    )
}