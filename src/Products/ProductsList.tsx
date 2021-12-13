import React, { FC } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../Cart/cart.slice";
import { RootState, useAppDispatch } from "../store";
import { Product, removeProduct } from "./product.slice";

interface ProductsListProps {}

const ProductsList: FC<ProductsListProps> = (props) => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  const removeFromStore = (id: number) => dispatch(removeProduct(id));
  const addToCartandler = (product: Product) => dispatch(addToCart(product));

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}: {product.price}
          </span>
          <button onClick={() => addToCartandler(product)}>Add to cart</button>
          <button onClick={() => removeFromStore(product.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
