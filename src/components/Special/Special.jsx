import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const anti = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p><small>Ring:{anti}</small></p>
        </div>
    );
};

export default Special;