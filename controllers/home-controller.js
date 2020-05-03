const Car = require('mongoose').model('Car')

module.exports = {
    index: (req, res) => {
        let page = Number(req.query.page)
        if(Object.keys(req.query).length === 0){
            page = 0
        }
        console.log(req.query)
        let prevPage = page - 1
        let nextPage = page + 1
        /*w/e charge all the cars
        .we only take those whose 'isRendet' is false
        .sort
        .were cars depending on which page we are on (we take it from the query string)
        .Lomit
        */
        Car.find({}).sort({ year: -1 }).skip(page * 5).limit(5).then(allCar => {

            if (prevPage < 0) prevPage = 0

            let pageObj = {
                prevPage: prevPage,
                nextPage: nextPage
            }
            // res.render('home/index', { allCar, pageObj })
            res.json(allCar);
        })
    },
    searchingModel: (req, res) => {
        let searchingModel = req.query.model.toLowerCase()
        console.log(searchingModel)
        let searchedCars = []
        
        Car.find({}).then(allCars => {
            for (let car of allCars) {
                car.model = car.model.toLowerCase()
                let model = car.model.split(/\s+/)
                if (model.indexOf(searchingModel) >= 0) {
                    //capitalize model of car
                    car.newModel = car.model.replace(/\b\w/g, function(l){ return l.toUpperCase() })
                    searchedCars.push(car)
                }
            }

            // res.render('query/searchingModel', { searchedCars })
            res.json(searchedCars);
        })
    },
    available: (req, res) => {
        let searchedCars1 = []
        Car.find({
            // "reserved.dateFrom": { $in: "2020-05-02" }
            reserved: { 
                $not: {
                    //  $elemMatch: {dateFrom: {$lt:new Date("2020-05-02")}, dateTo:  {$gt:new Date("2020-05-03")}}
                    $elemMatch: {dateFrom: {$lt: req.query.dateTo}, dateTo: {$gt: req.query.dateFrom}}
                }
            }
        }
        ).then((allCars)=>{
            for (let car of allCars)
            {
                searchedCars1.push(car);
            }
            // res.render('query/available', {searchedCars1})
            res.json(searchedCars1);
        }
        );
       
    },
    contacts: (req, res) => {
        res.render('home/contact');
    },
    about: (req, res) => {
        res.render('home/about');
    },
};