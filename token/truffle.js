/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    develop: {
      host: "localhost",
      port: 9545,
      network_id: "*" ,// Match any network id
      gas: 2000000000,   // <--- Twice as much
      gasPrice: 100000000000,
    },
    // lgeth: {
    //   host:"localhost",
    //   port: 8545,
    //   network_id: '5494',
    //   gas: 4500000,
    //   gasPrice: 10000000000,
    // }
  }
};
