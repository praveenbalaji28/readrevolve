import React from 'react';
import ahaback from '../assets/banner-background/chumma.jpg';
import ohoback from '../assets/banner-background/vada.jpg';
import MyFooter from '../Components/MyFooter';

const About = () => {
  return (
    <div>
      <div className="background-image relative" style={{ backgroundImage: `url(${ahaback})`, height: '550px' }}>
        <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          This is About Page
        </div>
      </div>
      <div className='flex justify-center items-center bg-blue-300' style={{ minHeight: '500px',backgroundColor:'#f9fafb' }}>
        <div className="text-center text-black">
          <h2 className="text-3xl font-bold mb-4">Sample Title</h2>
          <div className="square-container">
            <p className="square-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo sit amet magna semper placera worg owrjn piWNG PIwng pinr poaerg p0neorn o wg- woaerbgf aerb eeb b erwb erb  erb  erwb  rwb  erb r b wrb wrb wro ub wvu 0  28hg t.</p>
          </div>
        </div>
      </div>
      <div  className="background-image relative"style={{ backgroundImage: `url(${ohoback})`, height: '700px',backgroundSize: 'cover'  }}>
        <div  className='space-y-5'>
                  <p>jfojvn eofvn oianef  pie </p>
        </div>
      </div>
      <div className='space-y-5 bg-green-900' style={{ minHeight: '300px' }}>
        <p>jfojvn eofvn oianef  pie </p>
      </div>
      <div>
        <MyFooter/>
      </div>
    </div>
  );
};

export default About;
