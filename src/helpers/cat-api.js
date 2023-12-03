import axios from 'axios';
import { common } from '../common';

export const fetchBreeds = () => {
  const url = `${common.BASE_URL}breeds`;
  return axios.get(url).then(response => response.data);
};

export const fetchCatByBreed = breedId => {
  const searchParams = new URLSearchParams({
    breed_ids: breedId,
  });
  const url = `${common.BASE_URL}images/search?${searchParams}`;
  return axios.get(url).then(response => response.data);
};
