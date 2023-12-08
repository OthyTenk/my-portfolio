"use client";

import { FC } from "react";

interface IBudgeProps {
  title: string;
  className?: string;
}

export const Budge: FC<IBudgeProps> = ({ title, className = "" }) => {
  return (
    <div
      className={`text-sm w-fit h-fit bg-slate-300/30 dark:bg-neutral-600 px-3 rounded-xl ${className}`}
    >
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};

export default Budge;
