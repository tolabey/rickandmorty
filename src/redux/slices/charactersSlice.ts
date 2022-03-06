import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateRickAndMortyUrl } from "redux/apis/apiUtil";
import { fetchGet } from "../apis/fetchApi";
import * as ActionKeys from "../constants/actionKeys";

export const fetchCharacters = createAsyncThunk(
  ActionKeys.fetchCharacters,
  async (pageNumber: number) => {
    const url = generateRickAndMortyUrl(pageNumber);

    const response = await fetchGet(url);

    return response;
  }
);

// Define the initial state using that type
const initialState: {
  characters?: any;
  fetchUrl: string;
  activePage: number;
} = {
  fetchUrl: "https://rickandmortyapi.com/api/character?page=1",
  activePage: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

export const { setActivePage } = charactersSlice.actions;

export default charactersSlice.reducer;
