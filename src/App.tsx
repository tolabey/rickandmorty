import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "redux/hooks";

import { fetchCharacters } from "redux/slices/charactersSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("aaa");
    dispatch(fetchCharacters());
  }, []);
  return <div className="App">aa</div>;
}

export default App;
