const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

window.fetch = jest.fn(fetchSimulator);

describe('1 - Teste a função fecthProducts', () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'

  it("Verifica se fetchProducts é uma função e foi definida", () => {
    expect(typeof fetchProducts).toBe('function');
    expect(fetchProducts).toBeDefined();
  });

  it("Verifica se fetch foi chamado ao executar a função", () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it("Verifica se o endpoint está correto", async () => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it("Verifica se o retorno está correto", async () => {
    const queryResult = await fetchProducts('computador');
    expect(queryResult).toEqual(computadorSearch);
  })

  it("Verifica se levanta um erro 'You must provide an url'", async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  })
});
