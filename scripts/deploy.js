// @ts-nocheck
const { ethers, run, network } = require("hardhat")

const main = async () => {
  const ContractFactory = await ethers.getContractFactory("SimpleStorage")

  console.log("Deploying...")

  const contract = await ContractFactory.deploy()
  await contract.deployed()

  console.log(`Deployed To: ${contract.address}`)

  if (process.env.ETHERSCAN_API_KEY && network.config.chainId === 4) {
    console.log("Waiting for Block Confirmations...")

    await contract.deployTransaction.wait(6)

    console.log("Verifying on Etherscan...")
    await verify(contract.address, [])
  }

  const currentVal = await contract.retrieve()
  console.log(`Current Value: ${currentVal}`)

  const txResponse = await contract.store("100")
  await txResponse.wait(1)

  const updatedVal = await contract.retrieve()
  console.log(`New Value: ${updatedVal}`)
}

const verify = async (contractAddress, args) => {
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified on Etherscan")
    } else {
      console.log(error)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
