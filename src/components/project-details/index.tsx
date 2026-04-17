
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ProjectDetailsArea from './ProjectDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import { ProductDetails } from '@/data/ProductDetails';

const ProjectDetails = ({ product }: { product: ProductDetails}) => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title={product.name} title='Product Details' />
        <ProjectDetailsArea product={product} />
      </main>
      <FooterOne />
    </>
  );
};

export default ProjectDetails;