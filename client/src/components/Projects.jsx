import React, { useState } from 'react'
import Shopifly from './popovers/Shopifly';
import LibraryManagementSystem from './popovers/LibraryManagementSystem';
import PersonalPortfolio from './popovers/PersonalPortfolio';

export default function Projects() {
  const [isHovering, setIsHovering] = useState(false);

  return (

    <div id='projects-page' className='grid lg:grid-cols-2  lg:auto-rows-min container mx-auto  pt-12 mb-12 section'>

      <div className='col-span-full flex justify-center p-12 items-end text-4xl'>
        <header>Projects</header>
      </div>

      {/* Project gif/img */}
      <h2 className='lg:hidden text-center'><strong>Shopifly</strong></h2>
      <div className='flex justify-center lg:justify-end xs:px-12  xs:py-6 lg:p-12'>
        <img className='rounded-lg' src={isHovering ? "https://res.cloudinary.com/dbwb3uyii/image/upload/v1675464733/portfolio/shopifly-ss_xq9shq.jpg"
          : "https://res.cloudinary.com/dbwb3uyii/image/upload/v1675464290/portfolio/ezgif.com-gif-maker_pf0f2k.gif"} onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)} alt="shop-gif" />
      </div>


      {/* Project Details */}
      <div className='lg:grid lg:grid-rows-6 lg:py-12'>
        <h2 className=' hidden lg:block text-2xl text-left'><strong>Shopifly</strong></h2>
        <div className='  flex justify-evenly lg:flex-col row-span-5 '>
          <Shopifly />
          <a href="https://shopifly.onrender.com/" className="bg-red-500 p-2 rounded-lg hover:scale-110 duration-300 w-min flex">Live</a>
          <a href="https://github.com/robertcs3/shopifly-project" className="bg-red-500 p-2 rounded-lg hover:scale-110 duration-300 w-min">Repository</a>
        </div>
      </div>

      {/* ------------------------------------------------------ */}

      <div className='hidden lg:grid lg:grid-rows-6 lg:py-12'>
        <h2 className=' text-2xl text-right'><strong>Library Management System</strong></h2>
        <div className='flex justify-evenly lg:flex-col lg:items-end row-span-5 '>
          <LibraryManagementSystem />
          
          <a href="https://github.com/robertcs3/group14SE" className="bg-red-500 p-2 rounded-lg hover:scale-110 duration-300">Repository</a>
        </div>
      </div>

      {/* Project gif/img */}
      <h2 className='lg:hidden text-center pt-12'><strong>Library Management System</strong></h2>
      <div className='flex justify-center lg:justify-start xs:px-12  xs:py-6 lg:p-12 '>
        <img className='rounded-lg' src={isHovering ? "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674555310/portfolio/Library-ss_zgchrc.jpg"
          : "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436780/portfolio/library-management-system_qhiniv.gif"} onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)} alt="shop-gif" />
      </div>

      <div className='lg:hidden'>
        <div className='flex justify-evenly'>
          <LibraryManagementSystem />
          <a href="https://github.com/robertcs3/group14SE" className="bg-red-500 p-2 rounded-lg hover:scale-110 duration-300">Repository</a>
        </div>
      </div>

      {/* ------------------------------------------------------ */}

      {/* Project gif/img */}
      <h2 className='lg:hidden text-center pt-12'><strong>Personal Portfolio</strong></h2>
      <div className='flex justify-center lg:justify-end xs:px-12  xs:py-6 lg:p-12'>
        <img className='rounded-lg' src={isHovering ? "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674849295/portfolio/portfolio-ss_h0gbqq.jpg"
          : "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674849289/portfolio/portfolio_gif_bmcz2h.gif"} onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)} alt="shop-gif" />
      </div>


      {/* Project Details */}
      <div className='lg:grid lg:grid-rows-6 lg:py-12'>
        <h2 className=' hidden lg:block text-2xl text-left'><strong>Personal Portfolio</strong></h2>
        <div className='  flex justify-evenly lg:flex-col row-span-5 '>
          <PersonalPortfolio />
          <a href="https://github.com/robertcs3/personal-portfolio" className="bg-red-500 p-2 rounded-lg hover:scale-110 duration-300 w-min">Repository</a>
        </div>
      </div>


    </div>
  )
}
