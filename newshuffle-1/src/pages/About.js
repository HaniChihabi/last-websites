import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutSectionAbout1 from '../components/about/AboutSectionAbout1';
import AboutSectionAbout2 from '../components/about/AboutSectionAbout2';
import AboutSectionFooters3 from '../components/footers/AboutSectionFooters3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutSectionAbout1 />
      <AboutSectionAbout2 />
      <AboutSectionFooters3 />
    </React.Fragment>
  );
}

