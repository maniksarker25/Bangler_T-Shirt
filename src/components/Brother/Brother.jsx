import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const Ring = useContext(RingContext)
    return (
        <div>
            <h1>Brother</h1>
            <p><small>Ring:{Ring}</small></p>
        </div>
    );
};

export default Brother;