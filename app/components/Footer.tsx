import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-6xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-600">
        <small className="duration-200">
          All rights reserved <span className='text-orange-500'>&copy;</span> {new Date().getFullYear()}
        </small>

        <small className="hover:text-zinc-400 dark:hover:text-white duration-200">
          <a
            href="https://github.com/OthyTenk/my-portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prepared by <span className="text-orange-500">OkDo</span>
          </a>
        </small>
      </div>
    </footer>
  );
}
