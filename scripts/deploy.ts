import { ethers } from "hardhat";

async function main() {

  const DataStor = await ethers.getContractFactory("DataStore");
  const store = await DataStor.deploy();
  
  await store.deployed();

  console.log(`DataStore address is deployed to  ${store.address}`);

  //const contractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  let tx_ = await ethers.provider.getStorageAt(store.address, 15);
  console.log(tx_);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
