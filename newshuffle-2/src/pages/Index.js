import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersSolid1 from '../components/headers-solid/IndexSectionHeadersSolid1';
import IndexSectionCallToActionSolid6 from '../components/call-to-action-solid/IndexSectionCallToActionSolid6';
import IndexSectionFeaturesSolid2 from '../components/features-solid/IndexSectionFeaturesSolid2';
import IndexSectionCategorySolid4 from '../components/category-solid/IndexSectionCategorySolid4';
import IndexSectionFeaturesSolid5 from '../components/features-solid/IndexSectionFeaturesSolid5';
import IndexSectionFootersSolid7 from '../components/footers-solid/IndexSectionFootersSolid7';

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
      <IndexSectionHeadersSolid1 />
      <IndexSectionCallToActionSolid6 />
      <IndexSectionFeaturesSolid2 />
      <IndexSectionCategorySolid4 />
      <IndexSectionFeaturesSolid5 />
      <IndexSectionFootersSolid7 />
    </React.Fragment>
  );
}

