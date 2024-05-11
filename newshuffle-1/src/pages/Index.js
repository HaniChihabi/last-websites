import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionLogoClouds10 from '../components/logo-clouds/IndexSectionLogoClouds10';
import IndexSectionAbout7 from '../components/about/IndexSectionAbout7';
import IndexSectionFeatures12 from '../components/features/IndexSectionFeatures12';
import IndexSectionPricing3 from '../components/pricing/IndexSectionPricing3';
import IndexSectionTestimonials11 from '../components/testimonials/IndexSectionTestimonials11';
import IndexSectionContact5 from '../components/contact/IndexSectionContact5';
import IndexSectionFooters8 from '../components/footers/IndexSectionFooters8';

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
      <IndexSectionLogoClouds10 />
      <IndexSectionAbout7 />
      <IndexSectionFeatures12 />
      <IndexSectionPricing3 />
      <IndexSectionTestimonials11 />
      <IndexSectionContact5 />
      <IndexSectionFooters8 />
    </React.Fragment>
  );
}

