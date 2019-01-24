import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xc223DEf9dAdcaCe582d8AeAbE4f81d3383B1dB64';
//use the ABI from your contract
const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "uint8"
            }
        ],
        "name": "setDocumentType",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb92cc181"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDocumentType",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x13368fd9"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "uint8"
            }
        ],
        "name": "setLevelOfEducation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x16b073d6"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getLevelOfEducation",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x20b1260b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getName",
        "outputs": [
            {
                "name": "y",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x17d7de7c"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "string"
            }
        ],
        "name": "setName",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc47f0027"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getSurname",
        "outputs": [
            {
                "name": "y",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xacc823f8"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "string"
            }
        ],
        "name": "setSurName",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xf99181b1"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getEmail",
        "outputs": [
            {
                "name": "y",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7e79e8ba"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "string"
            }
        ],
        "name": "setEmail",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x282b065a"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getStudentID",
        "outputs": [
            {
                "name": "y",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xeecd3df4"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "uint32"
            }
        ],
        "name": "setStudentID",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x3da8b0fb"
    }
]

export default new web3.eth.Contract(abi, address);