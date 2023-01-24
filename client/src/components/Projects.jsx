import React from 'react'

export default function Projects() {
  return (
    <div id='projects-page' className='grid lg:grid-cols-2  lg:auto-rows-min container mx-auto text-xl pt-12 mb-12'>

      <header>Projects</header>

      <div className='flex justify-end'><img className='py-12' src="https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436873/portfolio/shopifly_adteby.gif" alt="shop" /></div>
      <section className='flex flex-col w-3/4 gap-5 p-12 '>

        <h2 className=' text-2xl text-left'><strong>Shopifly</strong></h2>
        <p>Full-stack e-commerce application built with React, Node.js, Express.js, MongoDB, and Typescript.</p>

        <div className='gap-5'>
          <a>Live</a>
          <a className='ml-12'>Repository</a>
        </div>

      </section>

      <section className='flex flex-col items-end  gap-5 p-12'>
        <h2 className=' text-2xl'><strong>Library Management System</strong></h2>
        <p className='text-right w-1/2'>Collaboration with other group members, followed elements of an agile approach. Built with Java, Java Swing.</p>

        <div className='gap-5'>
          <a>Live</a>
          <a className='ml-12'>Repository</a>
        </div>
      </section>

      <img className='py-12' src='https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436780/portfolio/library-management-system_qhiniv.gif' />

    </div>
  )
}
