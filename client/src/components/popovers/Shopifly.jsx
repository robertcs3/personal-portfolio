import React, { useState, Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { usePopper } from 'react-popper'

export default function Shopifly() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [placement, setPlacement] = useState("top-end");
  const [offsetValue, setOffsetValue] = useState([]);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { placement: placement, 
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: offsetValue,
      },
    },
  ],})

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  useEffect(() => {
    if (width < 1024) {
      setPlacement("top-end");
      setOffsetValue([0, 15]);
    } else {
      setPlacement("right");
      setOffsetValue([15, 60]);
    }

  }, [width]);
  return (
    <Popover className='relative'>
            <Popover.Button ref={setReferenceElement} className="bg-red-500 p-2 rounded-lg hover:scale-110 duration-300">Details</Popover.Button>
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
                    <div className='xs:w-[260px]  sm:w-[300px] md:w-[390px] xl:w-[500px] h-min pb-1 bg-slate-800 bg-opacity-90 rounded'>
                      <ul className='list-disc ml-6 pr-1'>
                        <li className='pt-1'>Full-stack e-commerce application built with React, Node.js, Express.js, MongoDB, and Typescript.</li>
                        <li className='pt-1'>User authentication with Passport.js.</li>
                        <li className='pt-1'>Users with admin privileges are granted CRUD functionalities to modify shop items.</li>
                        <li className='pt-1'>Used Formik and Yup for form validation.</li>
                        <li className='pt-1'>Deployed on <a href="https://shopifly.onrender.com/" className=' text-red-500'>Render</a></li>
                      </ul>
                    </div>
                  </Popover.Panel>
                </div>
              </Transition>
        
          </Popover>
  )
}
