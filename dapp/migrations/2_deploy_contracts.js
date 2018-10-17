var HelloWorld = artifacts.require("HelloWorld");
 
module.exports = function(deployer) {
  const word = "Hello world!";
  deployer.deploy(HelloWorld, word);
};