import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { addProduct } from "./productSlice";

interface ProductsListProps {}

const ProductsList: FC<ProductsListProps> = (props) => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}: {product.price}
          </span>
        </div>
      ))}
      <button
        onClick={() => dispatch(addProduct({ id: 1, title: "new", price: 8 }))}
      >
        Add
      </button>
    </div>
  );
};

export default ProductsList;
