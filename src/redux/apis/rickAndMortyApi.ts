import { fetchApi } from "./fetchApi";

export const fetchRickAndMortyCharacters = async () => {
  return fetchApi("https://rickandmortyapi.com/api/character");
};
