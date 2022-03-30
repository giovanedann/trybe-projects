const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ]);

    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);

    expect(typeof productDetails('a', 'b')[0]).toBe('object');
    expect(typeof productDetails('a', 'b')[1]).toBe('object');

    expect(productDetails('a', 'b a')[0].name).toBe('a');
    expect(productDetails('a', 'b a')[1].name).toBe('b a');

    expect(productDetails('suco', 'goiaba branca')[0].details.productId).toBe('suco123');
    expect(productDetails('suco', 'goiaba branca')[1].details.productId).toBe('goiaba branca123');
  });
});
