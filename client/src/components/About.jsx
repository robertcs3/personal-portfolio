import React from 'react'

export default function About() {
  return (
    <div id='about-page' className='grid  md:grid-cols-2 md:grid-rows-6 min-h-screen container mx-auto text-xl'>

      <header>About</header>

      <section className='flex items-center p-12 md:row-span-4'>
        As an aspiring full-stack developer with a focus on front-end development,
        I strive to translate designs into responsive, functional and high-performance
        web applications. I'm inspired by visually appealing and user-friendly websites, and am commited
        to learning the necessary and latest technologies in order to bring the most value to my projects.
      </section>
      
      <section className='flex justify-center items-center lg:row-span-4'>
        <div className='grid grid-cols-4 grid-rows-4 gap-5'>

          <div className='tech-set'>
          <i className="devicon-html5-plain colored tech-icon"></i>
          <span className='tech-icon-name'>HTML</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-css3-plain colored tech-icon"></i>
          <span className='tech-icon-name'>CSS</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-javascript-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Javascript</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-typescript-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Typescript</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-react-original colored tech-icon"></i>
          <span className='tech-icon-name'>React</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-express-original colored tech-icon"></i>
          <span className='tech-icon-name'>Express</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-nodejs-plain colored tech-icon"></i>
          <span className='tech-icon-name'>NodeJs</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-mongodb-plain colored tech-icon"></i>
          <span className='tech-icon-name'>MongoDB</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-tailwindcss-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Tailwind</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-bootstrap-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Bootstrap</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-jest-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Jest</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-java-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Java</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-git-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Git</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-npm-original-wordmark colored tech-icon"></i>
          <span className='tech-icon-name'>Npm</span>
          </div>

          <div className='tech-set'>
          <i class="devicon-yarn-plain colored tech-icon"></i>
          <span className='tech-icon-name'>Yarn</span>
          </div>

          <div className="tech-set">
            <i class="devicon-visualstudio-plain colored tech-icon"></i>
            <span className='tech-icon-name'>VS Code</span>
            </div>

        </div>
      </section>
    </div>
  )
}
