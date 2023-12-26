//Take input from the user
const prompt = require('prompt-sync')();
var year = prompt("Enter the year: ");
var parseyear = parseInt(year);
//Determine whether the year is a leap year or not.
if (parseyear % 4 == 0){
    console.log(parseyear, " is a leap year");
}
else{
    console.log(parseyear," is not a leap year");
}