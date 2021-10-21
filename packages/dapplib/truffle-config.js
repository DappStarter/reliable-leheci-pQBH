require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember million half climb surge gift'; 
let testAccounts = [
"0x025d52411590afd26b4a519522629ff1c07155e16fc9d9111ab33aad59a55500",
"0x66e72459e55800aa30386190ed6a15f35d9e1b4119b4c8781076d1cee7bcc6c2",
"0xd22e8354fa5fa34e38ff27bdc9b428827ec0274d31690d9cffa457b971706575",
"0xf9f8d3525eb1c19b8be8239a2f6da16eaa542b78604d67b200b6554a69698319",
"0x34b38b63bdfb194b4cb981d3e4306a4b5fe2bbcea51ab70e3a11bcb7cb2a0942",
"0x4c04d491f5f79fd4c72728ec944b3fb5b26131392e60eb3e93c6025f1bf7da66",
"0x08911977dd1812858b0766ac23a4da7968b19d6e592cad977a5c7a9c4488b694",
"0x172fa44af7ae267aa073cdc4cbe9dc966924860ee87e1812695739f7b25e8023",
"0x9f3ad4c6f6b1ced87b008e6fa83ac64e60f48fa3bcaf44aa0412dedd0cf9983d",
"0xd50060272eeea0748808bbf2cd301bea190a60f6ca0c0d3e779af15de8eebf62"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

