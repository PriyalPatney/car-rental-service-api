const Car = require("mongoose").model("Car");
const User = require("mongoose").model("User");
const RentedCarInfo = require("mongoose").model("RentedCarInfo");

module.exports = {
  viewDetails: (req, res) => {
    //we take from the URL the id of the selected car "carDetails / 59e7aeec76630b07606369ac" and in routs I gave it the path "/ carDetails /: id"
    let id = req.params.id;
    Car.findById(id).then((foundCar) => {
    //   res.render("carDetails", { foundCar });
    res.json(foundCar);
    });
  },
  takeCar: (req, res) => {

    let id = req.body.carId;
    let userId = req.user._id; //req.user takes logged-in user from passport
    let RentedCarInfoObj = {};
    let reserveDate = {
      dateFrom: req.body.dateFrom.substring(0,10),
      dateTo: req.body.dateTo.substring(0,10),
    };
    User.findById(userId).then((user) =>{
        user.issueDate = req.body.dateFrom;
        user.returnDate = req.body.dateTo;
        user.save();
    })

    Car.findById(id).then((foundCar) => {
      User.findById(userId).then((user) => {
        user.rentedCars.push(foundCar._id);
        user.rentedCars.push(foundCar._id);
        user.rentedCars.push(foundCar._id);
        user.save().then(() => {
          foundCar.isRendet = true;
          foundCar.reserved.push(reserveDate);
          foundCar.save().then(() => {
            RentedCarInfoObj = {
              car: foundCar._id,
              user: userId,
            //   date: req.body.dateOfRental,
            issueDate: req.body.dateFrom,
            returnDate: req.body.dateTo,
            //   days: req.body.daysOfRental,
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
