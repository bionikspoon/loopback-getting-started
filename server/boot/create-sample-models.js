module.exports = function createSampleModels(server) {
  server.dataSources.mysqlDS.automigrate('CoffeeShop', function (err) {
    if (err) throw err;

    server.models.CoffeeShop.create([
      { name: 'Bel Cafe', city: 'Vancouver' },
      { name: 'Three Bees Coffee House', city: 'San Mateo' },
      { name: 'Caffe Artigiano', city: 'Vancouver' },
    ], createCB);

    function createCB(err, coffeeShops) {
      if (err) throw err;

      console.log('Models created: \n', coffeeShops);
    }

  });
};
