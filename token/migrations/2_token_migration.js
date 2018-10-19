var MyToken = artifacts.require("./MyTokens.sol");

module.exports = function(deployer) {
  deployer.deploy(MyToken);
};
