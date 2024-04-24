import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./Slice.jsx"
export default configureStore({
  reducer: {
    cartSlice 
  }
})