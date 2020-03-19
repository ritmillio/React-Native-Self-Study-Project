/**
 * What is Node.js?
 * -->
    Node.js is an open source server environment
    Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
    Node.js uses JavaScript on the server
    Node.js uses asynchronous programming!
 */

 /**
  * 
  * What is a Module in Node.js?
  * -->
    Consider modules to be the same as JavaScript libraries.
    A set of functions you want to include in your application.

    Node.js has a set of built-in modules --> https://www.w3schools.com/nodejs/ref_modules.asp

  */

//To include module, use the require() function with the name of the module -->
/**
 * To include module, use the require() function with the name of the module -->
 */
//const logger = require('./logger.js');
//logger.log('message'); 



const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

//------------------------------------------------------------------------------------------------------------------------------------

//OS module module
// --> (methods)  --> https://nodejs.org/dist/latest-v13.x/docs/api/os.html 
//etc. -->  os.freemem() --> returns the amount of free memory on the machine

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log(totalMemory);

// template string (ES6)
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Left memory ${totalMemory - freeMemory}`);

// how to work with files
//File system module
const fs = require('fs');
fs.readdir('$', function(err, files){
    if(err){
        console.log('Error' , err);
    }else{
        console.log('Result' , files);
    }
});

//--------------------------------------------------------------------------------------------------------------------------------
/**
 * Event
 * 
 * A signal that something has happened
 * 
 * EventEmiter
 */

const EventEmitter = require('events'); //EventEmitter is a class
//Raise an event
//Making a noise , produce something --> signaling that an event happened
/*emitter.emit('messageLogged', {
    id: 1,
    url: 'http://'
});*/
const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {// emitter.on takes 2 parameter , 1 parameter is the name , 2 parameter is a listener
    console.log('Listener called' , arg);
});
logger.log('message');

// continue youtube from 1:11:00

