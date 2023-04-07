import React from "react";
import './Cart.css'

const Cart = ({ cart,handleRemoveFromCart }) => {
  let message ;
  if(cart.length === 0){
    message = <p>Please add some products!!</p>
  }
  else{
    message = <div>
      <p>Thanks For wasting money!!!</p>
    </div>
  }
  return (
    <div>
      <h1 className={cart.length === 0?'purple':'red'}>Order summary:{cart.length}</h1>
      <div className="name">
        {cart.map((tshirt) => (
          <h4 key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)} className="delete-btn">x</button></h4>
        ))}
      </div>
      {message}
    </div>
  );
};

export default Cart;

// Conditional rendering --------
/* 
* 1. use if else to set a variable that will contain a element
* 2. Ternary : condition ? 'for true:'false'
* 3.Logical && if the condition is true than the next thing is displayed
* Logical || if the condition is false then the next thing is displayed

*/
