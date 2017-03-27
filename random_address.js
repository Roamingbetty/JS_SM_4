
//Assignment 2: Random Address Generator**
//- Write a script that can generate random addresses
//- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
//- Your script should randomly select one item from each of these arrays and then use them to construct a random address
//- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
//- `=> 34578 Dolphin Street, Wonka NY, 44506`/


var streetNumber = [Math.floor(Math.random() * 9000) + 1000];
var streetName = ['Whitsett Ave', 'Laural Canyon Ave', 'Moorepark Ave', 'Sunset Blvd', 'Hollywood Blvd'];
var cityName = ['Los Angeles', 'Chicago ', 'Denver', 'London', 'Hong Kong'];
var stateName = ['MI', 'CA', 'NY', 'CO', 'NE'];
var zipcode = [Math.floor(Math.random() * 90000) + 10000];
var streetNumber = streetNumber [Math.floor(Math.random() * streetNumber.length)];
var streetName = streetName [Math.floor(Math.random() * streetName.length)];
var cityName = cityName [Math.floor(Math.random() * cityName.length)];
var stateName = stateName [Math.floor(Math.random() * stateName.length)];
console.log(streetNumber, streetName ,cityName ,stateName,zipcode);
