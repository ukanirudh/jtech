
import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Faq - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;