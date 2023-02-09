
import React,{useEffect,useState} from 'react';
import { ethers } from 'ethers';
import {
  Provider,createClient,configureChains, useConnect, useDisconnect,
  useAccount,
  usePrepareContractWrite,
  useNetwork,useContractRead, useSwitchNetwork,WagmiConfig
} from 'wagmi'
import Navbar from './Profile/Navbar';
import Mint from './Mint';
function App(props) {
  const { address, connector, isConnected } = useAccount()
  const { chain } = useNetwork()
  return (
    <React.Fragment>
      <Navbar component="nav" isConnected={isConnected} chains={props.chains}></Navbar>
      {
      chain ? props.chains.find(networkValue => chain.id === networkValue.id) ? isConnected ?
              <React.Fragment>
              <Mint isConnected={isConnected} chains={props.chains}></Mint>
              </React.Fragment>:
              <React.Fragment>
              </React.Fragment>
      : "Network not supported" : "Chain is undefined"}
  

</React.Fragment>
  );
}

export default App;