
var _greet = function() {
    console.log('Hello World from geeter 3');
};

module.exports = {
    greet: _greet,

    toString: function() {
        _greet();
    }
};
