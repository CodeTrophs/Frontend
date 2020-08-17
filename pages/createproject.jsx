import React from 'react';

import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import FormOsp from '../src/components/Osp/OspForm';
import HeadOsp from '../src/components/Osp/OspHead';

const createproject = () => (
  <div>
    <Header />
    <HeadOsp />
    <AdDisplay />
    <FormOsp />
  </div>
);
export default createproject;
