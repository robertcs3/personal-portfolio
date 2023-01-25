import React, { useState, Fragment, useEffect } from 'react'

import { Popover, Transition } from '@headlessui/react'
import { usePopper, Popper } from 'react-popper'
export default function Projects() {
  const [isHovering, setIsHovering] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [placement, setPlacement] = useState("top-end");
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: placement })

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    
    switch (width) {
      case width < 768:
        setPlacement("top-end");
        break;
      case width > 768 && width < 1024:
        setPlacement("right");
        break;
      
    }
  }, [width]);

  /* 375px 640px, 768px, 1024px */

  return (

    <div id='projects-page' className='grid lg:grid-cols-2  lg:auto-rows-min container mx-auto  pt-12 mb-12 '>

      <header>Projects</header>

      <div className='flex justify-center lg:justify-end'>
        <img className='p-12' src={isHovering ? "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674555110/portfolio/shopifly-screenshot_ivzjbz.jpg"
          : "https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436873/portfolio/shopifly_adteby.gif"} onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)} alt="shop-gif" />
      </div>

      <div className='hidden lg:block'>
        <section className='flex flex-col w-3/4 gap-5 p-12 '>
          <h2 className=' text-2xl text-left'><strong>Shopifly</strong></h2>
          <p>Full-stack e-commerce application built with React, Node.js, Express.js, MongoDB, and Typescript.</p>
          <div className='gap-5'>
            <a>Live</a>
            <a className='ml-12'>Repository</a>
          </div>
        </section>
      </div>

      <div className=' lg:hidden flex justify-evenly '>
        <Popover className='relative'>
          <Popover.Button ref={setReferenceElement}>Details</Popover.Button>

          
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div>
                <Popover.Panel ref={setPopperElement} style={styles.popper}
                  {...attributes.popper} className='absolute'>
                  <div className='w-[250px] h-min sm:w-[400px] md:w-[500px] bg-neutral-800 bg-opacity-90 rounded'>
                    <ul className='list-disc ml-5'>
                      <li className='pt-1'>Full-stack e-commerce application built with React, Node.js, Express.js, MongoDB, and Typescript.</li>
                      <li className='pt-1'>User authentication with Passport.js.</li>
                      <li className='pt-1'>Users with admin privileges are granted CRUD functionalities to modify shop items</li>
                      <li className='pt-1'>Deployed on <a href="">Render</a></li>
                    </ul>
                  </div>
                </Popover.Panel>
              </div>
            </Transition>
          
        </Popover>

        <a href="">Live</a>

        <a href="">Repository</a>
      </div>

      {/* <section className='flex flex-col items-end  gap-5 p-12'>
        <h2 className=' text-2xl'><strong>Library Management System</strong></h2>
        <p className='text-right w-1/2'>Collaboration with other group members, followed elements of an agile approach. Built with Java, Java Swing.</p>

        <div className='gap-5'>
          <a>Live</a>
          <a className='ml-12'>Repository</a>
        </div>
      </section>



      <div>
        <img className='py-12' src={isHovering ? 'https://res.cloudinary.com/dbwb3uyii/image/upload/v1674555310/portfolio/Library-ss_zgchrc.jpg'
        : 'https://res.cloudinary.com/dbwb3uyii/image/upload/v1674436780/portfolio/library-management-system_qhiniv.gif'} onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)} />
        </div> */}

    </div>
  )
}
