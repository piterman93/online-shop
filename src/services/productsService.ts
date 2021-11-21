export const fetchCategories = async () => {
  return fetch(`https://fakestoreapi.com/products/categories`)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const fetchProducts = async () => {
  return fetch(`https://fakestoreapi.com/products`)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
