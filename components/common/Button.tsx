'use client';
import React from 'react';
import { ButtonProps } from '../../interfaces/index';

export const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"> 
        {text || 'Click Me'}
    </button>
  );
}