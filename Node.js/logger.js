// this logger.js is a module
console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events'); //EventEmitter is a class

var  url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

        log (message){
        //send an HTTP request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        });
    }
}


module.exports = Logger;
//module.exports.endPoint = url;

