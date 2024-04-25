import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


export const whislist = createSlice({
  name: "whislist",
  initialState: [],
  reducers: {
    addToWhislist: (state, action) => {
        console.log(state , action.payload);
      return [...state, action.payload];
    },
    handleRemovewhislist:(state , action) =>{
        return state.filter(item => item.id !== action.payload.id);
    }
  },
});

export const { addToWhislist ,handleRemovewhislist } = whislist.actions;

export default whislist.reducer;
