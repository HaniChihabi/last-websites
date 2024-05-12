import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionFeatures3 from '../components/features/IndexSectionFeatures3';
import IndexSectionFeatures4 from '../components/features/IndexSectionFeatures4';
import IndexSectionFeatures2 from '../components/features/IndexSectionFeatures2';
import IndexSectionTestimonials5 from '../components/testimonials/IndexSectionTestimonials5';
import IndexSectionLogos6 from '../components/logos/IndexSectionLogos6';
import IndexSectionFooters7 from '../components/footers/IndexSectionFooters7';

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
      <IndexSectionFeatures3 />
      <IndexSectionFeatures4 />
      <IndexSectionFeatures2 />
      <IndexSectionTestimonials5 />
      <IndexSectionLogos6 />
      <IndexSectionFooters7 />
    </React.Fragment>
  );
}

