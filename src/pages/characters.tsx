import React, { useEffect, useState } from "react";

import { Pagination } from "components/pagination/pagination";
import { Header } from "components/header/header";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  fetchCharacters,
  fetchLocation,
  setActivePage,
} from "redux/slices/charactersSlice";
import { CharacterCard } from "components/card/character-card";

import "pages/characters.scss";
import { ILocation } from "redux/types/dataTypes";

export const Characters = () => {
  const [mappedLocations, setMappedLocations] = useState<
    Record<string, ILocation>
  >({});
  const dispatch = useAppDispatch();

  const activePage = useAppSelector((state) => state.characters.activePage);
  const totalPages = useAppSelector(
    (state) => state.characters.characters?.info.pages
  );
  const totalResult = useAppSelector(
    (state) => state.characters.characters?.info.count
  );

  const characters = useAppSelector(
    (state) => state.characters.characters?.results
  );

  const locations = useAppSelector((state) => state.characters.locations);

  useEffect(() => {
    dispatch(fetchCharacters(activePage));
  }, [activePage]);

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  useEffect(() => {
    setMappedLocations(generateMappedLocations());
  }, [locations]);

  const generateMappedLocations = (): Record<string, ILocation> => {
    return locations?.results.reduce(
      (previousValue: ILocation, currentValue: ILocation) => {
        return { ...previousValue, [currentValue.name]: currentValue };
      },
      {}
    );
  };

  console.log("mapped", generateMappedLocations());

  return (
    <div className="characters">
      <Header info={`${totalResult} Total Card`} />
      <div className="characters-cards-wrapper">
        {characters?.map((character: any) => {
          return (
            <CharacterCard
              key={character.created}
              character={character}
              location={mappedLocations?.[character.location.name]}
            />
          );
        })}
      </div>
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
