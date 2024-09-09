'use client';

import { SearchManufacturer } from '@components';
import { useState } from 'react';

interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
}

const SearchBar = ({ setManufacturer }: SearchBarProps) => {
  const [maker, setMaker] = useState('');

  return (
    <form
      className="relative flex w-full max-w-3xl items-center justify-start max-sm:flex-col max-sm:gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setMaker(event.currentTarget.value);
      }}
    >
      <div className="relative flex flex-1 items-center justify-start max-sm:w-full">
        <SearchManufacturer
          manufacturer={maker}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
export default SearchBar;
