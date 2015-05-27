
exports = module.exports = {
    greet: function() {
        console.log('Hello World from greeter 2');
    },

    toString: function() {
        exports.greet();
    }
};
