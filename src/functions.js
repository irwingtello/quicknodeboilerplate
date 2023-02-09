export function addressSmartContract(chainId) 
{
    switch (chainId) {
        case 80_001:
            return process.env.REACT_APP_SMART_CONTRACT_POLYGON_MUMBAI;
        case 43_113:
        return process.env.REACT_APP_SMART_CONTRACT_AVALANCHE_FUJI;
        case 314_1:
        return process.env.REACT_APP_FILECOIN_HYPERSPACE;
        default:
          return 0;
      }
}
