const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

window.fetch = jest.fn(fetchSimulator);

describe('2 - Teste a função fecthItem', () => {
  const url = "https://api.mercadolibre.com/items/MLB1615760527";

  it('Verifica se fetchItem é uma função e foi definida', () => {
    expect(typeof fetchItem).toBe('function');
    expect(fetchItem).toBeDefined();
  })

  it('Verifica se fetch foi chamado ao executar a função', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('Verifica o endpoint utilizado na função fetchItem', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('Verifica se o retorno da função fetchItem está correto', async () => {
    const data = await fetchItem('MLB1615760527');
    expect(data).toBe(item);
  })

  it('Verifica se ao chamar a função fetchItem sem argumentos, retorna um erro', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
