import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <nav class="bg-teal-500 p-6">
        <div className='flex sm:justify-end justify-center container mx-auto'>
          <Link className=" text-teal-200 hover:text-white mr-4">Home</Link>
          <Link className=" text-teal-200 hover:text-white mr-4">About</Link>
          <Link className=" text-teal-200 hover:text-white mr-4">Projects</Link>
          <Link className=" text-teal-200 hover:text-white mr-4">Contact</Link>
        </div>
    </nav>
  )
}
