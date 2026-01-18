"use client";

import { FC } from "react";

interface IBadgeProps {
  title: string;
  count?: number;
  className?: string;
}

export const Badge: FC<IBadgeProps> = ({ title, count, className = "" }) => {
  const countValue = typeof count === "number" ? count : 0;

  const pStyle = countValue > 0 ? "pl-3 pr-1 py-1" : "px-3 py-1.5";
  return (
    <div
      className={`inline-flex items-center gap-2 ${pStyle} rounded-full text-xs font-medium transition-all duration-200 
      bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 
      hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transform hover:-translate-y-0.5 shadow-sm ${className}`}
    >
      <span className="whitespace-nowrap">{title}</span>
      {countValue > 0 && (
        <span className="flex items-center justify-center min-w-[1.25rem] h-5 px-1 rounded-full bg-slate-100 dark:bg-white/10 text-[10px] font-bold text-slate-400 dark:text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-500 transition-colors">
          {countValue}
        </span>
      )}
    </div>
  );
};

export default Badge;
