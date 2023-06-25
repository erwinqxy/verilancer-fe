import { useState } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';

const MetamaskButton: React.FC = () => {
  const [isConnected, setConnected] = useState<boolean>(false);

  const connectWallet = async (): Promise<void> => {
    try {
      const MMSDK = new MetaMaskSDK(); // add your options here
      const ethereum = MMSDK.getProvider();
      await ethereum.request({ method: 'eth_requestAccounts', params: [] });
      setConnected(true);
    } catch (error) {
      console.error("Failed to connect to MetaMask", error);
    }
  };

  return (
    <button onClick={connectWallet}>
      {isConnected ? 'Connected' : 'Connect to MetaMask'}
    </button>
  );
}

export default MetamaskButton;
