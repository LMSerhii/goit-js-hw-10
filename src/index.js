import axios from 'axios';
import { common } from './common';
import { fetchBreeds } from './helpers/cat-api';
import { fetchCatByBreed } from './helpers/cat-api';
import { createOptions } from './helpers/createOptions';
import { createMarkup } from './helpers/createMarkup';

axios.defaults.headers.common['x-api-key'] = common.API_KEY;

const refs = {
  select: document.querySelector('.breed-select'),
  load: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(arr => {
    refs.select.innerHTML = createOptions(arr);
  })
  .catch(error => console.log(error));

const onSelect = evt => {
  const breedId = evt.target.value;

  fetchCatByBreed(breedId)
    .then(data => {
      refs.catInfo.innerHTML = createMarkup(data);
    })
    .catch(error => console.log(error));
};

refs.select.addEventListener('change', onSelect);
