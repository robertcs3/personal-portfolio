import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup';


const schema = yup.object().shape(({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
}))

export default function Contact() {


  return (
    <div id='contact-page' className='flex flex-col items-center container mx-auto pt-12 mb-12 section'>

      <div className='col-span-full flex justify-center p-12 items-end text-4xl'>
        <header>Contact</header>
      </div>

      <p className='mb-10 w-full sm:max-w-lg px-12 md:text-left text-center'>If you have an opportunity to share, or would like to discuss anything, feel free to leave me a message below!</p>
      <Formik
        validationSchema={schema}
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}

        onSubmit={(values, actions) => {
          console.log(values.name, values.email, values.message)
          const data = {
            name: values.name,
            email: values.email,
            message: values.message,
          }

          const url = 'https://script.google.com/macros/s/AKfycbz6ZUMGOK2r2eQ3_gZ3ym6HkHfdeJ5mzKo9H_YqAW74imXIqxI-iMpE1Jrq9PFwS21Xqw/exec'

          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
          }).then((res) => res.json())
            .then((data) => console.log('data', data))
            .catch((err) => console.log('err', err));
          actions.resetForm({
            values: {
              name: '',
              email: '',
              message: '',
            }
          })
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (

          <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full px-12 sm:max-w-lg' >
            <input className='bg-slate-800 py-1 pl-1 ' type="text" name='name' placeholder='Name' onChange={handleChange} onBlur={handleBlur} value={values.name} required />

            <input className='bg-slate-800 py-1 pl-1' type="email" placeholder='E-mail' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} required />

            <textarea className='bg-slate-800  py-1 pl-1' name="message" id="message" cols="30" rows="5" placeholder='Message'
              onChange={handleChange} onBlur={handleBlur} value={values.message} required></textarea>


            <div className='flex justify-end mb-12 pt-3'>
              <button id='submit' className=' bg-red-500 p-2 hover:rounded-lg duration-300' type='submit'>Submit</button>
            </div>

          </form>

        )}

      </Formik>


    </div>
  )
}
