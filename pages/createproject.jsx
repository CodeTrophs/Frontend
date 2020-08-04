import React from 'react';

import AdDisplay from '../src/components/AdComponent';
import Header from '../src/components/Header';
import FormOsp from '../src/components/Osp/ospForm';
import HeadOsp from '../src/components/Osp/ospHead';

const createproject = () => (
  <div>
    <Header />
    <HeadOsp />
    <AdDisplay />
    <FormOsp />
  </div>
);
export default createproject;
