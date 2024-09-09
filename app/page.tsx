'use client';

import { Button, CarCard, SearchBar } from '@components';
import { manufacturers } from '@constants';
import { Hero } from '@layouts';
import { CarProps } from '@types';
import { allCars } from '@utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [selectedManufacturerIndex, setSelectedManufacturerIndex] =
    useState<number>(0);
  const [displayedCars, setDisplayedCars] = useState<CarProps[]>([]);
  const [allManufacturersDisplayed, setAllManufacturersDisplayed] =
    useState<boolean>(false);
  const [initialLoadComplete, setInitialLoadComplete] =
    useState<boolean>(false);

  const getFilteredCars = (manufacturer: string) => {
    return allCars.filter((car) => car.constructeur === manufacturer);
  };

  const handleNextManufacturer = () => {
    const nextIndex = (selectedManufacturerIndex + 1) % manufacturers.length;
    const nextManufacturer = manufacturers[nextIndex];

    setDisplayedCars((prevCars) => [
      ...prevCars,
      ...getFilteredCars(nextManufacturer),
    ]);

    setSelectedManufacturerIndex(nextIndex);

    if (nextManufacturer === 'Volkswagen') {
      setAllManufacturersDisplayed(true);
    }
  };

  useEffect(() => {
    if (!initialLoadComplete) {
      const initialManufacturer = manufacturers[selectedManufacturerIndex];
      setDisplayedCars(getFilteredCars(initialManufacturer));
      setInitialLoadComplete(true);
    }
  }, [selectedManufacturerIndex, initialLoadComplete]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max__wrapper padding__x mt-12 py-4" id="discover">
        <div className="flex__start flex-col gap-y-2.5">
          <h2 className="font-manrope text-4xl font-extrabold">
            Notre Catalogue
          </h2>
          <p className="text-gray">
            Trouvez la voiture qui pourrait vous plaire.
          </p>
        </div>
        <div className="flex__between mt-12 w-full flex-wrap gap-5">
          <SearchBar
            setManufacturer={(manufacturer) => {
              setDisplayedCars(getFilteredCars(manufacturer));
              setAllManufacturersDisplayed(false);
              setSelectedManufacturerIndex(manufacturers.indexOf(manufacturer));
            }}
          />
        </div>
        <section>
          <div className="grid w-full grid-cols-1 gap-8 pt-14 md:grid-cols-2 xl:grid-cols-3">
            {displayedCars.length > 0 ? (
              displayedCars.map((car: CarProps) => (
                <CarCard key={car.id} car={car} />
              ))
            ) : (
              <h3 className="font-manrope text-xl font-bold">
                Oops, Aucun résultat...
              </h3>
            )}
          </div>
          <div className="flex__center mt-10">
            {allManufacturersDisplayed ? (
              <Button
                title="Retour au Catalogue"
                containerStyles="bg-blue hover:bg-blue/90 rounded-full"
                textStyles="text-white"
                handleClick={() => {
                  document
                    .getElementById('discover')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ) : (
              <Button
                title="Voir plus"
                containerStyles="bg-blue hover:bg-blue/90 rounded-full"
                textStyles="text-white"
                handleClick={handleNextManufacturer}
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
