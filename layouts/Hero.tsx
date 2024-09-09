'use client';

import { Button } from '@components';
import { Car } from '@public/assets/images';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {};

  return (
    <section className="max__wrapper relative z-0 flex flex-col gap-5 xl:flex-row">
      <div className="padding__x flex-1 pt-36">
        <h1 className="font-manrope text-[50px] font-extrabold sm:text-[64px] 2xl:text-[72px]">
          Louer une voiture, rapidement et facilement
        </h1>
        <p className="mt-5 text-[22px] font-light sm:text-[27px]">
          Simplifiez votre expérience de location de voiture avec notre
          processus de réservation sans effort.
        </p>
        <Button
          title="Explorer les voitures"
          type="button"
          containerStyles="bg-blue hover:bg-blue/90 transition-colors text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="flex__end item w-full xl:h-screen xl:flex-[1.5]">
        <div className="relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full">
          <Image
            className="object-contain"
            src={Car}
            fill
            sizes="100%"
            alt="Toyota Fortuner"
            priority
          />
        </div>
        <div className="absolute -right-1/4 -z-10 h-[590px] w-full overflow-hidden bg-hero bg-repeat-round xl:-right-1/2 xl:-top-24 xl:h-screen" />
      </div>
    </section>
  );
};
export default Hero;
