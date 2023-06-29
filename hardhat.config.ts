import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@statespace/hardhat-testgen"

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  testgen: {
    sequences: [["BasicERC20.*", "BasicERC20.*"]],
  }
};

export default config;
