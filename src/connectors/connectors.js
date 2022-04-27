import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'


export const injected = new InjectedConnector({
  supportedChainIds: [4]
 });


export const walletconnect = new WalletConnectConnector({
  rpc: {4: "https://eth-rinkeby.alchemyapi.io/v2/eriQZWQGeXNylGAMxvyOVIBe4JyU0Kxz"},
  chainId: 4,
  qrcode: true
})

export const walletlink = new WalletLinkConnector({
  url: "https://eth-rinkeby.alchemyapi.io/v2/eriQZWQGeXNylGAMxvyOVIBe4JyU0Kxz",
  appName: 'web3-react example',
  supportedChainIds: [4]
})


