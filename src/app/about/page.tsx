
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'About - JTech Engineering Systems LLP',
  description: 'JTech Engineering Systems LLP - leading manufacturer of heavy-duty industrial vacuum cleaners, portable dust collectors, vacuum leaf collectors, coolant sump cleaners, and other specialized cleaning equipment',
}

const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;