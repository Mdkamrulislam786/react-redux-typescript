import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addProduct } from "./productSlice";

interface ProductsListProps {}

const ProductsList: FC<ProductsListProps> = (props) => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
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
