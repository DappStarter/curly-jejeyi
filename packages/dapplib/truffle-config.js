require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stove crawl praise quality hard light army genius'; 
let testAccounts = [
"0xe469418405a12ccc26d205dccbc15a5a943687cc964a0c4318495e6ca4f5d115",
"0x8c0f2b33f07e2e600a2ccecd04fada3e69353ae99217353d3af2991df9eb7942",
"0x33668711f2b8afc3d7aa8d4d63b2e2b3a932e3065260c0183cfe1f7859316f9b",
"0xd27ee51a0333cf471fdc82d37b847029209a7f9a1e7b19198ad725fff9461ee9",
"0x78061eb58c95a1c97a96bbf90579e456c434f94ce37395ca1dc89709896d1cec",
"0x35e6e5f6f42a40db064e949899b448188d27da2d60da14d088902f4e2be13610",
"0x1ddc04177dc920050c068128b1c46e792e93aeb7e9920d6d9d720907af0f5e83",
"0xadb0bbede3432eb398c9d50f1b426dfaa41f34764c2f849cd56f76c3c4832db8",
"0x2fe3f14a05fd06c2680f97641a785087b12738b5d64b63c1a6f381581d360142",
"0x918f4623b9688af3855dc074d33daa53e2b6f228742172497c89b6ea7f2cc6b6"
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

