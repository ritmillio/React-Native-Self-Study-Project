// JS use strict
// use strict defines that JS code should be executed in strict mode. ES5
//You can use strict mode in all your programs.
//It helps you to write cleaner code, like preventing you from using undeclared variables.
// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.

"use strict";
var arguments = 3.14; // this will cause an error 

// eval() execute JS code/expressions
var x = 10;
var y = 20;
var a = eval("x * y");

// this keyword
// refers to the object it belongs to.
var person = {
    firstName: "Zoltan",
    lastName: "Fodor",
    id : 123123,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

//JS let/const
/**
 * ECMAScript 2015
ES2015 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope variables (and constants) in JavaScript.

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 
 */
let car = "Volvo";
const car02 = "Audi";

function carFunction() {
    let car = "Audi"; // car is Audi
    // car02 = "Volvo"; error const cannot be changed 
}
car; // here car is Volvo
const PI = 3.14; 
// PI = 3.1415926; error
// PI = PI + 10 ; error , to change const, have to declare a new variable
let PI_ = PI;


//ARROW Functions
//Before
hello = function(){
    return "HelloWorld";
}
// With arrow functions
hello = () => {
    return "HelloWorld";
}
// arrow functions allow us to write shorter function syntax

const add = (a,b) => a+b;
/**
 * Where Arrow Functions Improve Your Code
One of the primary usecases for traditional lambda functions, 
and now for arrow functions in JavaScript, is for functions that get applied over and over again to items in a list.
 */
const words = ['hello' , 'World' , 'Whatever']; 
const downcaseWords = words.map(word => word.toLowerCase());
const multiplyES6 = (a, b) => { return a * b; };

// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array.
const smartPhones = [
    { name:'iphone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
];
const prices = smartPhones.map(smartPhone => smartPhone.price);


// JS Classes
// ----------------
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
let Rectangle = class{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};
// Prototype Methods
class ProtClass{
    constuctor(a,b){
        this.a = a;
        this.b = b;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.a * this.b;
    }
}
const square = new ProtClass(10,10);
console.log(square.area);

//Static methods -- --- Static methods are often used to create utility functions for an application.
class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy); // Math.hypot returns the square root of the sum of squares of its arguments.
    }
}

// Boxing with prototype and static methods
class Animal{
    speak(){
        return this;
    }
    static eat(){
        return this;
    }
}
let obj = new Animal();
obj.speak(); // the Animal object
let speak = obj.speak;
speak();// undefined

//Sub classing with extends
class Dog extends Animal{
    constructor(name){
        super(name); // call the super class constructor and pass in the name parameter
    }
    speak(){
        console.log(`${this.name} barks.`);
    }
}
let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.


// Synchronous code 
posts = loadPostsSync();
// wait til posts are fetched
// do something with posts
doTheNextThing();

// Asynchronous code
loadPostsAsync(function(){

});
doTheNextThing();

// Most async code will be part of an API or library like :
    // -- jQuery Ajax , other HTTP libraries , Node.js fs module , XMLHttpRequest & Fetche
    // Promises , Async/Await
    