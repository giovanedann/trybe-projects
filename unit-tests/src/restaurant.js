const createMenu = (object) => {
    const newObj = {
    fetchMenu: () => object,
    consumption: [],
    order: (item) => newObj.consumption.push(item),
    pay: () => {
      let [total, { food, drink }] = [0, object];
      newObj.consumption.forEach((item) => { 
        if (food[item] || drink[item]) { total += food[item] || drink[item]; }
      });
      return total * 1.1;
    },
  };

   return Object.assign(newObj, object); 
  };

module.exports = createMenu;
