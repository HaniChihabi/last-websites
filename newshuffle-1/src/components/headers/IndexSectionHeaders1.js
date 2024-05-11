import React from 'react';

export default function IndexSectionHeaders1() {
    return (
        <React.Fragment>
            <>
                <section className="relative overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex items-center justify-between pt-6 -m-2">
      <div className="w-auto p-2">
        <div className="flex flex-wrap items-center">
          <div className="w-auto">
            <a className="relative z-10 inline-block" href="#">
              <img src="nightsable-assets/logos/logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-auto p-2">
        <div className="flex flex-wrap items-center">
          <div className="w-auto hidden lg:block">
            <ul className="flex items-center mr-12">
              <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Home</a></li>
              <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">About us</a></li>
              <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Features</a></li>
              <li className="text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="w-auto hidden lg:block">
            <div className="inline-block"><a className="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="#">Get in touch</a></div>
          </div>
          <div className="w-auto lg:hidden">
            <a className="relative z-10 inline-block" href="#">
              <svg className="navbar-burger text-green-500" width={51} height={51} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={56} height={56} rx={28} fill="currentColor" />
                <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
    <nav className="relative z-10 px-9 pt-8 h-full overflow-y-auto">
      <div className="flex flex-wrap justify-between h-full">
        <div className="w-full">
          <div className="flex items-center justify-between -m-2">
            <div className="w-auto p-2">
              <a className="inline-block" href="#">
                <img src="nightsable-assets/logos/logo.svg" alt="" />
              </a>
            </div>
            <div className="w-auto p-2">
              <a className="navbar-burger inline-block text-white" href="#">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-16 w-full">
          <ul>
            <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Home</a></li>
            <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">About us</a></li>
            <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Wallet</a></li>
            <li className="text-white font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-end w-full pb-8"><a className="inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="#">Get in touch</a></div>
      </div>
    </nav>
  </div>
  <div className="relative pt-20 lg:pt-28 h-screen">
    <div className="relative z-10 container px-4 mx-auto">
      <div className="relative mb-24 text-center md:max-w-4xl mx-auto">
        <img className="absolute top-44 -left-36" src="nightsable-assets/images/headers/star2.svg" alt="" />
        <img className="absolute top-10 -right-36" src="nightsable-assets/images/headers/star2.svg" alt="" />
        <span className="inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter">Nightsable Card</span>
        <h1 className="mb-10 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">Making credit history with nightcard</h1>
        <a className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300" href="#">Start now</a>
      </div>
      <div className="relative max-w-max mx-auto">
        <img src="nightsable-assets/images/headers/card-half.png" alt="" />
        <img className="absolute top-7 -right-64" src="nightsable-assets/images/headers/star.svg" alt="" />
      </div>
    </div>
  </div>
  <img className="absolute top-0 left-48" src="nightsable-assets/images/headers/layer-blur.svg" alt="" />
  <img className="absolute bottom-0 right-0" src="nightsable-assets/images/headers/lines2.svg" alt="" />
</section>


            </>
        </React.Fragment>
    );
}

