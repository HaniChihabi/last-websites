import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionAbout5 from '../components/about/IndexSectionAbout5';
import IndexSectionFeatures3 from '../components/features/IndexSectionFeatures3';
import IndexSectionTestimonials7 from '../components/testimonials/IndexSectionTestimonials7';
import IndexSectionPricing8 from '../components/pricing/IndexSectionPricing8';
import IndexSectionDownload9 from '../components/download/IndexSectionDownload9';
import IndexSectionContact10 from '../components/contact/IndexSectionContact10';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionAbout5 />
      <IndexSectionFeatures3 />
      <IndexSectionTestimonials7 />
      <IndexSectionPricing8 />
      <IndexSectionDownload9 />
      <IndexSectionContact10 />
    </React.Fragment>
  );
}

