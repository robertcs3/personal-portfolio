import React from 'react'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div id='contact-page' className='flex flex-col items-center min-h-min container mx-auto text-xl mb-12'>
      <header>Contact</header>

      <div className='w-1/3'>
        <p className='mb-10'>If you have an opportunity to share, or would like to discuss anything, feel free to leave me a message below!</p>
        <form action="https://script.google.com/macros/s/AKfycbz6ZUMGOK2r2eQ3_gZ3ym6HkHfdeJ5mzKo9H_YqAW74imXIqxI-iMpE1Jrq9PFwS21Xqw/exec" className='flex flex-col gap-3' method='POST'>
          <input className='bg-slate-800' type="text" placeholder='Name' required/>
          <input className='bg-slate-800' type="email" placeholder='E-mail' required/>
          <textarea className='bg-slate-800' name="contact-message" id="contact-message" cols="30" rows="5" placeholder='Message' required></textarea>
          <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}
