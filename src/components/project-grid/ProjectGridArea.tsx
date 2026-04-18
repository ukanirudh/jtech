'use client'
import project_data, { ROOT_CATEGORIES } from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

// data
const categories = [...new Set(project_data.map((item) => item.category))];

// const perView = 6;

const ProjectGridArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(ROOT_CATEGORIES);
  // const [next, setNext] = useState(perView);
    const router = useRouter();


  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    // setNext(perView);
    if (cateItem === "All") {
      return setItems(ROOT_CATEGORIES);
    } else {
      const findItems = project_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };
  //   handleLoadMore
  // const handleLoadMore = () => {
  //   setNext((value) => value + 3);
  // };

  const onProductClick = (itemId: string) => {
    // router.push(`/project-details/${itemId}`);
    window.open(`/project-details/${itemId}`, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <div className="project-grid-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="protfolio-nav text-center">
                <div className="protfolio-menu">
                  <ul className="menu-filtering">

                  {
                    activeCategory !== 'All' && (
                      <li 
                        className={`current_menu_item`} 
                        onClick={() => filterItems("All")}>
                        <div className="go-top-btn-wraper">
                          <div className={`go-top go-top-button`}>
                            <i className="fas fa-arrow-left"></i>
                          </div>
                        </div>
                      </li>
                    )
                  }

                    {categories.map((cate, i) => (
                      <React.Fragment key={i}>
                        <li
                          onClick={() => filterItems(cate)}
                          className={`${cate === activeCategory ? "active" : ""} current_menu_item`}
                        >
                          {cate}
                        </li>  {' '}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row image_load">

            {items.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 grid-item physics math mb-30" onClick={() => filterItems(item.category)}>
                <div className="project-grid-box">
                  <div className="project-thumb">
                    <Image
                      src={`/assets/images/${item.img}`}
                      fill
                      style={{ objectFit: 'contain' }} // or 'cover', depending on your design
                      sizes="100vw"
                      alt="image-title"
                    />
                  </div>
                  <div className="project-content" onClick={activeCategory == 'All' ? () => {} : () => onProductClick(item.id)}>
                    <h4>
                      {
                      activeCategory == 'All' ?
                        <>{item.title}</>  : <Link href={`/project-details/${item.id}`} target="_blank" rel="noopener noreferrer">{item.title}</Link>
                      }
                     </h4>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* {next < items.length &&
            <div className="load-more">
              <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
            </div>
          } */}
        </div>
      </div>

    </>
  );
};

export default ProjectGridArea;