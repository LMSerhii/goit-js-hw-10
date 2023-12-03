import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';
import { refs } from '../helpers/selectors';

const createSelect = array => {
  new SlimSelect({
    select: refs.select,
    data: array.map(({ id, name }) => {
      return { value: id, text: name };
    }),
    settings: {
      showSearch: false,
      placeholderText: 'Вибери котика',
    },
  });
};

export { createSelect };
