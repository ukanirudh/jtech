

import BlogDetails from '@/components/blog-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Blog Details - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}



const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;