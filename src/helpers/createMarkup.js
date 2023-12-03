const createMarkup = arrey => {
  if (!arrey.length) {
    const markup = `<img src="https://assets.materialup.com/uploads/874a163f-e28c-48f0-bc4f-68349595527c/preview.jpg" alt="404" width="400">
                    <p style="display:flex; align-items:center; justify-content:center; width: 600px">PAGE NOT FOUND. SORRY!!!</p>`;
    return markup;
  }
  const markup = arrey
    .map(el => {
      const img_url = el.url;
      const name = el.breeds[0].name;
      const description = el.breeds[0].description;
      const temperament = el.breeds[0].temperament;

      return `<img src="${img_url}" alt="${name}" width="300" />
              <div>
                <h2>${name}</h2>
                <p>${description}</p>
                <p><span>Temperament: </span>${temperament}</p>
              </div>`;
    })
    .join();
  return markup;
};

export { createMarkup };
