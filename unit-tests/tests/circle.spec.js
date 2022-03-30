const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('a')).toBeFalsy();
    expect(typeof circle(1)).toBe('object');

    expect(Object.entries(circle(2))).toHaveLength(3);
    
    expect(circle()).toBeFalsy();

    expect(circle(2).circumference).toBeCloseTo(12.56);

    expect(circle(3).radius).toBeCloseTo(3)
    expect(circle(3).area).toBeCloseTo(28.26)
    expect(circle(3).circumference).toBeCloseTo(18.84)
  });
});
