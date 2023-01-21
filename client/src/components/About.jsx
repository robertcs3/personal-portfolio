import React from 'react'

export default function About() {
  return (
    <div className='grid md:grid-cols-2 grid-rows-6 h-screen container mx-auto text-3xl'>

      <header className=' col-span-full flex justify-center items-end text-5xl'>About</header>

      <section className='flex items-center row-span-4'>
        As an aspiring full-stack developer with a focus on front-end development,
        I strive to translate designs into responsive, functional and high-performance
        web applications. I'm inspired by visually appealing and user-friendly websites, and am commited
        to learning the necessary and latest technologies in order to bring the most value to my projects.
      </section>
      
      <section className='flex justify-center items-center row-span-4'>
        MY TECH STACK
      </section>
    </div>
  )
}
