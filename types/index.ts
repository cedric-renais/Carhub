import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  type?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
