import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { getTotalPrice, removeFromCart } from "./cart.slice";

const Cart: FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart);
  const totalPrice = useSelector(getTotalPrice);
  const handleRemoveFromCart = (id: string) => dispatch(removeFromCart(id));

  return (
    <div>
      <h2>Cart</h2>
      <h5>totalPrice: {totalPrice}</h5>
      {cartProducts.map((product) => {
        return (
          <div key={product.id}>
            <span> {product.title} </span>
            <span> {product.price} </span>
            <span> {product.amount} </span>
            <button onClick={() => handleRemoveFromCart(product.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
