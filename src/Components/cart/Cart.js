import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../CartItems";
import "./cart.css"


function Cart() {

  const cartIProduct= useSelector(state => state.cart)

  const total = cartIProduct.reduce((p, c) => {
    return p + c.price*c.cartQuantity
  },0)


  return (
    <>
      <div className="cart-container">
        <div className="cart-items">   

          {
            cartIProduct.map(cartItem => <CartItems key={cartItem.id} cartItem={cartItem} />)
          }

        </div>
        <div className="bill-section">
          <h1>
            Total Amount : <br /> <br /> ${total.toFixed(2)}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
