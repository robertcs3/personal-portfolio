import React, { useEffect, useRef } from 'react'
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const homePosition = document.getElementById('home-page').getBoundingClientRect().bottom;
         if (homePosition <= 0) {
          navbarRef.current.classList.add('fixed', 'top-0', 'w-full');
        } else {
          navbarRef.current.classList.remove('fixed', 'top-0', 'w-full');
        } 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav id='nav-bar' className="bg-teal-500 p-6"  ref={navbarRef}>
        <div className='flex sm:justify-end justify-center container mx-auto'>
          <Link className=" text-teal-200 hover:text-white mr-4">Home</Link>
          <Link className=" text-teal-200 hover:text-white mr-4">About</Link>
          <Link className=" text-teal-200 hover:text-white mr-4">Projects</Link>
          <Link className=" text-teal-200 hover:text-white mr-4">Contact</Link>
        </div>
    </nav>
  )
}
