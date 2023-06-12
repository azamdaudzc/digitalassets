import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: { 
    setLayout: (state, action) => {
        return { theme: action.payload };
      }, 
  },
});

 
const { reducer, actions } = themeSlice;

export const { setLayout  } = actions
export default reducer;