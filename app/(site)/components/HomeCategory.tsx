import { TechStacks } from "./TechStacks";

export const HomeCategory = async () => {
  return (
    <article className="py-12 border-t border-slate-200 dark:border-white/10">
      <h2 className="text-3xl font-display font-bold text-center mb-12 text-slate-900 dark:text-white">
        Tech Stacks
      </h2>

      <TechStacks />
    </article>
  );
};
