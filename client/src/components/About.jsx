import React from 'react'

export default function About() {
  return (
    <div id='about-page' className='grid lg:grid-cols-2 lg:auto-rows-min min-h-min container mx-auto pt-12 mb-12 section'>

      <div className='col-span-full flex justify-center p-12 items-end text-4xl '>
        <header>About</header>
      </div>

      <div className='flex justify-center items-end'>
        <img className=' rounded-full h-56 ' src="https://res.cloudinary.com/dbwb3uyii/image/upload/v1674435656/portfolio/fotor_2023-1-22_18_59_26_iaco7z.png" alt="profile-picture" />
        </div>

      <section className='p-12 lg:row-start-3 lg:row-end-4 text-center md:text-left leading-relaxed '>
        <p>
          As a full-stack developer with a focus on front-end development,
          I strive to translate designs into responsive, functional and high-performance
          web applications.
        </p> 
        <p>
          I'm inspired by visually appealing and user-friendly websites, and am driven
          to learning the necessary and latest technologies to bring the most value to my projects.
        </p>
      </section>
      
      <section className='flex justify-center lg:row-start-2 lg:row-end-4 p-12'>
        <div className='grid grid-cols-4 grid-rows-4 gap-7'>

          <div className='tech-set'>
          <i className="devicon-html5-plain colored tech-icon"></i>
          <span className='tech-icon-name'>HTML</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-css3-plain colored tech-icon"></i>
          <span className='tech-icon-name'>CSS</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-javascript-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Javascript</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-typescript-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Typescript</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-react-original colored tech-icon"></i>
          <span className='tech-icon-name'>React</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-express-original colored tech-icon"></i>
          <span className='tech-icon-name'>Express</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-nodejs-plain colored tech-icon"></i>
          <span className='tech-icon-name'>NodeJs</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-mongodb-plain colored tech-icon"></i>
          <span className='tech-icon-name'>MongoDB</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-tailwindcss-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Tailwind</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-bootstrap-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Bootstrap</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-jest-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Jest</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-java-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Java</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-git-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Git</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-npm-original-wordmark colored tech-icon"></i>
          <span className='tech-icon-name'>Npm</span>
          </div>

          <div className='tech-set'>
          <i className="devicon-yarn-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Yarn</span>
          </div>

          <div className="tech-set">
            <i className="devicon-visualstudio-plain colored tech-icon"></i>
            <span className='tech-icon-name whitespace-nowrap'>VS Code</span>
            </div>

        </div>
      </section>

      <section className='flex justify-center items-center lg:row-start-4 lg:row-end-5 lg:col-span-full p-12 text-center'>
        Outside of development, I enjoy calisthenics and competitive gaming.
      </section>
    </div>
  )
}
