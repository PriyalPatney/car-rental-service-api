# car-rental-service-api

postman collections link:
https://www.getpostman.com/collections/cf22bb2eee606b7a39cf

Project link:
https://vast-wave-52199.herokuapp.com/

## Admin routes:- 
(username = Admin, password = Admin)

1. https://vast-wave-52199.herokuapp.com/login  (get - login page)
1. https://vast-wave-52199.herokuapp.com/login  (post - login page)
1. https://vast-wave-52199.herokuapp.com/addCar (get - add car page)
1. https://vast-wave-52199.herokuapp.com/addCar  (post - add car)
1. https://vast-wave-52199.herokuapp.com/edit/{{carId}} (get - update page)({{carId}} == "_id" value from the response)
1. https://vast-wave-52199.herokuapp.com/edit/{{carId}}  (put - update name)
1. https://vast-wave-52199.herokuapp.com/rmCar/{{carId}}  (delete - delete the car)

## User routes:-

1. https://vast-wave-52199.herokuapp.com/register (get - register new user)
1. https://vast-wave-52199.herokuapp.com/register  (post - register new user)
1. https://vast-wave-52199.herokuapp.com/login  (post - login)
1. https://vast-wave-52199.herokuapp.com/searchingModel?model={{model}} (get - searching car by model)({{model}} == name of the car)
1. https://vast-wave-52199.herokuapp.com/available?dateFrom=2020-04-01&dateTo=2020-06-07 (get - availibility on specific date range)
1. https://vast-wave-52199.herokuapp.com/carDetails/:id (get - rent car)
1. https://vast-wave-52199.herokuapp.com/takeCar (post - rent car)
1. https://vast-wave-52199.herokuapp.com/profil/:id (get - rent history )
