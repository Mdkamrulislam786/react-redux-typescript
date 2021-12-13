import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../store";
import { addProduct, Product } from "./product.slice";

const ProductForm: FC = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
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
    dispatch(addProduct(product));
    console.log(product);
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
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default ProductForm;
