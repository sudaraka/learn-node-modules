
function Greeter(greeting) {
    this.greeting = greeting || 'Hello';
}

Greeter.prototype.greet = function(name) {
    console.log('%s, %s', this.greeting, name);
};

module.exports = Greeter;
