'use client';

import { FC } from 'react';

interface PageHeaderProps {
    title: string;
}

export const PageHeader:FC<PageHeaderProps> = ({title}) => {
  return (
    <div className="space-y-2 pt-5 pb-8 md:space-x-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
        {title}
      </h1>
    </div>
  );
}

