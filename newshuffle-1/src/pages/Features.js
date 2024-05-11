import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FeaturesSectionFeatures2 from '../components/features/FeaturesSectionFeatures2';
import FeaturesSectionFeatures1 from '../components/features/FeaturesSectionFeatures1';
import FeaturesSectionFeatures3 from '../components/features/FeaturesSectionFeatures3';
import FeaturesSectionFooters4 from '../components/footers/FeaturesSectionFooters4';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Features() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FeaturesSectionFeatures2 />
      <FeaturesSectionFeatures1 />
      <FeaturesSectionFeatures3 />
      <FeaturesSectionFooters4 />
    </React.Fragment>
  );
}

