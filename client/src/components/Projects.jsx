import React from 'react'

export default function Projects() {
  return (
    <div id='projects-page' className='grid lg:grid-cols-2 lg:auto-rows-min container mx-auto text-xl'>

      <header>Projects</header>

      <img className='p-12' src="https://res.cloudinary.com/dbwb3uyii/image/upload/v1674370763/portfolio/shop_ybqxby.jpg" alt="shop" />
      <section className='flex flex-col gap-5 p-12'>

        <h2 className=' text-2xl'><strong>Shopifly</strong></h2>
        <p>Full-stack e-commerce application built with React, Node.js, Express.js, MongoDB, and Typescript.</p>

        <div className='gap-5'>
          <a>Live</a>
          <a className='ml-12'>Repository</a>
        </div>
        
      </section>

    </div>
  )
}
