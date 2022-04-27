import React from 'react'
import { useWeb3React } from '@web3-react/core';
import {injected, network, walletconnect, walletlink} from "../connectors/connectors"


function Wallet() {
    const {active, activate, deactivate, account, library, connector} = useWeb3React();



    const activateMetaMask = async() => {
        let provider

        if(window.ethereum.providers) {
            provider = window.ethereum.providers.find(({ isMetaMask }) => isMetaMask)
            window.ethereum.setSelectedProvider(provider);
        }
        

       
        
        try {
            activate(injected) 
        }
        catch(e) {
            console.log(e)
        }



    }
    const activateConnector = async (connector) => {
        console.log("hello")
        try {
            activate(connector) 

            
        }
        catch(e) {
            console.log(e)
        }

    }



  return (
    <div>
        <button onClick={() => activateMetaMask()}>MetaMask</button>
        <button onClick={()=>activate(walletconnect)}>Wallet Connect</button>
        <button onClick={()=> activateConnector(walletlink)}>Coinbase</button>


    </div>
  )
}

export default Wallet