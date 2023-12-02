const createMarkup = arrey => {
  const markup = arrey
    .map(el => {
      const img_url = el.url;
      const name = el.breeds[0].name;
      const description = el.breeds[0].description;
      const temperament = el.breeds[0].temperament;

      return `<img src="${img_url}" alt="${name}" width="300" />
              <h2>${name}</h2>
              <p>${description}</p>
              <p><span>Temperament: </span>${temperament}</p>`;
    })
    .join();
  return markup;
};

export { createMarkup };
