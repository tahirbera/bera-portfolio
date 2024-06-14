import React from 'react'
import web1 from '../images/web1.png';
import web2 from '../images/web2.png';
import web3 from '../images/web3.png';
import web4 from '../images/web4.png';
import web5 from '../images/web5.png';

const Projects = () => {
  return (
    <div className='contact-projects'>

      <div className='address'>
        <div className='contact-logo-projects'>
            <img  className='contact-image' src={web1} />
        </div>
        <h2 className='contact-h2'> Bera Dev / Digital Web Agency</h2>
        <p style={{opacity: '0.7'}}>React.JS / HTML / CSS</p>
        <p><a className='project-a' href='https://github.com/tahirbera/web-agency'>Github</a> </p>
        <p><a className='project-a' href='https://web-agency-rose-iota.vercel.app/'>Live Server</a></p>
      </div>

      <div className='mail'>
        <div className='contact-logo-projects'>
          <img  className='contact-image' src={web5} />
      </div>
        <h2 className='contact-h2'>Redux Blog</h2>
        <p style={{opacity: '0.7'}}>React.JS / Redux / HTML / CSS</p>
        <p><a className='project-a' href='https://github.com/tahirbera/rtk-post'>Github</a> </p>
        <p><a className='project-a' href='https://rtk-post.vercel.app/'>Live Server</a></p>
        
      </div>

      <div className='number'>
        <div className='contact-logo-projects'>
            <img  className='contact-image' src={web3} />
        </div>
        <h2 className='contact-h2'>Bundle Blog Clone</h2>
        <p style={{opacity: '0.7'}}>React.JS / HTML / CSS</p>
        <p><a className='project-a' href='https://github.com/tahirbera/blog-app'>Github</a> </p>
        <p><a className='project-a' href='https://blog-app-five-woad.vercel.app/'>Live Server</a></p>
      </div>

      <div className='bionluk'>
        <div className='contact-logo-projects'>
           <img  className='contact-image' src={web2} />
        </div>
        <h2 className='contact-h2'>Editable T-Shirt Project</h2>
        <p style={{opacity: '0.7'}}>React.JS / HTML / CSS</p>
        <p><a className='project-a' href='https://github.com/tahirbera/editablet-shirt'>Github</a> </p>
        <p><a className='project-a' href='https://editablet-shirt.vercel.app/'>Live Server</a></p>
      </div>

      <div className='bionluk'>
      <div className='contact-logo-projects'>
      <img  className='contact-image' src={web4} />
        </div>
        <h2 className='contact-h2'>Watch List Project</h2>
        <p style={{opacity: '0.7'}}>React.JS / HTML / CSS</p>
        <p><a className='project-a' href='https://github.com/tahirbera/watchy'>Github</a> </p>
        <p><a className='project-a' href='https://watchy-1.vercel.app/'>Live Server</a></p>
      </div>


      <div className='bionluk'>
      <div className='contact-logo-projects'>
      <img  className='contact-image' src='https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png' />
        </div>
        <h2 className='contact-h2'>GitHub for All Projects</h2>
        <p style={{opacity: '0.7'}}>React.JS / HTML / CSS / Redux / React Hooks</p>

        <p> <a className='project-a' href='https://github.com/tahirbera'>Github</a> </p>
        
      </div>
    </div>
  )
}

export default Projects