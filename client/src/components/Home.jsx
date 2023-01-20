import React from 'react'
export default function Home() {
  return (
    <section id='home-page' className='h-screen container flex flex-col items-center justify-center mx-auto text-3xl'>
      <div>
        Hi, I'm Robert.
      </div>
      <div>
        I'm an aspiring full-stack developer. 
      </div>
      <div className='mt-10'>
        <a className="bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 text-center">
          Get to know me! </a>
      </div>
    </section>
  )
}
