import React, { useMemo } from "react";

import "components/card/character-card.scss";
import { ICharacter, ILocation } from "redux/types/dataTypes";

interface CharacterCard {
  character: ICharacter;
  location?: ILocation;
  onClick?: () => void;
}

export const CharacterCard = (props: CharacterCard) => {
  const { onClick, character, location } = props;
  console.log("location", location);
  const characterInfo = useMemo(() => {
    return [
      {
        label: "Name: ",
        value: character.name,
      },
      {
        label: "Gender: ",
        value: character.gender,
      },
      {
        label: "Species: ",
        value: character.species,
      },
      {
        label: "Status: ",
        value: character.status,
      },
      {
        label: "Type: ",
        value: character.type,
      },
    ];
  }, [character]);

  const locationInfo = useMemo(() => {
    return [
      {
        label: "Name: ",
        value: location?.name,
      },
      {
        label: "Dimension: ",
        value: location?.dimension,
      },
      {
        label: "Residents number: ",
        value: location?.residents?.length,
      },
    ];
  }, [location]);

  return (
    <div className="character-card" onClick={onClick}>
      <div className="character-card__character-images">
        <img src={character?.image} />

        <div className="character-info">
          <div className="character-info-wrapper">
            <h3>Character Info</h3>
            {characterInfo.map((info) => {
              return (
                <div className="info-wrapper">
                  <div className="info__label">{info.label}</div>
                  <div className="info__value">{info.value}</div>
                </div>
              );
            })}
          </div>

          <div className="location-info">
            <h3>Location Info</h3>
            {locationInfo.map((info) => {
              return (
                <div className="info-wrapper">
                  <div className="info__label">{info.label}</div>
                  <div className="info__value">{info.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
