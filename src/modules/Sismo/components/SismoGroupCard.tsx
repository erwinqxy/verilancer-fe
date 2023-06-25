import { ISismoGroup } from '../utils/types';
import { useContext } from 'react';
import TalentLayerContext from '../../../context/talentLayer';
import SismoHelpPopover from './SismoHelpPopover';
import Image from 'next/image';

function SismoGroupCard({
  sismoGroupData,
  userAddrss,
}: {
  sismoGroupData: ISismoGroup;
  userAddrss: string;
}) {
  const { user } = useContext(TalentLayerContext);
  const isConnectedUser = () => {
    return user?.address === userAddrss;
  };

  return (
    <div className='rounded-xl p-4 border border-gray-200'>
      <div className='flex flex-col items-top justify-between gap-4 w-full'>
        <div className='flex flex-row items-center justify-start'>
          <div className='mr-4'>
            <Image src={sismoGroupData.image} className='w-20' alt='' width={500} height={500} />
          </div>
          <div className='flex flex-col'>
            <p className='text-gray-900 font-2xl break-all'>{sismoGroupData.name}</p>
            <p className='text-gray-400 font-xl break-all'>{'Software'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SismoGroupCard;
