
import Blog from '@/components/blog';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Blog - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}


const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;