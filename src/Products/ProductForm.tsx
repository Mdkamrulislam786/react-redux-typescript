import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { addProductAsync, Product } from "./product.slice";

const ProductForm: FC = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector(
    (state: RootState) => state.products.errorMessage
  );

  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: "",
  });
  const { id, title, price } = product;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProductAsync(product));
    setProduct({
      id: "",
      title: "",
      price: "",
    });
  };

  return (
    <>
      <h3>Add product form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Id"
          name="id"
          value={id}
          onChange={handleChange}
        />
        <button
          style={{ background: errorMessage ? "red" : "#eee" }}
          type="submit"
        >
          Add
        </button>
        <p style={{ color: "red" }}>{errorMessage ? errorMessage : ""}</p>
      </form>
    </>
  );
};

export default ProductForm;
