
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Main Home - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}


const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;