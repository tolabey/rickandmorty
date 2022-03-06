import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRickAndMortyCharacters } from "../apis/rickAndMortyApi";
import * as ActionKeys from "../constants/actionKeys";

export const fetchCharacters = createAsyncThunk(
  ActionKeys.fetchCharacters,
  async () => {
    console.log("aa", 222);
    const response = await fetchRickAndMortyCharacters();

    return response;
  }
);

// Define the initial state using that type
const initialState: {
  characters?: any[];
} = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    approveAnImage: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        delete state.characters;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
      });
  },
});

export const {} = charactersSlice.actions;

export default charactersSlice.reducer;
