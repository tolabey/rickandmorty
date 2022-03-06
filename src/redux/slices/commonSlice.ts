import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  isLoading: boolean;
} = {
  isLoading: false,
};

export const exampleSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state): void => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state): void => {
          state.isLoading = true;
        }
      );
  },
});

export default exampleSlice.reducer;
