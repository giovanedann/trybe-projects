const createMenu = require("../src/restaurant");

describe("10 - Implemente os casos de teste e a função `createMenu`", () => {
  describe("Verifica se a função `createMenu` tem o comportamento esperado", () => {
    const testObject = {
      food: { coxinha: 6.3, risoles: 5.5, torcida: 3.3 },
      drink: { agua: 5.3, suco: 7.5, coca: 5.7 },
    }
    const returnedObject = createMenu(testObject);

    it("Verifies the return of the function and if the function exists", () => {
      expect(returnedObject).toHaveProperty("fetchMenu");
      expect(typeof returnedObject.fetchMenu).toBe("function");
    });

    it("Verifies the properties of the object returned in the fetchMenu() function", () => {
      expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {}, });
      expect(returnedObject.fetchMenu()).toEqual(testObject);});

    it ('Verifies the return of the consumption propertie', () => {
      expect(returnedObject.consumption).toEqual([]);
    });

    it ('Verifies the functionality of the order() function', () => {
      returnedObject.order('coxinha');
      expect(returnedObject.consumption).toEqual(['coxinha']);
      returnedObject.order('risoles');
      returnedObject.order('torcida');
      returnedObject.order('coxinha');
      returnedObject.order('coca');
      expect(returnedObject.consumption).toEqual(['coxinha', 'risoles', 'torcida', 'coxinha', 'coca']);
      expect(returnedObject.consumption).toHaveLength(5);
    });

    it ('Verifies if the pay() function works properly', () => {
      expect(returnedObject.pay()).toBeCloseTo(27.1 * 1.1);
    })
  });
});
