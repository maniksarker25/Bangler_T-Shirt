import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Anty from "../Anty/Anty";
import "./Grandpa.css";
// context api use
export const RingContext = createContext("Gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "Diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <p>Has Money:{money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Anty ring={ring}></Anty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

// context api
/* 
* 1.Create a context and export
* 2.Create a provider and pass a value
* 3. use useContext to receive the value


*/
