import { useState } from 'react';
import { MetaMaskSDK } from '@metamask/sdk';
import Image from 'next/image';

const MetamaskButton: React.FC = () => {
  const [isConnected, setConnected] = useState<boolean>(false);

  const connectWallet = async (): Promise<void> => {
    try {
      const MMSDK = new MetaMaskSDK(); // add your options here
      const ethereum = MMSDK.getProvider();
      await ethereum.request({ method: 'eth_requestAccounts', params: [] });
      setConnected(true);
    } catch (error) {
      console.error('Failed to connect to MetaMask', error);
    }
  };

  return (
    <button
      style={{ backgroundColor: isConnected ? '#d7c1b3' : '', height: '50px', paddingTop: 25 }}
      className={`flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium text-gray-700 group-hover:text-gray-900 focus:outline-none ml-4 ${
        isConnected ? '' : 'space-x-2'
      }`}
      onClick={connectWallet}>
      <span className='sr-only'>Open Metamask</span>
      {isConnected ? (
        'Connected'
      ) : (
        <Image src='/metamask-fox.png' alt='Connect to MetaMask' width={32} height={32} />
      )}
    </button>
  );
};

export default MetamaskButton;
