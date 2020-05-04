const Car = require("mongoose").model("Car");

module.exports = {
  index: (req, res) => {
    let page = Number(req.query.page);
    if (Object.keys(req.query).length === 0) {
      page = 0;
    }
    console.log(req.query);
    let prevPage = page - 1;
    let nextPage = page + 1;

    Car.find({})
      .sort({ year: -1 })
      .skip(page * 5)
      .limit(5)
      .then((allCar) => {
        if (prevPage < 0) prevPage = 0;

        let pageObj = {
          prevPage: prevPage,
          nextPage: nextPage,
        };
        // res.render('home/index', { allCar, pageObj })
        res.json(allCar);
      });
  },
  searchingModel: (req, res) => {
    let searchingModel = req.query.model.toLowerCase();
    console.log(searchingModel);
    let searchedCars = [];

    Car.find({}).then((allCars) => {
      for (let car of allCars) {
        car.model = car.model.toLowerCase();
        let model = car.model.split(/\s+/);
        if (model.indexOf(searchingModel) >= 0) {
          car.newModel = car.model.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
          });
          searchedCars.push(car);
        }
      }
      res.json(searchedCars);
    });
  },
  available: (req, res) => {
    let searchedCars1 = [];
    Car.find({
      reserved: {
        $not: {
          $elemMatch: {
            dateFrom: { $lt: req.query.dateTo },
            dateTo: { $gt: req.query.dateFrom },
          },
        },
      },
    }).then((allCars) => {
      for (let car of allCars) {
        searchedCars1.push(car);
      }
      res.json(searchedCars1);
    });
  },
};
