'use client';

import { ButtonProps } from '@types';

const Button = ({ title, type, containerStyles, handleClick }: ButtonProps) => {
  return (
    <button
      className={`button ${containerStyles}`}
      disabled={false}
      type={type || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default Button;
