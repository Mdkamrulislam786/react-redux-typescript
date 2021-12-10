import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: number,
    title: string,
    price: number,
}
const initialState: Product[] = [
    {
      id: 1,
      title: "gell",
      price: 30,
    },
    {
      id: 2,
      title: "shampoo",
      price: 70,
    },
    {
      id: 3,
      title: "chanachur",
      price: 60,
    },
    {
      id: 4,
      title: "kitkat",
      price: 50,
    },
  ];

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [ action.payload, ...state]
    },
  },
})

// Action creators are generated for each case reducer function
export const {  addProduct } = counterSlice.actions

export default counterSlice.reducer