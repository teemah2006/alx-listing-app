'use client';

import React from 'react';
import { CardProps } from '../../interfaces/index';

export const Card: React.FC<CardProps> = ({}) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">Card Title</h2>
            <p className="text-gray-600">This is a simple card component.</p>
        </div>
    );
}