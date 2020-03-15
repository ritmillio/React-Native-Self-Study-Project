// JS Syntax -- this is a single line comment
var x = x,y,z;
x = 5 ; 
y = 6;
//Strings
var myStr = "HelloWorld";

/**
 * This is a multi-line comment
 * JS operators
 * +
 * -
 * *
 * /
 * assign values to variables =
 */

//Js variables adding-- much like algebra
var price1 = 5;
var price2 = 10;
var total = price1 + price2;
//using console.log to write out total price
console.log(total);

// one statement , many variables
//totalprice assigne the value from total (line 21)
var person = "John" , carName = "Volvo" , totalprice = total;

//Concatenate strings together
var txt1 = "John" , txt2 = "Doe";
var txt3 = txt1 + " " + txt2;

// Javascript comparison operators
// == equal to 
// === equal value and equal type
// != not equal
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than or equal
// <= less than or equal
// ? ternary operator (frequently used as a shortcut for the if statement, talk about it more later)

// Javascript logical operators
// && and
// || or
// ! not

/* 
Javascript Arithmetic Operators

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus
++ Increment
-- Decrement
** Exponentiation (ES6)
*/

// JS Data Types
var dataType; // dataType is undefiend
dataType = 5; // dataType is a number
dataType = "John"; // dataType is a String

// JS Arrays
var array1 = ["a" , "b" , "c" , "d"];
//JS Object 
var objectPerson = {
    firstName: "Zoltan",
    lastName: "Fodor",
    age: 22,
    gender: "male"
};

// the typeof Operator --> find the type of a JS variable
typeof ""; // String

// JS null
// null is nothing , it is suppose to be something that does not exist
// in javascript the data type of null is an object
//different between Undefiend and null --> undefiend and null are equal in value but different in type

// --> emptying objects 
objectPerson = null;

// Javascript Functions 
// Designed to performe a particular task , js functions are executed when something invokes it (calls it)
function myFunction(p1,p2) {
    return p1 + p2;
} // myFunction takes 2 parameter -p1,p2 and returns there sum

// call function 
myFunction(1,5);

// JS Objects
var carObject = {
    type: "Fiat",
    model: "500",
    color: "white"
};
// can access carObject properties by calling like this -->
console.log(carObject.color + " " + carObject.model + " " + carObject.type);
// object can also have methods
var person1 = {
    firstName: "Zoltan",
    lastName: "Fodor",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
}
// calling person1 object function 
var fullNamePersonObj;
fullNamePersonObj = person1.fullName()
//writing out fullname object
console.log(fullNamePersonObj);

// JS Strings
    // string length --> gives back the lenght of a string
    // string indexOf() --> returns the index of (the position of) the first occurence of a specified text in a string
    // lastIndexOf() --> returns the index of the last occurence of a specified text in a string
    // search() --> method searches a string for a specified value and returns the position of the match
    // slice() --> extracts a part of a string and returns the extracted part in a new string
    // substr() --> similar to slice , difference is that the second parameter specifies the LENGHT of the extracted part.
    // replace() --> replace a specified value with another value in a string
    // toUpperCase() --> string converted to upper case
    // toLowerCase() --> string converted to lower case
    // concat() --> joins two or more strings 
    // trim() --> removes whitespace from both sides of a string
    // charCodeAt() returns the unicode of the character at a specified index in a string
    // property access (ES5)
    // split() --> a string can be converted to an array with the split() method
var txt4 = "ASDFASDFASFAKDSFALKDSJFAFAFASDFASDF AA ";
var sln = txt4.length;
var pos = txt4.indexOf("A"); // counts the position from 0 (not a surprise :D)
var posLast = txt4.lastIndexOf("A");
var posSearch = txt4.search("ASD");
var posSlice = txt4.slice(3,5); // between 3th char and 5th char
var posSubString = txt4.substr(3,5); // (from 3th char , 5 character long)
var posReplace = txt4.replace("A" , "M"); // it will replace all A to M
var posUpperCase = txt4.toUpperCase();
var posLowerCase = txt4.toLowerCase();
var posConcat = txt4.concat(" " , sln) // output txt4 + " " + sln 
var posTrim = txt4.trim();
var posCharCodeAt = txt4.charCodeAt(0);
var posPropAccess = txt4[0]; // returns A
var posSplit = txt4.split(" ");

/* Difference between search() and indexOf(), they accept the same arguments
, but there are some diff. --> search() method cannot take a sexond start position argument
 indexOf() --> cannot take powerful search values (regular expressions) - regex
 */

//JS Numbers 
const num1 = 3.14; // number with decimals , --> const(ES6)
var num2 = 123e5; // 12300000
var num3 = 123e-5; // 0.00123
var num4 = (0.2 * 10 + 0.1 * 10) / 10;
var num5 = 100 / "Apple" ; // num5 will be NAN (Not a Number)
// JS Number Methods
num2.toString();
num3.toExponential(); // returns a string with a number rounded and written using exponential notation
num3.toFixed(0); // returns a string with a number written with specified number of decimals

/* Converting variables to Numbers
Number() --> return a number , converted from its argument
parseFloat() --> parses its argument and returns a floating point number
parseInt() --> parses its argument and returns as an integer
 */

 //Number() used on Dates
 Number(new Date("2017-09-30"));
 parseInt("10.3332"); //returns 10
 parseFloat("10.3332"); //returns 10.3332

 // JS Arrays
 // an array is a special variable , which can hold more than one value at a time
 //syntax --> var array_name = [item1 , item2 , item3];
 var carsArray = new Array(
     "Saab" , "Volvo" , "BMW"
 ); // this is an array as well

 //access array elements -->
    //changing an array element
    carsArray[0] = "Opel"; // Saab changed to Opel

//Array methods 
toString()
join()
pop()
push()
shift()
unshift()
slice()
concat()
splice()
delete carsArray[0];
// resource --> https://www.w3schools.com/js/js_array_methods.asp , read more about it here

// JS if/else
let aIf = 10;

if(aIf > 12){
    //dosomething if aIf is bigger than 12
}else if(aIf == 11){
    //dosomething if aIf is equal to 11
}else{
    //dosomething if nothing abouve occurred
}



//JS loops
    //forEach
const numbersArray = [44,234,23,34,5235,3443,2323,333,552,928];
let numCallback = 0;
 // numbersArray.forEach(element => console.log(element));
numbersArray.forEach(function(element) {
    console.log(element);
    numCallback++;
});
//for loop
var txt7 = "";
for (var i = 0; i < numbersArray.length; i++) {
    txt7 += numbersArray[i];
}
//while loop 
while(true){
    // do something
}
//do-while --> same as while just the code will run at least once
do{
    let array = ["asdad"];
    for (let index = 10; index > array.length; index--) {
        const element = array[index];
    }
}while(true){

}

// switch syntax
/*
switch(expression) {
  case n:
    code block
    break;
  case n:
    code block
    break;
  default:
    default code block
}
The break keyword breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
The default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.
*/
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown Day";
}

// Javascript Math
// --> can call Math library by Math. , example below , link more about math library --> https://www.w3schools.com/jsref/jsref_obj_math.asp
var mathExample = Math.PI; // returns PI 
var mathExample2 = Math.sqrt(16); // returns the square root of 16

// JS Random
Math.random(); // always returns a number lower than 1

// Math.random used with Math.floor() can be used to return random integers
Math.floor(Math.random()*10); // returns a random integer from 0-9
var randomNumber = Math.floor(Math.random()*10);