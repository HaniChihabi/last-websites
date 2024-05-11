import React from 'react';

export default function IndexSectionCategorySolid4() {
    return (
        <React.Fragment>
            <>
                <section className="py-12 md:pt-20 md:pb-32 bg-black">
  <div className="container mx-auto px-4">
    <h1 className="text-center font-heading text-4xl text-white font-bold mb-16">Shop by category</h1>
    <div className="flex flex-wrap -mx-4 mb-20">
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4">
        <a className="group block text-center" href="#">
          <img className="block mb-5 w-full h-40 object-cover" src="vendia-assets/images/category/category-item1.png" alt="" />
          <h6 className="font-bold text-white group-hover:text-yellow-500">Trendy Fashion</h6>
        </a>
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4">
        <a className="group block text-center" href="#">
          <img className="block mb-5 w-full h-40 object-cover" src="vendia-assets/images/category/category-item5.png" alt="" />
          <h6 className="font-bold text-white group-hover:text-yellow-500">Winter Collection</h6>
        </a>
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 hidden md:block">
        <a className="group block text-center" href="#">
          <img className="block mb-5 w-full h-40 object-cover" src="vendia-assets/images/category/category-item2.png" alt="" />
          <h6 className="font-bold text-white group-hover:text-yellow-500">Beauty</h6>
        </a>
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 hidden lg:block">
        <a className="group block text-center" href="#">
          <img className="block mb-5 w-full h-40 object-cover" src="vendia-assets/images/category/category-item3.png" alt="" />
          <h6 className="font-bold text-white group-hover:text-yellow-500">Fitness Collection</h6>
        </a>
      </div>
      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 hidden lg:block">
        <a className="group block text-center" href="#">
          <img className="block mb-5 w-full h-40 object-cover" src="vendia-assets/images/category/category-item2.png" alt="" />
          <h6 className="font-bold text-white group-hover:text-yellow-500">Beauty</h6>
        </a>
      </div>
    </div>
    <div className="h-1 bg-blueGray-800 rounded-full">
      <div className="h-full w-1/3 bg-yellow-500 rounded-full" />
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

