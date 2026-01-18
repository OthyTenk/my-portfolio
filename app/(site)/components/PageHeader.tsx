"use client";

import { FC } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="space-y-4 pt-10 pb-12 animate-fade-in">
      <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="h-1 w-20 bg-primary-500 rounded-full" />
    </div>
  );
};
