import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
export default function Home() {
  return (
    <section id='home-page' className='h-screen container flex flex-col items-center justify-center mx-auto text-3xl'>
      <div>
        Hi, I'm Robert.
      </div>
      <div>
        I'm a full-stack developer. 
      </div>
      <div className='mt-10'>
        <Link className="bg-transparent border-2 bg py-2 px-4 rounded-lg hover:bg-blue-600 text-center">
          Get to know me!
        </Link>
      </div>
    </section>
  )
}
