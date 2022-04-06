const fetchProducts = async (queryParam) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${queryParam}`);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
