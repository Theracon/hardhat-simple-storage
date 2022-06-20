const { task } = require("hardhat/config")

task("blockNumber", "Gets the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber()

    console.log(`Block Number: ${blockNumber}`)
  }
)
