// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//Fectching data from storage

contract DataStore {
    uint256[50] _____gap_____;
    
    struct Data {
        uint256[] numbers;
        bool in__;
        bytes32 key;
    }

    constructor(){
        returnDataSlot().key = keccak256("YEP FOUND IT");
    }

    function returnDataSlot() internal view returns (Data storage d) {
        assembly {
            d.slot := 13
        }
    }
}
