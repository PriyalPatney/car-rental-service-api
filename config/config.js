module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: 'mongodb://localhost:27017/car-renting-data'
        //  dbPath: 'mongodb://car:carsoftoday@cluster0-hyqgi.mongodb.net/test?retryWrites=true&w=majority'
    },
    production: {
        port:process.env.PORT,
        dbPath: process.env.DATABASEURL
        // dbPath: 'mongodb+srv://car:carsoftoday@cluster0-hyqgi.mongodb.net/test?retryWrites=true&w=majority'
    }
};