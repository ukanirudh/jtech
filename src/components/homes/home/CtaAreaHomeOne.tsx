
import Link from 'next/link';
import React from 'react';

const cta_content = {
  title: "How we implement energy-efficient, high-performance cleaning systems for process reliability",
  sm_des: "Building & Maintaining clean workspace",
}
const { title, sm_des } = cta_content

const CtaAreaHomeOne = () => {
  return (
    <>
      <div className="contact-us-section">
        <div>
          <div className="row contact-us align-items-center">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 col-md-6">
              <div className="section-title wow animate__fadeInLeft">
                <div className="section-main-title contact-us">
                  <h3>{title}</h3>
                </div>
              </div>
              <div className="contact-us-discription wow animate__fadeInUp">
                <p>{sm_des}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="solar-btn contact-us wow animate__fadeInRight">
                <Link href="/contact">Contact Now <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;