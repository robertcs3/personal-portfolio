import React, { useState, Fragment } from 'react'
import { HashLink as Link } from "react-router-hash-link";
import { motion } from 'framer-motion';

export default function Home() {
  
  return (
    <section id='home-page' className='h-screen container flex flex-col items-center justify-center mx-auto text-3xl section'>
      <motion.div initial={{y: -100, opacity: 0, scale: 0.5}} animate={{y:0, opacity: 1, scale: 1}} transition={{duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
        <p>Hi, I'm <span className=' text-red-500 leading-relaxed'>Robert</span>.</p>
      </motion.div>

      <motion.div initial={{y: -200, opacity: 0, scale: 0.5}} animate={{y:0, opacity: 1, scale: 1}} transition={{duration: 1, delay: 1.5, ease: [0, 0.71, 0.2, 1.01] }}>
        <p>I'm a full-stack developer.</p>
      </motion.div>

      <motion.div initial={{opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1}} transition={{duration: 1, delay: 2.5, ease: [0, 0.71, 0.2, 1.01] }} 
        className='mt-10 text-xl'>
        
            <motion.div whileHover={{scale: 1.1}} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link  to='#about-page' smooth className="bg-transparent border-2 border-red-500 py-2 px-4 rounded-lg text-center
              transition ease-in-out  hover:bg-red-500 duration-300">
                Get to know me!
              </Link>
            </motion.div>
      </motion.div>
    </section>
  )
}
