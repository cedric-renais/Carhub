'use client';

import { CarCard, Filter, SearchBar } from '@components';
import { Hero } from '@layouts';
import { CarProps } from '@types'; // Assure-toi d'importer les types nécessaires
import { allCars } from '@utils';
import { useState } from 'react';

const DEFAULT_MANUFACTURER = 'Volkswagen';

export default function Home() {
  const [selectedManufacturer, setSelectedManufacturer] =
    useState<string>(DEFAULT_MANUFACTURER);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  const filteredCars = allCars.filter(
    (car) => car.constructeur === selectedManufacturer
  );

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max__wrapper padding__x mt-12 py-4">
        <div className="flex__start flex-col gap-y-2.5">
          <h2 className="font-manrope text-4xl font-extrabold">
            Notre Catalogue
          </h2>
          <p className="text-gray">
            Trouvez la voiture qui pourrait vous plaire.
          </p>
        </div>
        <div className="flex__between mt-12 w-full flex-wrap gap-5">
          <SearchBar setManufacturer={setSelectedManufacturer} />
          <div className="flex flex-wrap items-center justify-start gap-2">
            <Filter />
            <Filter />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="grid w-full grid-cols-1 gap-8 pt-14 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredCars.length > 0 ? (
                filteredCars.map((car: CarProps) => (
                  <CarCard key={car.id} car={car} />
                ))
              ) : (
                <h3 className="font-manrope text-xl font-bold">
                  Oops, Aucun résultat...
                </h3>
              )}
            </div>
          </section>
        ) : (
          <section className="flex__center mt-16 flex-col gap-2">
            <h3 className="font-manrope text-xl font-bold">
              Oops, Aucun résultat...
            </h3>
          </section>
        )}
      </div>
    </main>
  );
}
