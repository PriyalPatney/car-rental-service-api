module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: 'mongodb://localhost:27017/car-renting-data'
        
    },
    production: {
        port:process.env.PORT,
        dbPath: process.env.DATABASEURL

    }
};