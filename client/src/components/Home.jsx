import React, { useState, Fragment } from 'react'
import { HashLink as Link } from "react-router-hash-link";
import { motion } from 'framer-motion';

export default function Home() {
  
  return (
    <section id='home-page' className='h-screen container flex flex-col items-center justify-center mx-auto text-3xl section'>
      <p>Hi, I'm <span className=' text-red-500'>Robert</span>.</p>
      <p>I'm a full-stack developer.</p>
      <div className='mt-10 text-xl'>
        
            <Link  to='#about-page' smooth className="bg-transparent border-2 border-red-500 py-2 px-4 rounded-lg text-center
            transition ease-in-out hover:bg-red-500 duration-300">
              Get to know me!
            </Link>
      </div>
    </section>
  )
}
