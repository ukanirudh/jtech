

import ProjectDetails from '@/components/project-details';
import { mockData } from '@/data/ProductDetails';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Product Details - JTech Engineering Systems LLP',
  description: 'JTech Engineering Systems LLP - leading manufacturer of heavy-duty industrial vacuum cleaners, portable dust collectors, vacuum leaf collectors, coolant sump cleaners, and other specialized cleaning equipment',
}


type Props = {
  params: {
    projectId: string;
  };
};


export const dynamicParams = false;


export default async function ProjectDetailsPage ({ params }: Props) {
  const product = await getProjectData(params.projectId);
  return (
    <Wrapper>
      <ProjectDetails product={product}  />
    </Wrapper>
  );
};

export async function generateStaticParams() {
  return [
    { projectId: "JTES-KD140" },
    { projectId: "JTES-KD250" },
    { projectId: "JTES-KD250-1" },
    { projectId: "JTES-KD310" },
    { projectId: "JTES-KD350" },
    { projectId: "JT-LC-WB" },
    { projectId: "JT-LC-VM" },
    { projectId: "JT-SP-VC" },
    { projectId: "JT-CSC" },
    { projectId: "JT-WDC" },
    { projectId: "JT-PDC" },
    { projectId: "JT-VMCE" },
    { projectId: "JT-TP-VC" }
  ];
}

// Replace this with your actual data fetching logic
async function getProjectData(projectId: string) {
  return mockData[projectId] || null;
}
