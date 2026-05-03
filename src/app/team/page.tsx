
import Team from '@/components/team';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: 'Team - JTech Engineering Systems LLP',
  description: 'Enhance workplace cleanliness and safety',
}



const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;