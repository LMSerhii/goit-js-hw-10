import { refs } from './selectors';

const axiosError = error => {
  refs.load.classList.remove('is-active');
  refs.error.classList.add('is-active');
  console.log(error.message);
};

export { axiosError };
