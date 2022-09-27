const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // fs-extra module only

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // Creates de build folder

for (let contract in output) {
    fs.outputJSONSync( // Write a JSON file
        path.resolve(buildPath, contract.replace(':', '') + '.json'), // Name of the file that will be generated
        output[contract] // The content of the contract
    );
}