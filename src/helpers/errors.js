import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './selectors';

const axiosError = error => {
  refs.load.classList.remove('is-active');
  refs.error.classList.add('is-active');
  console.log(error.message);
};

const notiflixError = error => {
  refs.load.classList.remove('is-active');
  Notify.failure(refs.error.textContent);
  console.log(error.message);
};
export { axiosError, notiflixError };
