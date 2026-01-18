"use client";

import { FC } from "react";

interface IBadgeProps {
  title: string;
  className?: string;
}

export const Badge: FC<IBadgeProps> = ({ title, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 
      bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 
      hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transform hover:-translate-y-0.5 shadow-sm ${className}`}
    >
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};

export default Badge;
