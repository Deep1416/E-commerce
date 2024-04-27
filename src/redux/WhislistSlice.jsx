import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const whislist = createSlice({
  name: "whislist",
  initialState: [],
  reducers: {
    addToWhislist: (state, action) => {
      // console.log(state , action.payload);
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex];
      } else {
        state.push({ ...action.payload});
      }
    },
    handleRemovewhislist: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    // handleFilter :(state , action) =>{
    //   return
    // }
  },
});

export const { addToWhislist, handleRemovewhislist } = whislist.actions;

export default whislist.reducer;
