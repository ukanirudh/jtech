
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Contact - JTech Engineering Systems LLP',
  description: 'JTech Engineering Systems LLP - leading manufacturer of heavy-duty industrial vacuum cleaners, portable dust collectors, vacuum leaf collectors, coolant sump cleaners, and other specialized cleaning equipment',
}

const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;