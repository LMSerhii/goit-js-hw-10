const createOptions = arrey => {
  if (!arrey) {
    return;
  }
  const options = arrey
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  return options;
};

export { createOptions };
