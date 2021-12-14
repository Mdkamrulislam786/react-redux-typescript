import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import validateProduct from "../fake.api";

export interface Product {
  id: string;
  title: string;
  price: string;
}

export enum ValidationState {
  Fulfilled,
  Pending,
  Reject,
}

export interface ProductSliceState {
  products: Product[];
  validationState?: ValidationState;
  errorMessage?: string;
}

export const addProductAsync = createAsyncThunk(
  "products/addNewProduct",
  async (initialProduct: Product) => {
    const product = await validateProduct(initialProduct);
    return product;
  }
);

const initialProducts: Product[] = [
  {
    id: "1",
    title: "gell",
    price: "30",
  },
  {
    id: "2",
    title: "shampoo",
    price: "70",
  },
  {
    id: "3",
    title: "chanachur",
    price: "60",
  },
  {
    id: "4",
    title: "kitkat",
    price: "50",
  },
];

const initialState: ProductSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: "",
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => ({
      ...state,
      products: [action.payload, ...state.products],
    }),
    removeProduct: (state, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      validationState: ValidationState.Fulfilled,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Reject,
      errorMessage: action.error.message,
    }));
    builder.addCase(addProductAsync.pending, (state, action) => ({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined,
    }));
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = counterSlice.actions;

export default counterSlice.reducer;
