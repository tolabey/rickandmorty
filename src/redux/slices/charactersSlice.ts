import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacterUrl } from "redux/apis/apiUtil";
import { getLocationUrl } from "redux/apis/apiUtil";
import { fetchGet } from "../apis/fetchApi";
import * as ActionKeys from "../constants/actionKeys";

export const fetchCharacters = createAsyncThunk(
  ActionKeys.fetchCharacters,
  async (pageNumber: number) => {
    const url = getCharacterUrl(pageNumber);

    const response = await fetchGet(url);

    return response;
  }
);
export const fetchLocation = createAsyncThunk(
  ActionKeys.fetchLocation,
  async () => {
    const url = getLocationUrl();

    const response = await fetchGet(url);

    return response;
  }
);

// Define the initial state using that type
const initialState: {
  characters?: any;
  activePage: number;
  locations?: any;
} = {
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
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.locations = action.payload;
      });
  },
});

export const { setActivePage } = charactersSlice.actions;

export default charactersSlice.reducer;
