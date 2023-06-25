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
    <div style={{ marginTop: '10px' }}>
      <button
        style={{
          backgroundColor: isConnected ? '#d7c1b3' : '',
          height: '20px',
          paddingTop: 25,
          borderRadius: '10px',
        }}
        className={`flex items-center justify-center px-6 py-5 rounded text-sm font-medium text-gray-700 group-hover:text-gray-900 focus:outline-none ${
          isConnected ? '' : "'space-x-2'"
        }`}
        onClick={connectWallet}>
        <span className='sr-only'>Open Metamask</span>
        {isConnected ? (
          'Connected'
        ) : (
          <Image src='/metamask-fox.png' alt='Connect to MetaMask' width={32} height={32} />
        )}
      </button>
    </div>
  );
};

export default MetamaskButton;
