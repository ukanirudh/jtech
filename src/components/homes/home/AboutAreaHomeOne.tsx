'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import about_thumb from "@/assets/images/about/about-thumb.jpg";
import about_shape from "@/assets/images/about/about-shape.png";
interface DataType {
  tab_id: string;
  tab_name: string;
  sm_info: string;
  feature_list_1: string[];
  feature_list_2: string[];
}

const tab_data:DataType[] = [
  {
    tab_id: "home",
    tab_name: "About Us",
    sm_info: "JTech Engineering Systems LLP is a leading manufacturer of heavy-duty industrial vacuum cleaners, portable dust collectors, vacuum leaf collectors, coolant sump cleaners, and other specialized cleaning equipment",
    feature_list_1: [
      "High quality products",
      "Address unique challenges",
      "Cutting edge technology",
    ],
    feature_list_2: [
      "Efficient",
      "Durable equipments",
      "Safety",
    ]
  },
  {
    tab_id: "profile",
    tab_name: "Mission",
    sm_info: "At JTech, our mission is to empower industries with superior cleaning solutions that improve productivity, ensure compliance, and promote a safer working environment. We strive to lead the market through innovation, customer service, and a commitment to sustainability",
    feature_list_1: [
      "Customer Commitment",
      "Sustainability",
      "Innovation",
    ],
    feature_list_2: [
      "Dedicated Support",
      "Quality",
    ]
  },
  {
    tab_id: "contact",
    tab_name: "Vision",
    sm_info: "We envision a cleaner, safer, and more efficient industrial landscape where our products play a vital role in maintaining operational excellence. By continuously evolving our offerings, we aim to set new benchmarks in quality and performance",
    feature_list_1: [],
    feature_list_2: []
  },
]

const AboutAreaHomeOne = (style: any) => {

  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className={`about-section  ${style ? "style-three" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="wow slideInLeft">
                <div className="about-thumb">
                  <Image src={about_thumb} style={{ height: "auto" }} alt="image-title" />
                  <div className="about-counter">
                    <div className="about-counter-text">
                      <div className="about-numbar">
                        <h4 className="counter">29</h4>
                        <span>+</span>
                      </div>
                      <div className="about-text">
                        <h5>Years Exprience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="about-counter-two d-flex align-items-center ">
                    <div className="about-counter-img">
                      <Image src={about_shape} alt="image-title" />
                    </div>
                    <div className="about-number-two">
                      <h4 className="counter">2900</h4>
                      <span>+</span>
                      <h5>Satisfied Clients</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-section-title">
                <div className="about-section-sub-title wow slideInUp">
                  <h4>Our Introduction</h4>
                </div>
                <div className="about-section-main-title wow slideInRight">
                  <h2>We're revolutionizing industrial cleaning needs </h2>
                </div>
              </div>
              {/* <!-- tab --> */}

              <div className="tab">
                <ul className="nav nav-pills tabs active wow slideInRight" id="pills-tab" role="tablist">
                  {tab_data.map((item, index) =>
                    <li key={index} className={`nav-item ${currentTab === index ? "current" : ""}`} onClick={() => handleTabClick(index)} role="presentation">
                      <button
                        className={`nav-link tab_items ${currentTab === index ? "active" : ""}`}
                        id={`pills-${item.tab_id}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${item.tab_id}`}
                        type="button" role="tab" aria-controls={`pills-${item.tab_id}`}
                        aria-selected={`${currentTab === index ? true : false}`}>
                        {item.tab_name} <i className="bi bi-arrow-up-right"></i>
                      </button>
                    </li>
                  )}

                </ul>
                <div className="tab-content" id="pills-tabContent">
                  {tab_data.map((item, index) =>
                    <div key={index} className={`tab-pane fade ${index === 0 ? "show active" : ""}`} 
                    id={`pills-${item.tab_id}`} 
                    role="tabpanel" 
                    aria-labelledby={`pills-${item.tab_id}-tab`}>
                      <div className="tabs_item">
                        <div className="tabs-items-content">
                          <div className="about-content-discription wow slideInLeft">
                            <p>{item.sm_info}</p>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="about-list wow slideInLeft">
                                <ul>
                                  {item.feature_list_1.map((item, i) =>
                                    <li key={i}> <i className="bi bi-chevron-double-right"></i> {item}</li>
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="about-list wow slideInRight">
                                <ul>
                                  {item.feature_list_2.map((item, i) =>
                                    <li key={i}><i className="bi bi-chevron-double-right"></i> {item}</li>
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="solar-btn about wow slideInDown">
                              <Link href="/project-grid">Our Products <i className="bi bi-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeOne;