const Car = require("mongoose").model("Car");
const User = require("mongoose").model("User");
const RentedCarInfo = require("mongoose").model("RentedCarInfo");

module.exports = {
  viewDetails: (req, res) => {
    let id = req.params.id;
    Car.findById(id).then((foundCar) => {
      res.json(foundCar);
    });
  },
  takeCar: (req, res) => {
    let id = req.body.carId;
    let userId = req.user._id;
    let RentedCarInfoObj = {};
    let reserveDate = {
      dateFrom: req.body.dateFrom.substring(0, 10),
      dateTo: req.body.dateTo.substring(0, 10),
    };
    User.findById(userId).then((user) => {
      user.issueDate = req.body.dateFrom;
      user.returnDate = req.body.dateTo;
      user.save();
    });

    Car.findById(id).then((foundCar) => {
      User.findById(userId).then((user) => {
        user.rentedCars.push(foundCar._id);
        user.rentedCars.push(foundCar._id);
        user.rentedCars.push(foundCar._id);
        user.save().then(() => {
          foundCar.isRented = true;
          foundCar.reserved.push(reserveDate);
          foundCar.save().then(() => {
            RentedCarInfoObj = {
              car: foundCar._id,
              user: userId,
              issueDate: req.body.dateFrom,
              returnDate: req.body.dateTo,
            };

            console.log(foundCar);
            RentedCarInfo.create(RentedCarInfoObj).then(() => {
              res.redirect("/");
            });
          });
        });
      });
    });
  },
};
