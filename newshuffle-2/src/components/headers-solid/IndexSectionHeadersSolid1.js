import React from 'react';

export default function IndexSectionHeadersSolid1() {
    return (
        <React.Fragment>
            <>
                <section className="pb-12 md:pb-24 lg:pb-32 bg-black h-screen">
  <nav className="relative px-6 lg:px-16 py-9">
    <div className="flex items-center">
      <a className="inline-block text-lg font-bold" href="#">
        <img className="h-6" src="vendia-assets/logos/vendia.svg" alt="" width="auto" />
      </a>
      <div className="lg:hidden ml-auto">
        <button className="navbar-burger flex items-center p-3 text-white hover:text-yellow-500">
          <svg className="block h-4 w-4" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex lg:w-auto lg:space-x-12 ml-16 mr-auto">
        <li><a className="inline-block text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">Women</a></li>
        <li><a className="inline-block text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">Men</a></li>
        <li><a className="inline-block text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">Kids</a></li>
        <li className="group relative">
          <a className="inline-flex items-center text-sm text-gray-50 hover:text-yellow-500 font-medium" href="#">
            <span className="mr-3">Browse</span>
            <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6666 1L5.99998 5.66667L1.33331 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div className="hidden group-hover:block absolute top-full left-0 w-40 pt-3 pb-6 px-4 bg-black z-10"><a className="block text-sm mb-2 text-white hover:text-yellow-500" href="#">Link 1</a><a className="block text-sm mb-2 text-white hover:text-yellow-500" href="#">Link 2</a><a className="block text-sm text-white hover:text-yellow-500" href="#">Link 3</a></div>
        </li>
      </ul>
      <div className="hidden lg:block">
        <a className="group inline-flex items-center" href="#">
          <span className="text-white group-hover:text-yellow-500">
            <svg width={22} height={24} viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 10.75V5.75C16 2.98858 13.7614 0.75 11 0.75C8.23858 0.75 6 2.98858 6 5.75V10.75M2.25 8.25H19.75L21 23.25H1L2.25 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="-ml-2 px-2 border-2 border-black bg-yellow-500 group-hover:bg-yellow-400 rounded-full">
            <span className="text-sm font-bold">3 in Cart</span>
          </span>
        </a>
      </div>
    </div>
  </nav>
  <div className="container mx-auto px-4 relative">
    <div className="flex flex-wrap -mx-4 pt-20 justify-center items-center relative pt-40">
      <div className="xl:w-1/2 px-4 mb-16 lg:mb-0">
        <div className="relative xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
          <h1 className="block font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-white">VIBE OF</h1>
          <h1 className="sm:pl-6 lg:pl-16 font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-yellow-500 mb-6">SUMMER</h1>
          <div className="sm:ml-12 xl:ml-40">
            <p className="text-2xl font-light text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing a elit. Nullam to dictum aliquet accumsan porta lectus ridiculus in these mattis.</p>
            <a className="group inline-flex items-center text-xl text-white hover:text-yellow-500 font-bold" href="#">
              <span className="mr-3">Explore Collections</span>
              <span className="animate-bounce">
                <svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 px-4 xl:order-first">
        <div className="block md:flex max-w-2xl lg:max-w-none mx-auto">
          <div className="flex flex-col justify-center mb-6 md:mb-0 md:mr-8 xl:mr-20">
            <button className="inline-block mb-6 text-sm font-bold text-yellow-500">01</button>
            <button className="inline-block mb-6 text-sm font-bold text-gray-400 hover:text-gray-200">02</button>
            <button className="inline-block text-sm font-bold text-gray-400 hover:text-gray-200">03</button>
          </div>
          <div>
            <img className="block mx-auto" src="vendia-assets/images/header/woman-side-header.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
    <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-2xl font-medium leading-none" href="#">
          <img className="h-6" src="vendia-assets/logos/vendia-dark.svg" alt="" width="auto" />
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Women</a></li>
          <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Men</a></li>
          <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Kids</a></li>
          <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Browse</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <div className="pt-6"><a className="block mb-2 py-3 text-sm text-center border border-gray-200 hover:border-gray-400 font-bold" href="#">Login</a><a className="block py-3 text-sm text-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold transition duration-200" href="#">Sign In</a></div>
      </div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

