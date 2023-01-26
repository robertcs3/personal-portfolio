import React, { useState } from 'react'
import Shopifly from './popovers/Shopifly';
import LibraryManagementSystem from './popovers/LibraryManagementSystem';

export default function Projects() {
  const [isHovering, setIsHovering] = useState(false);
 
  return (

    <div id='projects-page' className='grid lg:grid-cols-2  lg:auto-rows-min container mx-auto  pt-12 mb-12 '>

      <header>Projects</header>

      {/* Project gif/img */}
      <h2 className='lg:hidden text-center'><strong>Shopifly</strong></h2>
      <div className='flex justify-center lg:justify-end '>
        <img className='xs:px-12  xs:py-6 lg:p-12' src={isHovering ? "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674555110/portfolio/shopifly-screenshot_ivzjbz.jpg"
          : "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436873/portfolio/shopifly_adteby.gif"} onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)} alt="shop-gif" />
      </div>

      
      {/* Project Details */}
      <div className='lg:grid lg:grid-rows-6 lg:py-12'>
      <h2 className=' hidden lg:block text-2xl text-left'><strong>Shopifly</strong></h2>
        <div className='  flex justify-evenly lg:flex-col row-span-5 '>
          <Shopifly />
          <a href="">Live</a>
          <a href="">Repository</a>
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      
      <div className='hidden lg:grid lg:grid-rows-6 lg:py-12'>
      <h2 className=' text-2xl text-right'><strong>Library Management System</strong></h2>
        <div className='flex justify-evenly lg:flex-col lg:items-end row-span-5 '>
          <LibraryManagementSystem />
          <a href="">Live</a>
          <a href="">Repository</a>
        </div>
      </div>

      {/* Project gif/img */}
      <h2 className='lg:hidden text-center pt-12'><strong>Library Management System</strong></h2>
      <div className='flex justify-center lg:justify-start '>
        <img className='xs:px-12  xs:py-6 lg:p-12' src={isHovering ? "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674555310/portfolio/Library-ss_zgchrc.jpg"
          : "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436780/portfolio/library-management-system_qhiniv.gif"} onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)} alt="shop-gif" />
      </div>
      

    </div>
  )
}
