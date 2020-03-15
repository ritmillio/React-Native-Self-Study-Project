/*
Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.
*/

const x = 101;
const fizz = 3;
const buzz = 5;
const fizzbuzz = 15;


/* const fizzBuzz = () => for (let i = 1; i < x; i++) {
        if(i%c == 0){
            console.log("FizzBuzz");
        }
        else if(i%b == 0){
            console.log("Buzz");
        }
        else if(i%a == 0){
            console.log("Fizz");
        }console.log(i);*/


function fizzBuzz(){
    for (let i = 1; i < x; i++) {
        if(i%c == 0){
            console.log("FizzBuzz");
        }
        else if(i%b == 0){
            console.log("Buzz");
        }
        else if(i%a == 0){
            console.log("Fizz");
        }console.log(i);
        
    }
}
fizzBuzz();