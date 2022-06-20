<div id="top"></div>

<!-- PROJECT INTRO -->
<br />
<div align="center">
  <h3 align="center">Hardhat Simple Storage</h3>

  <p align="center">
    A decentralized app that takes and stores a number on the ethereum blockchain.
    <br />
    <br />
    <a href="https://github.com/Theracon/hardhat-simple-storage">View Demo</a>
    ·
    <a href="https://github.com/Theracon/hardhat-simple-storage/issues">Report Bug</a>
    ·
    <a href="https://github.com/Theracon/hardhat-simple-storage/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a hardhat build of a simple web3 app that stores a number to the blockchain.

### Built With

- [Solidity](https://docs.soliditylang.org)
- [Hardhat](https://hardhat.org)
- [Ethers.js](https://docs.ethers.io)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow these instructions to get set up locally.

### Prerequisites

1. Install yarn.

- [yarn](https://yarnpkg.com/)
  ```sh
  npm install yarn -g
  ```

2. Create an account on Alchemy.

- [Alchemy](https://dashboard.alchemyapi.io/)

### Installation

1. Get a free Etherscan API Key at [https://etherscan.io](https://etherscan.io)
2. Get a free Coinmarketcap API Key at [https://pro.coinmarketcap.com](https://pro.coinmarketcap.com)
3. Clone the repo
   ```sh
   git clone https://github.com/Theracon/hardhat-simple-storage.git
   ```
4. Install packages
   ```sh
   yarn
   ```
5. Enter your API & wallet KEYS in your `.env` file

   ```sh

   RINKEBY_RPC_URL="https://eth-rinkeby.alchemyapi.io/v2/YOUR-UNIQUE-KEY"
   RINKEBY_PRIVATE_KEY="ENTER YOUR PRIVATE KEY"
   ETHERSCAN_API_KEY="ENTER YOUR ETHERSCAN API KEY"
   COINMARKETCAP_API_KEY="ENTER YOUR COINMARKETCAP API KEY"
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Open a terminal in the project directory and run the following commands:

```sh
yarn hardhat compile
yarn hardhat node
```

In a new terminal, run the following command:

```sh
yarn hardhat run scripts/deploy.js --network [network-name]
```

Networks names that are config to use in this project are:

- hardhat
- rinkeby
- localhost

_For more usage examples, please refer to the [Documentation](https://hardhat.org/getting-started)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Testing

```sh
yarn hardhat test
```

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Multi-language Support
  - [ ] Hindi
  - [ ] Spanish

See the [open issues](https://github.com/Theracon/hardhat-simple-storage/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ashraf Yusuf - [@ashrafofficia1](https://twitter.com/ashrafofficia1) - hello@ashraf.me

Project Link: [https://github.com/Theracon/hardhat-simple-storage](https://github.com/Theracon/hardhat-simple-storage)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Here are some of the tools/plugins that made this project possible:

- [Choose an Open Source License](https://choosealicense.com)
- [Chai](https://chaijs.org/)
- [Mocha](https://mochajs.org/)
- [Hardhat Gas Reporter](https://www.npmjs.com/package/hardhat-gas-reporter)
- [Prettier](https://prettier.io/docs/en/editors.html)
- [Prettier Plugin Solidity](https://www.npmjs.com/package/prettier-plugin-solidity)
- [Solidity Coverage](https://www.npmjs.com/package/solidity-coverage)

<p align="right">(<a href="#top">back to top</a>)</p>
