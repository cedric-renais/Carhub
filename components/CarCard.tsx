import { Gas, Wheel } from '@public/assets/icons';
import { Car } from '@public/assets/images';
import { CarProps } from '@types';
import Image from 'next/image';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { constructeur, modèle, prix, image, transmission, carburant } = car;
  return (
    <div className="group flex flex-col items-start justify-center rounded-3xl bg-gray/5 p-6 hover:bg-white hover:shadow-md">
      <div className="flex w-full flex-col gap-2">
        <h3 className="text-[22px] font-bold leading-[26px]">
          {constructeur} {modèle}
        </h3>
        <p className="mt-6 flex text-[32px] font-extrabold">
          {prix}
          <span className="self-start text-base font-semibold">€</span>
          <span className="self-end text-base font-semibold">/Jour</span>
        </p>
        <div className="relative my-3 h-40 w-full">
          <Image
            className="object-contain"
            src={Car}
            alt={`${constructeur}, ${modèle}`}
            fill
          />
        </div>
      </div>
      <div className="relative mt-2 flex w-full">
        <div className="flex w-full justify-between text-gray group-hover:invisible">
          <div className="flex__center flex-col gap-2">
            <Image src={Wheel} alt="" width={20} height={20} />
            <p>{transmission}</p>
          </div>
          <div className="flex__center flex-col gap-2">
            <Image src={Gas} alt="" width={20} height={20} />
            <p>{carburant}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
