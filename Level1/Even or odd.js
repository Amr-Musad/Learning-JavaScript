//This program generates a random integer number and tests whether it is even or odd.


//Genterating the random integer number
var number = Math.random();
number = parseInt((number*10)/1);
//Testing if the number is odd or even
if ((number % 2) == 0){
    console.log(number," is an even number");
}
else{
    console.log(number," is an odd number" );
}
