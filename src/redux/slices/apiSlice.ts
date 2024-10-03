import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../types/ICharacter";

// Define a type for the slice state
interface IInitialState {
  characters: ICharacter[];
}

// Define the initial state using that type
const initialState: IInitialState = {
  characters: [],
};

export const apiSlice = createSlice({
  name: "apiSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = apiSlice.actions;

export default apiSlice.reducer;
