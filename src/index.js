import axios from 'axios';
import { common } from './common';
import { refs } from './helpers/selectors';
import { fetchBreeds } from './helpers/cat-api';
import { fetchCatByBreed } from './helpers/cat-api';
// import { createOptions } from './helpers/createOptions';
import { createSelect } from './helpers/createSelect';
import { createMarkup } from './helpers/createMarkup';
// import { axiosError } from './helpers/errors';
import { notiflixError } from './helpers/errors';

axios.defaults.headers.common['x-api-key'] = common.API_KEY;
refs.load.innerHTML = '<span class="loader"></span>';

fetchBreeds()
  .then(arr => {
    refs.load.classList.remove('is-active');
    createSelect(arr);
    // refs.select.innerHTML = createOptions(arr);
  })
  .catch(error => notiflixError(error));

const onSelect = evt => {
  refs.error.classList.remove('is-active');
  refs.catInfo.classList.remove('is-active');
  refs.load.classList.add('is-active');

  const breedId = evt.target.value;

  fetchCatByBreed(breedId)
    .then(data => {
      refs.load.classList.remove('is-active');
      refs.catInfo.classList.add('is-active');
      refs.catInfo.innerHTML = createMarkup(data);
    })
    .catch(error => notiflixError(error));
};

refs.select.addEventListener('change', onSelect);
