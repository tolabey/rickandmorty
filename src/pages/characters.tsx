import React, { useEffect } from "react";

import { Pagination } from "components/pagination/pagination";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchCharacters, setActivePage } from "redux/slices/charactersSlice";

export const Characters = () => {
  const dispatch = useAppDispatch();

  const activePage = useAppSelector((state) => state.characters.activePage);
  const totalPages = useAppSelector(
    (state) => state.characters.characters?.info.pages
  );

  useEffect(() => {
    dispatch(fetchCharacters(activePage));
  }, [activePage]);

  return (
    <div className="characters">
      <Pagination
        totalPages={totalPages}
        activeIndex={activePage}
        setActiveIndex={(index: number) => {
          dispatch(setActivePage(index));
        }}
      />
    </div>
  );
};
