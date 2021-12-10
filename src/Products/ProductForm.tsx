import React from "react";

const ProductForm = () => {
  return (
    <>
      <h3>Add product form</h3>
      <form>
        <input placeholder="Title" />
        <input placeholder="Price" />
        <input placeholder="Id" />
        <button>Add</button>
      </form>
    </>
  );
};

export default ProductForm;
