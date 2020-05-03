module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: 'mongodb://localhost:27017/car-renting-data'
    },
    production: {
        port:3000,
        dbPath: 'mongodb+srv://car:carsoftoday@cluster0-hyqgi.mongodb.net/test?retryWrites=true&w=majority'
    }
};