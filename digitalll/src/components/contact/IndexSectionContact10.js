import React from 'react';

export default function IndexSectionContact10() {
    return (
        <React.Fragment>
            <>
                <section className="py-12 md:py-24">
  <div className="container mx-auto px-4">
    <h2 className="mb-14 font-semibold text-5xl sm:text-6xl md:text-8xl font-heading">Talk to our sales team</h2>
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/2 p-3">
        <div className="h-full pt-12 px-12 pb-14 bg-white rounded-4xl">
          <div className="mb-10 pb-10 border-b border-neutral-50">
            <span className="mb-4 inline-block text-xl text-neutral-600 font-semibold tracking-tight">Our office</span>
            <h3 className="mb-6 text-4xl font-medium max-w-xs font-heading">Mirga LTD 1400 Cherokee Rd a Florence, SC 293501 United States</h3>
            <span className="inline-block text-lg text-neutral-600 font-semibold tracking-tight">Opening hours 9am - 5pm</span>
          </div>
          <div className="mb-10 pb-10 border-b border-neutral-50">
            <span className="inline-block text-neutral-600 font-semibold tracking-tight">Phone number</span>
            <h3 className="mb-4 text-4xl font-medium max-w-xs font-heading">+41 337003 00</h3>
            <span className="inline-block text-neutral-600 font-semibold tracking-tight">Email</span>
            <h3 className="mb-12 text-4xl font-medium max-w-xs font-heading">hi@contactmigra</h3>
            <ul className="flex flex-wrap -m-1.5">
              <li className="p-1.5">
                <a className="flex items-center justify-center w-12 h-12 bg-neutral-50 hover:bg-opacity-80 rounded-full transition duration-200" href="#">
                  <img className="h-5" src="mirga-assets/images/contact/fb.svg" alt="" />
                </a>
              </li>
              <li className="p-1.5">
                <a className="flex items-center justify-center w-12 h-12 bg-neutral-50 hover:bg-opacity-80 rounded-full transition duration-200" href="#">
                  <img className="h-5" src="mirga-assets/images/contact/instagram.svg" alt="" />
                </a>
              </li>
              <li className="p-1.5">
                <a className="flex items-center justify-center w-12 h-12 bg-neutral-50 hover:bg-opacity-80 rounded-full transition duration-200" href="#">
                  <img className="h-5" src="mirga-assets/images/contact/x.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center justify-between -m-4">
            <div className="w-auto p-4">
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-3">
        <div className="h-full pt-12 px-12 pb-14 bg-white rounded-4xl">
          <span className="mb-4 inline-block text-xl text-neutral-600 font-semibold tracking-tight">Messages</span>
          <h3 className="mb-10 text-4xl font-medium max-w-xs font-heading">Fill out this quick form</h3>
          <div className="mb-6">
            <label className="inline-block mb-3 font-medium text-neutral-600 tracking-tight" htmlFor="contact4-label1">Your Name</label>
            <input className="block py-4 px-8 w-full font-medium text-lg text-neutral-600 placeholder-neutral-600 outline-none border border-neutral-100 focus:ring-4 focus:ring-neutral-50 rounded-lg transition duration-200" id="contact4-label1" type="text" placeholder="Name" />
          </div>
          <div className="mb-6">
            <label className="inline-block mb-3 font-medium text-neutral-600 tracking-tight" htmlFor="contact4-label2">Work Email</label>
            <input className="block py-4 px-8 w-full font-medium text-lg text-neutral-600 placeholder-neutral-600 outline-none border border-neutral-100 focus:ring-4 focus:ring-neutral-50 rounded-lg transition duration-200" id="contact4-label2" type="text" placeholder="Email" />
          </div>
          <div className="mb-6">
            <label className="inline-block mb-3 font-medium text-neutral-600 tracking-tight" htmlFor="contact4-label3">Phone Number</label>
            <input className="block py-4 px-8 w-full font-medium text-lg text-neutral-600 placeholder-neutral-600 outline-none border border-neutral-100 focus:ring-4 focus:ring-neutral-50 rounded-lg transition duration-200" id="contact4-label3" type="text" placeholder="+3 (33) 03333-33" />
          </div>
          <div className="mb-6">
            <label className="inline-block mb-3 font-medium text-neutral-600 tracking-tight" htmlFor="contact4-label4">Subject</label>
            <select className="block py-4 px-8 w-full font-medium text-lg text-neutral-600 placeholder-neutral-600 outline-none border border-neutral-100 focus:ring-4 focus:ring-neutral-50 rounded-lg transition duration-200" id="contact4-label4" name="subject">
              <option value="" disabled="" selected="">Please select</option>
              <option value="business">Business</option>
              <option value="work">Work</option>
              <option value="sales">Sales</option>
              <option value="taxes">Taxes</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="inline-block mb-3 font-medium text-neutral-600 tracking-tight" htmlFor="contact4-label5">Message</label>
            <textarea className="block w-full py-4 px-8 text-xl text-neutral-600 font-medium placeholder-neutral-600 outline-none rounded-lg border border-neutral-100 focus:ring-4 focus:ring-neutral-50 transition duration-200" id="contact4-label5" name="name" rows={4} placeholder="Your space to ask question" defaultValue={""} />
          </div>
          <label className="relative flex flex-wrap items-center gap-4 mb-8">
            <input className="input-checkbox-contact-1-04 opacity-0 absolute h-8 w-8 rounded-full" type="checkbox" name="field-checkbox" defaultValue="checkbox-value" />
            <div className="border border-neutral-600 w-8 h-8 flex justify-center items-center rounded-full">
              <svg className="fill-current hidden" xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11" fill="none"><line x1="0.353553" y1="5.64645" x2="4.35355" y2="9.64645" stroke="currentColor" /><line x1="14.3536" y1="0.353553" x2="4.35355" y2="10.3536" stroke="currentColor" /></svg>
            </div>
            <span className="text-neutral-500 text-lg font-medium tracking-tight">I accept the terms and privacy policy.</span>
          </label>
          <button className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" type="submit">Send a message</button>
        </div>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

