const Car = require("mongoose").model("Car");

module.exports = {
  addCarGet: (req, res) => {
    res.render("admin/addCar");
  },
  addCarPost: (req, res) => {
    let newCar = {
      model: req.body.model,
      vehNo: req.body.vehNo,
      price: req.body.price,
      capacity: req.body.capacity,
      creationDate: Date.now(),
    };

    Car.create(newCar).then((obj) => {
      console.log(obj);
      res.redirect("/");
    });
  },
  rmCar: (req, res) => {
    let id = req.params.id;
    Car.findByIdAndRemove(id).then(() => {
      res.redirect("/");
    });
  },
  editCar: (req, res) => {
    let id = req.params.id;
    Car.findById(id).then((foundCar) => {
      res.render("admin/editCar", { foundCar });
    });
  },
  removePage: (req, res) => {
    let searchedCars2 = [];
    Car.find({
      isRented: false,
    }).then((allCars) => {
      for (let car of allCars) {
        searchedCars2.push(car);
      }
      res.render("admin/remove", { searchedCars2 });
    });
  },
  updateCar: (req, res) => {
    let id = req.params.id;
    Car.findById(id).then((foundCar) => {
      foundCar.model = req.body.model;
      foundCar.vehNo = req.body.vehNo;
      foundCar.price = req.body.price;
      foundCar.capacity = req.body.capacity;
      foundCar.save().then(() => {
        res.redirect("/");
      });
    });
  },
};
