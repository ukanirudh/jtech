
import HomeTwo from '@/components/homes/home-2';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Home - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}


const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;