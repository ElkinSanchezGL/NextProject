import api from "./api";

export const getCharacterNames = async (): Promise<string[]> => {
  const response = await api.get('/characters/en');
  return response.data.map((char: any) => char.name);
};