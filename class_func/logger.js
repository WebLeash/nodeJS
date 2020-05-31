const EventEmitter = require('events');


var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

//function log(message){
//    // Send an HTTP Request
//    console.log(message);
//    // Rause an event
//    emitter.emit('messageLogged', { id: 1, url: 'http://'});//
//
//}

module.exports = Logger;