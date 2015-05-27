var greeter1 = require('./greeter-1'),
    greeter2 = require('./greeter-2'),
    greeter3 = require('./greeter-3'),
    Greeter4 = require('./greeter-4'),
    greeter5 = require('./greeter-5');

greeter1.greet();

greeter2.greet();
greeter2.toString();

greeter3.greet();
greeter3.toString();

var g = new Greeter4('Zup');
g.greet('yall');

greeter5.greet('mundo');
