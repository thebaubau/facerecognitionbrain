import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';


const Logo = () => {
  return (
    <div className='ma4 mt4'>
      <Tilt className='tilted br2 shadow-2'>
        <div>
          <img className='pa2' src={brain} alt='logo'></img>
        </div>
      </Tilt>
    </div>


  )
}

export default Logo;