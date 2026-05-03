
import ServiceDetails from '@/components/service-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Service - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}

const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;