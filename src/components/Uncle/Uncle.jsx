import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
           <h1>Uncle</h1>
           <p><small>GrandPa Money:{money}</small></p>
           <button onClick={()=>setMoney(money + 1000)}>Send 1000 Taka</button>
           <section className='flex'>
            <Cusin>Nabil</Cusin>
            <Cusin>Nabila</Cusin>
           </section>
        </div>
    );
};

export default Uncle;