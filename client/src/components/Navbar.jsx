import React, { useEffect, useRef, useState } from 'react'
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const navbarRef = useRef(null);
  const [activeComponent, setActiveComponent] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const homePosition = document.getElementById('home-page').getBoundingClientRect().bottom;
        const aboutComponent = document.getElementById('about-page')
        if (homePosition <= 0) {
          navbarRef.current.classList.add('fixed', 'top-0', 'left-0', 'w-full');
          aboutComponent.classList.add('mt-16');
        } else {
          navbarRef.current.classList.remove('fixed', 'top-0', 'w-full');
          aboutComponent.classList.remove('mt-16');
        }
      }

    };
    setUpObserver();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const setUpObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let id = entry.target.id;
          setActiveComponent(`#${id}`)
        }
      })
    }, { threshold: [0.8] });
  
    const components = document.querySelectorAll('.section');
    components.forEach((component) => {
      observer.observe(component);
    })
  }


  

  return (
    <nav id='nav-bar' className="bg-slate-800 bg-opacity-60 p-5" ref={navbarRef}>
      <div className='flex sm:justify-end justify-center container mx-auto '>
        <Link className={`hover:text-red-600 mr-4 sm:mr-12 ${activeComponent === '#home-page' && 'active-link text-red-600'} `} to='#home-page' smooth>Home</Link>
        <Link className={`hover:text-red-600 mr-4 sm:mr-12 ${activeComponent === '#about-page' && 'active-link text-red-600'}`} to='#about-page' smooth>About</Link>
        <Link className={`hover:text-red-600 mr-4 sm:mr-12 ${activeComponent === '#projects-page' && 'active-link text-red-600'}`} to='#projects-page' smooth>Projects</Link>
        <Link className={`hover:text-red-600 mr-4 sm:mr-12 ${activeComponent === '#contact-page' && 'active-link text-red-600'}`} to='#contact-page' smooth>Contact</Link>
      </div>
    </nav>
  )
}
