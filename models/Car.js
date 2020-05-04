const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    model: { type: mongoose.Schema.Types.String, required: true },
    vehNo: { type: mongoose.Schema.Types.String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    isRented: { type: Boolean, required: true, default: false },
    creationDate: { type: Number, required: true },
    reserved: [
      {
        dateFrom: { type: Date, required: true },
        dateTo: { type: Date, required: true },
      },
    ],
  },
  {
    usePushEach: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
