import React from 'react';
import Cusin from '../Cusin/Cusin';

const Anty = ({ring}) => {
    return (
        <div>
           <h1>Anty</h1>
           <section className='flex'>
            <Cusin>Abir</Cusin>
            <Cusin ring={ring}  hasFriend={true}>Nibir</Cusin>
           </section>
        </div>
    );
};

export default Anty;