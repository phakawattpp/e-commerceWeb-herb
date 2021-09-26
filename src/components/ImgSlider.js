import { Slide } from 'react-slideshow-image';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import Banner from '../icon/Frame.svg';

const slideImages = [Banner, Banner, Banner];

export default function ImgSlider() {
  return (
    <Slide easing='ease'>
      <div className='each-slide'>
        <div
          style={{
            backgroundImage: `url(${slideImages[0]})`,
            height: '100vh',
            maxHeight: '690px',
          }}
        >
          <span>Make Life Better</span>
        </div>
      </div>
      <div className='each-slide'>
        <div
          style={{
            backgroundImage: `url(${slideImages[1]})`,
            height: '100vh',
            maxHeight: '690px',
          }}
        >
          <span>Make Life Better</span>
        </div>
      </div>
      <div className='each-slide'>
        <div
          style={{
            backgroundImage: `url(${slideImages[2]})`,
            height: '100vh',
            maxHeight: '690px',
          }}
        >
          <span>Make Life Better</span>
        </div>
      </div>
    </Slide>
  );
}
