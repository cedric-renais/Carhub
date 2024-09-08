import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  type?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  id: number;
  constructeur: string;
  modèle: string;
  année: number;
  consommation: string;
  transmission: string;
  carburant: string;
  prix: number;
  image: string;
}
