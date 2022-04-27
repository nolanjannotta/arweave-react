import './App.css';
import Wallet from './components/Wallet'
import { Web3ReactProvider } from '@web3-react/core';
import {Web3Provider} from "@ethersproject/providers"

function App() {

  const getLibrary = (provider) => {
    return new Web3Provider(provider);
  }

  
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
       <Wallet></Wallet> 
      </Web3ReactProvider>
      



    </div>
  );
}

export default App;
