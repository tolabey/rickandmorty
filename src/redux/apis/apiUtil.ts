export const getCharacterUrl = (page: number) => {
  return `https://rickandmortyapi.com/api/character?page=${page}`;
};

export const getLocationUrl = () => {
  return "https://rickandmortyapi.com/api/location";
};
