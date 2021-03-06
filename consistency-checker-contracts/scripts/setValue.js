const SimpleEvent = artifacts.require("SimpleEvent");

const NEW_VALUE = 123;

module.exports = function (done) {
    console.log("Getting deployed version of SimpleStorage...")
    SimpleEvent.deployed().then(function (instance) {
        console.log(`Setting value to ${NEW_VALUE}...`);
        return instance.set(NEW_VALUE,
            {
                privateFor: [
                    "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=", // Node 1
                    "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=" // Node 2
                ]
            });
    }).then(function (result) {
        console.log("Transaction:", result.tx);
        console.log("Finished!");
        done();
    }).catch(function (e) {
        console.log(e);
        done();
    });
};