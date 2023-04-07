import React, { Children } from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children,hasFriend,ring}) => {
    return (
        <div>
            <h1>Cusin</h1>
            <p><small>{children}</small></p>
            { hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;