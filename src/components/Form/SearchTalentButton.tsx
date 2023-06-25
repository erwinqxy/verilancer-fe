import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function SearchTalentButton(props?: { value?: string }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(props!.value || '');
  }, [props!.value]);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const formElm = e.target as HTMLFormElement;
    const searchQueryRef = formElm.querySelector('input')!.value;
    if (searchQueryRef.length > 0) {
      router.push({
        pathname: '/talents',
        query: { search: searchQueryRef },
      });
    } else router.push('/talents');
  }, []);

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div
        className='flex divide-x bg-white py-4 px-4 sm:px-0 justify-center items-center flex-row drop-shadow-lg rounded-lg'
        style={{ fontFamily: 'customFont' }}>
        <div className='sm:px-6 flex flex-row items-center gap-2'>
          <span className='text-gray-500'>
            <div>
              <Image
                src='./images/glasses-square-yellow-saturated.svg'
                alt='SVG Icon'
                width={50}
                height={50}
              />
            </div>
          </span>
          <input
            className='text-gray-500 py-2 focus:ring-0 outline-none text-sm sm:text-lg border-0'
            type='text'
            style={{ fontFamily: 'customFont' }}
            placeholder='Search by title'
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>

        <div className='sm:px-4 flex flex-row  sm:space-x-4 justify-between items-center'>
          <button
            type='submit'
            className='px-5 py-2 border border-red-600 rounded-lg hover:text-red-600 hover:bg-white text-white bg-red-700'>
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchTalentButton;
