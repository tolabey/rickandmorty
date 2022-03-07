export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ILocation {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface ICharacters {
  info: IInfo;
  result: ICharacter[];
}

export interface ILocations {
  info: IInfo;
  result: ILocation[];
}
