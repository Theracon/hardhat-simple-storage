// @ts-nocheck
require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/accounts")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")

const LOCALHOST_RPC_URL = "http://127.0.0.1:8545/"

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || ""
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: LOCALHOST_RPC_URL,
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 4,
    },
  },
  solidity: "0.8.8",
  etherscan: { apiKey: ETHERSCAN_API_KEY },
  gasReporter: {
    enabled: true,
    noColors: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
}
