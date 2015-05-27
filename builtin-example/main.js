var events = require('events'),
    util = require('util');

var EventEmitter = events.EventEmitter;

// or
// var EventEmitter = require('events').EventEmitter;


function Pinger() {
    EventEmitter.call(this);
}

util.inherits(Pinger, EventEmitter);

Pinger.prototype.ping = function() {
    this.emit('ping');
};

// -----------------------------------------------------------------------------

var pinger = new Pinger();

pinger.on('ping', function() {
    console.log('pinged!');
});

pinger.ping();
