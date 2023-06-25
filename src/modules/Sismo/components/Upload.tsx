import { useState } from 'react';
import { useContext } from 'react';
import TalentLayerContext from '../../../context/talentLayer';
import { IUser } from '../../../types';
import useSismoBadgesPerAddress from '../hooks/useSismoBadgesPerAddress';
import { TALENTLAYER_GROUPS } from '../utils/sismoGroupsData';
import { ISismoBadge, ISismoGroup } from '../utils/types';
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface IProps {
  user: IUser;
}

function Upload({ user }: IProps) {
  const { user: currentUser } = useContext(TalentLayerContext);
  const sismoBadges = useSismoBadgesPerAddress(user.address);

  const groupsData: ISismoGroup[] = [...TALENTLAYER_GROUPS];

  // TODO: clean that - NOT clean to have conditional use
  // if (user.address === currentUser?.address) {
  //   groupsData.map(group => {
  //     group.userInGroup = useIsUserInSismoGroup(group.id, user.address);
  //   });
  // }

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
  };

  return (
    <>
      {user.address === currentUser?.address && groupsData.length > 0 && (
        <>
          <h2
            className='mb-6 pb-4 border-b border-gray-gray-200 text-gray-900 font-medium break-all mt-4'
            style={{ fontFamily: 'customFont' }}>
            <p
              className='text-5xl font-medium tracking-wider mb-8'
              style={{ fontFamily: 'CustomFont' }}>
              YOUR{' '}
              <span className='text-red-600' style={{ fontFamily: 'CustomFont' }}>
                PORTFOLIO
              </span>
            </p>
          </h2>
          <div className='flex'>
            <div
              className='border border-gray-200 rounded-xl p-4 mr-4 height-150 w-60 flex flex-col justify-center items-center cursor-pointer pt-8 pb-8'
              onDragOver={e => e.preventDefault()}
              onDrop={handleFileDrop}
              style={{ fontFamily: 'customFont' }}>
              <div className='text-gray-900 font-medium break-all'>Drag and drop file here or</div>
              <input
                type='file'
                onChange={handleFileInputChange}
                className='hidden'
                id='file-input'
              />
              <br></br>
              <label htmlFor='file-input' className='cursor-pointer'>
                <FileUploadIcon></FileUploadIcon>
                Choose file
              </label>
            </div>
            <div className='flex flex-col'>
              {selectedFile && <div>Selected file: {selectedFile.name}</div>}
              <p style={{ marginLeft: '50px', paddingTop: '60px', fontFamily: 'customFont' }}>
                Show your work, post a relevant portfolio, video, repository, or file job. But first
                you need to connect & create your passport
              </p>
            </div>
          </div>
          <br></br>
        </>
      )}
    </>
  );
}

export default Upload;
