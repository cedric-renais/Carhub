'use client';

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import { Arrow } from '@public/assets/icons';
import { SearchManufacturerProps } from '@types';
import { allCars } from '@utils';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const getUniqueManufacturers = (cars: Array<any>) => {
  const manufacturersSet = new Set(cars.map((car) => car.constructeur));
  return Array.from(manufacturersSet);
};

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  const uniqueManufacturers = getUniqueManufacturers(allCars);

  const filteredManufacturers =
    selectedManufacturer === ''
      ? uniqueManufacturers
      : uniqueManufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(selectedManufacturer.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="flex flex-1 items-center justify-start max-sm:w-full">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              className="ml-4 object-contain"
              src={Arrow}
              alt="Logo BMW"
              width={20}
              height={20}
            />
          </ComboboxButton>
          <ComboboxInput
            className="h-[48px] w-full cursor-pointer rounded-l-full bg-gray/5 p-4 pl-12 max-sm:rounded-full"
            placeholder="Rechercher un constructeur..."
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(event) => setSelectedManufacturer(event.target.value)}
            autoComplete="off"
            aria-label="Rechercher un constructeur"
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSelectedManufacturer('')}
          >
            <ComboboxOptions
              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm"
              static
            >
              {filteredManufacturers.length === 0 &&
              selectedManufacturer !== '' ? (
                <ComboboxOption
                  value={selectedManufacturer}
                  className="cursor-default select-none py-2 pl-10 pr-4"
                >
                  Aucun résultat pour "{selectedManufacturer}"
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((manufacturer, index) => (
                  <ComboboxOption
                    key={index}
                    className={({ focus }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        focus ? 'bg-blue text-white' : 'text-gray'
                      }`
                    }
                    value={manufacturer}
                  >
                    {({ selected, focus }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}
                        >
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus ? 'text-white' : 'text-blue'}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
export default SearchManufacturer;
