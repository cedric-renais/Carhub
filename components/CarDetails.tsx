import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Close } from '@public/assets/icons';
import { CarProps } from '@types';
import Image from 'next/image';
import { Fragment } from 'react';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const carDetails = Object.entries(car).filter(
    ([key]) => key !== 'id' && key !== 'prix' && key !== 'image'
  );

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-10" onClose={closeModal} as="div">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </TransitionChild>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex__center min-h-full p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative flex max-h-[90vh] w-full max-w-lg transform flex-col gap-5 overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <button
                    className="absolute right-2 top-2 z-10 w-fit rounded-full bg-white p-2"
                    type="button"
                    onClick={closeModal}
                    aria-label="Fermer la fenêtre"
                  >
                    <Image
                      className="object-contain"
                      src={Close}
                      alt="Fermer"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative h-60 w-full rounded-lg bg-pattern bg-cover bg-center">
                      <Image
                        className="object-contain"
                        src={car.image}
                        alt={`${car.constructeur}, ${car.modèle}.`}
                        fill
                        sizes="100%"
                        priority
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h3 className="mt-3 text-center text-xl font-semibold uppercase">
                        {car.constructeur} {car.modèle}
                      </h3>
                      <div className="my-6 flex flex-wrap gap-4">
                        {carDetails.map(([key, value]) => (
                          <div
                            className="flex w-full justify-between gap-5 text-right"
                            key={key}
                          >
                            <h4 className="font-medium capitalize">{key}</h4>
                            <p className="text-gray">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
